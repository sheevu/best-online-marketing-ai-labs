// Progressive enhancement for the pre-rendered marketing pages.
(() => {
  // Equivalent to the sole configured Zaraz component, google-maps-rwg:
  // preserve Reserve with Google referral attribution without a network script.
  const referral = new URLSearchParams(location.search).get('rwg_token');
  if (referral) document.cookie = `_rwg_token=${encodeURIComponent(referral)}; Max-Age=2592000; Path=/; SameSite=Lax; Secure`;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  // Sitewide Leeila panel: load the Jotform agent only after a visitor opens it.
  const assistantPanel = document.querySelector('[data-assistant-panel]');
  const assistantToggle = document.querySelector('[data-assistant-toggle]');
  const assistantFrame = document.querySelector('[data-assistant-frame]');
  const setAssistantOpen = open => {
    if (!assistantPanel || !assistantToggle) return;
    assistantPanel.hidden = !open;
    assistantToggle.setAttribute('aria-expanded', String(open));
    assistantToggle.querySelector('span').textContent = open ? 'Close chat' : 'Ask Leeila AI';
    if (open && assistantFrame?.getAttribute('src') === 'about:blank') assistantFrame.src = assistantFrame.dataset.assistantFrame;
    if (open) assistantPanel.querySelector('[data-assistant-close]')?.focus();
    else assistantToggle.focus();
  };
  assistantToggle?.addEventListener('click', () => setAssistantOpen(assistantPanel.hidden));
  assistantPanel?.querySelector('[data-assistant-close]')?.addEventListener('click', () => setAssistantOpen(false));

  // One respectful delayed lead prompt per tab; the visitor controls WhatsApp handoff.
  const leadPopup = document.querySelector('[data-lead-popup]');
  const leadForm = leadPopup?.querySelector('[data-lead-form]');
  const leadSeenKey = 'sal-growth-review-prompt-seen';
  const markLeadSeen = () => { try { sessionStorage.setItem(leadSeenKey, '1'); } catch {} };
  const closeLeadPopup = () => { if (leadPopup) leadPopup.hidden = true; markLeadSeen(); };
  const showLeadPopup = () => {
    if (!leadPopup) return;
    leadPopup.hidden = false;
    leadPopup.querySelector('#lead-business')?.focus();
  };
  let leadAlreadySeen = false;
  try { leadAlreadySeen = sessionStorage.getItem(leadSeenKey) === '1'; } catch {}
  if (leadPopup && !leadAlreadySeen) window.setTimeout(showLeadPopup, 24000);
  leadPopup?.querySelector('[data-lead-close]')?.addEventListener('click', closeLeadPopup);
  leadPopup?.addEventListener('mousedown', event => { if (event.target === leadPopup) closeLeadPopup(); });
  leadForm?.addEventListener('submit', event => {
    event.preventDefault();
    const business = leadForm.elements.namedItem('business').value.trim();
    const goal = leadForm.elements.namedItem('goal').value;
    const message = [
      'Hi Sudarshan AI Labs, I would like a free growth review.',
      business ? `Business / website: ${business}` : '',
      `My priority: ${goal}`,
      'I found you on the website.'
    ].filter(Boolean).join('\n');
    const phone = leadPopup.dataset.whatsapp || '917080842220';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    closeLeadPopup();
  });
  leadPopup?.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeLeadPopup(); return; }
    if (event.key !== 'Tab') return;
    const focusable = [...leadPopup.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled])')];
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !leadPopup?.hidden) closeLeadPopup();
    else if (event.key === 'Escape' && assistantPanel && !assistantPanel.hidden) setAssistantOpen(false);
  });

  const loadAhrefs = () => {
    if (document.querySelector('script[data-ahrefs-analytics]')) return;
    const script = document.createElement('script');
    script.src = 'https://analytics.ahrefs.com/analytics.js';
    script.dataset.key = 'Nq8A5lfKCZ3ODQmPOotLqQ';
    script.dataset.ahrefsAnalytics = 'true';
    script.async = true;
    document.head.appendChild(script);
  };
  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadAhrefs, { timeout: 2500 });
  } else {
    setTimeout(loadAhrefs, 1800);
  }
  const menu = document.querySelector('.v-links');
  const menuButton = document.querySelector('.v-menu');
  const setMenuState = open => {
    menu?.classList.toggle('open', open);
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.documentElement.classList.toggle('menu-is-open', open);
  };
  const closeMenus = () => {
    setMenuState(false);
    document.querySelectorAll('.v-services-menu, .v-location-menu').forEach(item => {
      item.classList.remove('active');
      item.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  };
  menuButton?.addEventListener('click', () => {
    setMenuState(!menu.classList.contains('open'));
  });
  document.querySelectorAll('.v-services-menu > button, .v-location-menu > button').forEach(button => {
    button.addEventListener('click', () => {
      const parent = button.parentElement;
      const open = !parent.classList.contains('active');
      document.querySelectorAll('.v-services-menu, .v-location-menu').forEach(item => {
        item.classList.remove('active');
        item.querySelector('button').setAttribute('aria-expanded', 'false');
      });
      parent.classList.toggle('active', open);
      button.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', event => {
    if (event.target.closest('a') || !event.target.closest('.v-nav')) closeMenus();
    const link = event.target.closest('a[href]');
    if (!link) return;
    const method = link.href.includes('wa.me/') ? 'whatsapp' : link.href.startsWith('tel:') ? 'phone' : null;
    if (method) window.gtag?.('event', 'generate_lead', {method, campaign: 'local_visibility', link_url: link.href});
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && (menu?.classList.contains('open') || document.querySelector('.v-nav .active'))) {
      closeMenus();
      menuButton?.focus();
    }
  });
  addEventListener('resize', () => {
    if (innerWidth > 920 && menu?.classList.contains('open')) closeMenus();
  }, {passive:true});

  const tabs = [...document.querySelectorAll('[data-goal]')];
  const selectGoal = tab => {
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectGoal(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectGoal(tabs[next]); tabs[next].focus(); }
    });
  });

  const track = document.querySelector('.v-product-track');
  if (track) {
    const cards = [...track.children];
    const dots = [...document.querySelectorAll('[data-product-index]')];
    const pause = document.querySelector('.v-slider-pause');
    const counterCurrent = document.querySelector('.v-slider-current');
    const counterTotal = document.querySelector('.v-slider-total');
    if (counterTotal) counterTotal.textContent = String(cards.length).padStart(2, '0');
    let current = 0, offsets = [], paused = reducedMotion.matches, visible = false, hovering = false, focused = false, frame = 0, drag = null, dragged = false;
    // Read geometry together on resize & load; scrolling only reads scrollLeft.
    const measure = () => { offsets = cards.map(card => card.offsetLeft - track.offsetLeft); };
    measure();
    window.addEventListener('load', measure);
    window.addEventListener('resize', measure);
    new ResizeObserver(measure).observe(track);

    const update = index => {
      if (current === index) return;
      current = index;
      cards.forEach((card, i) => card.classList.toggle('is-current', i === index));
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        if (i === index) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      if (counterCurrent) counterCurrent.textContent = String(index + 1).padStart(2, '0');
      // Highlight category pill if all items of a category are active
      const activeCard = cards[index];
      if (activeCard) {
        const cat = activeCard.getAttribute('data-category');
        document.querySelectorAll('[data-category-filter]').forEach(btn => {
          const match = btn.getAttribute('data-category-filter') === cat;
          btn.classList.toggle('is-matching', match);
        });
      }
    };

    const go = index => {
      if (!offsets.length || offsets.length !== cards.length) measure();
      const safe = (index + cards.length) % cards.length;
      track.scrollTo({left: offsets[safe] ?? 0, behavior: reducedMotion.matches ? 'instant' : 'smooth'});
    };

    track.addEventListener('scroll', () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const left = track.scrollLeft;
        const nearest = offsets.reduce((best, offset, i) => Math.abs(offset - left) < Math.abs(offsets[best] - left) ? i : best, 0);
        update(nearest);
      });
    }, {passive:true});

    document.querySelector('[aria-label="View previous products"]')?.addEventListener('click', () => go(current - 1));
    document.querySelector('[aria-label="View next products"]')?.addEventListener('click', () => go(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));
    
    document.querySelectorAll('[data-category-filter]').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('[data-category-filter]').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        const cat = button.getAttribute('data-category-filter');
        if (!cat || cat === 'All Plans') {
          go(0);
        } else {
          const targetIndex = cards.findIndex(c => c.getAttribute('data-category') === cat);
          if (targetIndex >= 0) go(targetIndex);
        }
      });
    });

    const updatePause = () => {
      if (!pause) return;
      const textSpan = pause.querySelector('.v-pause-text');
      if (textSpan) textSpan.textContent = paused ? 'Play' : 'Pause';
      else pause.textContent = paused ? 'Play' : 'Pause';
      pause.setAttribute('aria-label', paused ? 'Play product carousel' : 'Pause product carousel');
      pause.setAttribute('aria-pressed', String(paused));
      pause.classList.toggle('is-paused', paused);
    };
    pause?.addEventListener('click', () => { paused = !paused; updatePause(); });
    updatePause();
    reducedMotion.addEventListener('change', () => { if(reducedMotion.matches) { paused = true; updatePause(); } });
    track.addEventListener('mouseenter', () => { hovering = true; });
    track.addEventListener('mouseleave', () => { hovering = false; });
    track.addEventListener('focusin', () => { focused = true; });
    track.addEventListener('focusout', event => { focused = track.contains(event.relatedTarget); });
    track.addEventListener('keydown', event => {
      if(event.target !== track) return;
      if(event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); go(current + (event.key === 'ArrowRight' ? 1 : -1)); }
    });
    track.addEventListener('pointerdown', event => {
      dragged = false;
      if(event.pointerType === 'mouse' && event.button === 0 && !event.target.closest('a,button')) drag = {x:event.clientX, left:track.scrollLeft};
    });
    track.addEventListener('pointermove', event => {
      if(!drag || Math.abs(event.clientX - drag.x) < 6) return;
      dragged = true;
      track.setPointerCapture(event.pointerId);
      track.scrollLeft = drag.left - (event.clientX - drag.x);
    });
    const endDrag = event => { drag = null; if(track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId); };
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('click', event => { if(dragged) { event.preventDefault(); dragged = false; } }, true);

    const checkVis = () => {
      const rect = track.getBoundingClientRect();
      visible = rect.top < window.innerHeight && rect.bottom > 0;
    };
    checkVis();
    window.addEventListener('scroll', checkVis, { passive: true });
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0.05 }).observe(track);
    setInterval(() => { if(visible && !paused && !hovering && !focused && !drag && !document.hidden) go(current + 1); }, 3800);
  }

  // Founder content remains visible without JavaScript; reveal only below the fold with staggered entry.
  if (!reducedMotion.matches) {
    const items = [...document.querySelectorAll('[data-reveal]')];
    const below = items.filter(item => item.getBoundingClientRect().top >= innerHeight);
    document.documentElement.classList.add('sg-js');
    items.forEach(item => { if (!below.includes(item)) item.classList.add('is-revealed'); });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting) {
        const el = entry.target;
        const parent = el.parentElement;
        if (parent) {
          const siblings = [...parent.querySelectorAll('[data-reveal]')];
          const idx = siblings.indexOf(el);
          if (idx > 0) el.style.transitionDelay = `${Math.min(idx * 75, 450)}ms`;
        }
        el.classList.add('is-revealed');
        observer.unobserve(el);
      }
    }), {threshold:0.05});
    below.forEach(item => observer.observe(item));
  }

  
  // Proof cards 10-second automated text rotation
  const proofGrid = document.querySelector(".v-proof-grid");
  if (proofGrid) {
    const proofCards = [
      proofGrid.querySelector('[data-proof-card="0"]'),
      proofGrid.querySelector('[data-proof-card="1"]'),
      proofGrid.querySelector('[data-proof-card="2"]')
    ];
    const dots = [...document.querySelectorAll("[data-proof-dot]")];
    const slides = [
      [
        { h3: "Clear ownership", p: "Websites, content and agreed systems are documented for handover.", aText: "Meet the founder ↗", aHref: "/about-sheevum-goel" },
        { h3: "Useful depth", p: "Service and locality pages explain the customer problem, scope and limits.", aText: "Review the services ↗", aHref: "/digital-marketing-services" },
        { h3: "Honest proof", p: "Client case studies are added only with permission and enough context to verify them.", aText: "Request relevant examples ↗", aHref: "/contact#contact-options" }
      ],
      [
        { h3: "Zero agency lock-in", p: "Complete transfer of domain DNS, source code, ad accounts and automation pipelines.", aText: "Explore our model ↗", aHref: "/about-sheevum-goel#story" },
        { h3: "Stronger local signals", p: "Accurate profiles, relevant local content and clear service areas can support search visibility; outcomes vary.", aText: "Explore local SEO ↗", aHref: "/seo-services-lucknow" },
        { h3: "Faster follow-up", p: "WhatsApp auto-responders and Hindi-first CRM flows can help teams organise and respond to enquiries.", aText: "See automation tools ↗", aHref: "/ai-automation-lucknow" }
      ],
      [
        { h3: "Direct collaboration", p: "Discuss your goals with the founder and the people working on your project.", aText: "Read founder profile ↗", aHref: "/about-sheevum-goel" },
        { h3: "Useful measurement", p: "Track search visibility, site visits and enquiries with agreed analytics and Search Console measures.", aText: "Request an audit ↗", aHref: "/digital-marketing-services" },
        { h3: "Custom playbooks", p: "Tailored step-by-step SOPs and recorded documentation so your internal team operates independently.", aText: "Get in touch ↗", aHref: "/contact" }
      ]
    ];
    let activeIndex = 0;
    let timer = null;

    const setSlide = (idx) => {
      activeIndex = (idx + slides.length) % slides.length;
      proofGrid.classList.add("is-fading");
      setTimeout(() => {
        const currentData = slides[activeIndex];
        proofCards.forEach((card, i) => {
          if (!card || !currentData[i]) return;
          const h3 = card.querySelector("[data-proof-h3]");
          const p = card.querySelector("[data-proof-p]");
          const a = card.querySelector("[data-proof-a]");
          if (h3) h3.textContent = currentData[i].h3;
          if (p) p.textContent = currentData[i].p;
          if (a) {
            a.textContent = currentData[i].aText;
            a.href = currentData[i].aHref;
          }
        });
        dots.forEach((dot, i) => {
          dot.classList.toggle("is-active", i === activeIndex);
          dot.setAttribute("aria-current", String(i === activeIndex));
        });
        proofGrid.classList.remove("is-fading");
      }, 300);
    };

    const restartTimer = () => {
      clearInterval(timer);
      timer = setInterval(() => {
        if (!document.hidden && !proofGrid.matches(":hover")) {
          setSlide(activeIndex + 1);
        }
      }, 10000);
    };

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        setSlide(i);
        restartTimer();
      });
    });

    proofGrid.addEventListener("mouseenter", () => clearInterval(timer));
    proofGrid.addEventListener("mouseleave", restartTimer);
    restartTimer();
  }

  // Scroll-linked navigation elevation
  const nav = document.querySelector('.v-nav') || document.querySelector('.area-nav');
  if (nav) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.classList.toggle('is-scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }, {passive: true});
  }

  // Offer Lightbox / Modal progressive enhancement
  const offerLightbox = document.getElementById('offer-lightbox');
  if (offerLightbox) {
    const openOffer = () => {
      offerLightbox.hidden = false;
      requestAnimationFrame(() => {
        offerLightbox.classList.add('is-active');
        document.documentElement.classList.add('modal-is-open');
      });
    };
    const closeOffer = () => {
      offerLightbox.classList.remove('is-active');
      document.documentElement.classList.remove('modal-is-open');
      setTimeout(() => {
        if (!offerLightbox.classList.contains('is-active')) {
          offerLightbox.hidden = true;
        }
      }, 300);
    };

    offerLightbox.querySelectorAll('[data-close-offer]').forEach(btn => {
      btn.addEventListener('click', closeOffer);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !offerLightbox.hidden) {
        closeOffer();
      }
    });

    document.querySelectorAll('[data-open-offer]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        openOffer();
      });
    });
  }

})();
