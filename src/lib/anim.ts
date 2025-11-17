// src/lib/anim.ts

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// efecto “magnético” para chips / badges
export function initMagnet(selector = "[data-magnet]", radius = 100) {
  const items = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!items.length) return () => {};

  const state = new Map<HTMLElement, { ox:number; oy:number; tx:number; ty:number }>();

  items.forEach((el) => {
    el.style.willChange = "transform";
    state.set(el, { ox: 0, oy: 0, tx: 0, ty: 0 });
  });

  let mx = -9999, my = -9999, raf = 0;

  const onMove = (e: MouseEvent) => {
    mx = e.clientX;
    my = e.clientY;
  };

  const step = () => {
    items.forEach((el) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = mx - cx;
      const dy = my - cy;
      const d = Math.hypot(dx, dy);

      const s = state.get(el)!;
      const force = d < radius ? (1 - d / radius) : 0;
      const aimX = (dx / (d || 1)) * force * 12; // máx 12px
      const aimY = (dy / (d || 1)) * force * 12;

      s.tx = lerp(s.tx, aimX, 0.18);
      s.ty = lerp(s.ty, aimY, 0.18);

      const rot = (s.tx * -0.6);

      el.style.transform = `translate(${s.tx}px, ${s.ty}px) rotate(${rot}deg)`;
    });

    raf = requestAnimationFrame(step);
  };

  window.addEventListener("mousemove", onMove);
  raf = requestAnimationFrame(step);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("mousemove", onMove);
    items.forEach((el) => {
      el.style.transform = "";
      el.style.willChange = "";
    });
  };
}

// reveal al hacer scroll (fade + translate + un pelín de blur)
export function initReveal(selector = "[data-reveal]") {
  const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!els.length || typeof IntersectionObserver === "undefined") {
    return () => {};
  }

  els.forEach((el) => {
    el.classList.add("reveal-init");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add("reveal-in");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  els.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
  };
}
