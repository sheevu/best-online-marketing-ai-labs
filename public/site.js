// Progressive enhancement for the pre-rendered marketing pages.
(() => {
  // Equivalent to the sole configured Zaraz component, google-maps-rwg:
  // preserve Reserve with Google referral attribution without a network script.
  const referral = new URLSearchParams(location.search).get('rwg_token');
  if (referral) document.cookie = `_rwg_token=${encodeURIComponent(referral)}; Max-Age=2592000; Path=/; SameSite=Lax; Secure`;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const menu = document.querySelector('.v-links');
  const menuButton = document.querySelector('.v-menu');
  const closeMenus = () => {
    menu?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.v-services-menu, .v-location-menu').forEach(item => {
      item.classList.remove('active');
      item.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  };
  menuButton?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
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
    let current = 0, offsets = [], paused = reducedMotion.matches, visible = false, hovering = false, focused = false, frame = 0, drag = null, dragged = false;
    // Read geometry together on resize; scrolling only reads scrollLeft.
    const measure = () => { offsets = cards.map(card => card.offsetLeft - track.offsetLeft); };
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
    };
    const go = index => {
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
    const updatePause = () => {
      pause.textContent = paused ? 'Play' : 'Pause';
      pause.setAttribute('aria-label', paused ? 'Play product carousel' : 'Pause product carousel');
      pause.setAttribute('aria-pressed', String(paused));
    };
    pause.addEventListener('click', () => { paused = !paused; updatePause(); });
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
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(track);
    setInterval(() => { if(visible && !paused && !hovering && !focused && !drag && !document.hidden) go(current + 1); }, 4300);
  }

  // Founder content remains visible without JavaScript; reveal only below the fold.
  if (!reducedMotion.matches) {
    const items = [...document.querySelectorAll('[data-reveal]')];
    const below = items.filter(item => item.getBoundingClientRect().top >= innerHeight);
    document.documentElement.classList.add('sg-js');
    items.forEach(item => { if (!below.includes(item)) item.classList.add('is-revealed'); });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
    }), {threshold:0.05});
    below.forEach(item => observer.observe(item));
  }

  // Embedded Jotform agent for real-time visitor assistance
  try {
    const jf = document.createElement('script');
    jf.src = 'https://cdn.jotfor.ms/agent/embedjs/019aa7fd4aaa7cccb0ce1b2c0748666c3478/embed.js';
    jf.async = true;
    document.body.appendChild(jf);
  } catch {}
})();
