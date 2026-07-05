"use client";

import * as React from "react";

// Animates a numeric value up from 0, once, when it first scrolls into view.
// Non-numeric values (e.g. "Examiners") render as-is.
export function CountUp({ value, className }) {
  const parsed = React.useMemo(() => {
    const m = String(value).match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!m) return null;
    return {
      prefix: m[1],
      suffix: m[3],
      target: parseFloat(m[2].replace(/,/g, "")),
      decimals: (m[2].split(".")[1] || "").length,
    };
  }, [value]);

  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setN(parsed.target);
      return;
    }
    let raf;
    let done = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (done || !entries[0].isIntersecting) return;
        done = true;
        io.disconnect();
        const dur = 1600;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(parsed.target * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
          else setN(parsed.target);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parsed]);

  if (!parsed) return <span className={className}>{value}</span>;

  const display = parsed.decimals
    ? n.toFixed(parsed.decimals)
    : Math.round(n).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
