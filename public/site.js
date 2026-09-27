// Progressive enhancement for the pre-rendered marketing pages.
(() => {
  // Equivalent to the sole configured Zaraz component, google-maps-rwg:
  // preserve Reserve with Google referral attribution without a network script.
  const referral = new URLSearchParams(location.search).get('rwg_token');
  if (referral) document.cookie = `_rwg_token=${encodeURIComponent(referral)}; Max-Age=2592000; Path=/; SameSite=Lax; Secure`;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
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
        { h3: "Local SEO dominance", p: "Rankings built on authentic Google Business Profiles and localized topical cluster content.", aText: "View local rankings ↗", aHref: "/seo-services-lucknow" },
        { h3: "Predictable leads", p: "Tailored WhatsApp auto-responders and Hindi-first CRM integrations converting traffic into sales.", aText: "See automation tools ↗", aHref: "/ai-automation-lucknow" }
      ],
      [
        { h3: "Direct engineering", p: "Work directly with senior AI & growth practitioners, not outsourced junior account reps.", aText: "Read founder profile ↗", aHref: "/about-sheevum-goel" },
        { h3: "Actionable telemetry", p: "Transparent Google Analytics & Search Console dashboards tracking genuine customer footfall.", aText: "Request an audit ↗", aHref: "/digital-marketing-services" },
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

  // Load the third-party assistant only after a visitor asks to open it.
  const chat = document.createElement('button');
  chat.type = 'button';
  chat.textContent = 'Ask AI';
  chat.setAttribute('aria-label', 'Ask AI — open the business assistant');
  chat.style.cssText = 'position:fixed;right:20px;bottom:20px;z-index:9999;border:1px solid #bba5ef;border-radius:24px;padding:14px 24px;background:#fff3fb;color:#332047;font:600 16px system-ui;box-shadow:0 4px 18px #33204722;cursor:pointer;touch-action:manipulation';
  document.body.appendChild(chat);
  chat.addEventListener('click', () => {
    chat.disabled = true;
    chat.textContent = 'Loading assistant…';
    const jf = document.createElement('script');
    jf.src = 'https://cdn.jotfor.ms/agent/embedjs/019aa7fd4aaa7cccb0ce1b2c0748666c3478/embed.js';
    jf.async = true;
    jf.onload = () => chat.remove();
    jf.onerror = () => { chat.disabled = false; chat.textContent = 'Retry AI assistant'; };
    document.body.appendChild(jf);
  });
})();
