/* ── Decorative Section Dividers ──
   Botanical vine with cute floating nature elements —
   leaves, flowers, butterflies, clouds, sprouts, mushrooms, stars. */

/* ── SVG Components ── */

function CuteLeaf({ color, color2 }: { color: string; color2: string }) {
  return (
    <svg viewBox="0 0 30 40" fill="none" className="w-full h-full">
      <path d="M15 2c-8 6-12 16-8 24 2-6 5-12 8-16 3 4 6 10 8 16 4-8 0-18-8-24z" fill={color} />
      <path d="M15 10v18" stroke={color2} strokeWidth="0.8" opacity="0.5" strokeLinecap="round" />
      <path d="M15 16c-3 2-5 4-6 6" stroke={color2} strokeWidth="0.6" opacity="0.4" strokeLinecap="round" />
      <path d="M15 20c3 2 5 3 6 5" stroke={color2} strokeWidth="0.6" opacity="0.4" strokeLinecap="round" />
    </svg>
  );
}

function CuteFlower({ petals, center }: { petals: string; center: string }) {
  return (
    <svg viewBox="0 0 30 30" fill="none" className="w-full h-full">
      <circle cx="15" cy="9" r="5" fill={petals} opacity="0.7" />
      <circle cx="20.5" cy="13" r="5" fill={petals} opacity="0.65" />
      <circle cx="18.5" cy="19" r="5" fill={petals} opacity="0.6" />
      <circle cx="11.5" cy="19" r="5" fill={petals} opacity="0.65" />
      <circle cx="9.5" cy="13" r="5" fill={petals} opacity="0.7" />
      <circle cx="15" cy="14.5" r="3.5" fill={center} />
    </svg>
  );
}

function Butterfly({ color1, color2 }: { color1: string; color2: string }) {
  return (
    <svg viewBox="0 0 36 28" fill="none" className="w-full h-full">
      <path d="M18 12c-5-8-15-8-14-1s10 8 14 5" fill={color1} opacity="0.6" />
      <path d="M18 12c5-8 15-8 14-1s-10 8-14 5" fill={color2} opacity="0.6" />
      <path d="M18 14c-3 3-8 8-6 11 2-3 5-7 6-11z" fill={color1} opacity="0.45" />
      <path d="M18 14c3 3 8 8 6 11-2-3-5-7-6-11z" fill={color2} opacity="0.45" />
      <ellipse cx="18" cy="16" rx="1" ry="6" fill={color1} opacity="0.4" />
      <path d="M17 8c-2-3-1-6 1-7" stroke={color1} strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
      <path d="M19 8c2-3 1-6-1-7" stroke={color2} strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
      <circle cx="16" cy="1.5" r="0.8" fill={color1} opacity="0.5" />
      <circle cx="20" cy="1.5" r="0.8" fill={color2} opacity="0.5" />
    </svg>
  );
}

function Cloud({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 50 28" fill="none" className="w-full h-full">
      <ellipse cx="25" cy="18" rx="18" ry="8" fill={color} opacity="0.35" />
      <ellipse cx="15" cy="14" rx="10" ry="8" fill={color} opacity="0.3" />
      <ellipse cx="32" cy="13" rx="12" ry="9" fill={color} opacity="0.3" />
      <ellipse cx="23" cy="10" rx="8" ry="7" fill={color} opacity="0.25" />
    </svg>
  );
}

function Mushroom({ cap, stem }: { cap: string; stem: string }) {
  return (
    <svg viewBox="0 0 26 30" fill="none" className="w-full h-full">
      <ellipse cx="13" cy="14" rx="11" ry="8" fill={cap} opacity="0.6" />
      <rect x="10" y="14" width="6" height="12" rx="3" fill={stem} opacity="0.4" />
      <circle cx="9" cy="11" r="1.5" fill="white" opacity="0.4" />
      <circle cx="15" cy="9" r="1.2" fill="white" opacity="0.35" />
      <circle cx="12" cy="13" r="1" fill="white" opacity="0.3" />
    </svg>
  );
}

function Sprout({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" className="w-full h-full">
      <path d="M12 28V14" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M12 14c-4-6-10-6-10-1s6 5 10 1z" fill={color} opacity="0.5" />
      <path d="M12 18c3-5 9-5 9-1s-5 4-9 1z" fill={color} opacity="0.4" />
    </svg>
  );
}

function TinyStar({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
      <path d="M10 2l2.2 5.5 5.8.5-4.4 3.8 1.4 5.7L10 14.5 4.9 17.5l1.5-5.7L2 8l5.8-.5z" fill={color} opacity="0.35" />
    </svg>
  );
}

/* ── Floating element wrapper ── */
function Float({ children, className }: { children: React.ReactNode; className: string }) {
  return <div className={`pointer-events-none absolute ${className}`}>{children}</div>;
}

/* ── Color palettes per variant ── */
const palettes = {
  a: { vine: "#a3cb8d", leaf1: "#c9e1b9", leaf2: "#e4f0dc", berry: "#e6a87e", flower: "#f2ccb1", accent: "#d5c6e0", warm: "#f9e6d8" },
  b: { vine: "#e6a87e", leaf1: "#f2ccb1", leaf2: "#f9e6d8", berry: "#b9a1ca", flower: "#d5c6e0", accent: "#c9e1b9", warm: "#f9edcf" },
  c: { vine: "#b9a1ca", leaf1: "#d5c6e0", leaf2: "#ebe4f0", berry: "#e8c06a", flower: "#f2d99e", accent: "#e6a87e", warm: "#f2ccb1" },
  d: { vine: "#e8c06a", leaf1: "#f2d99e", leaf2: "#f9edcf", berry: "#a3cb8d", flower: "#c9e1b9", accent: "#d5c6e0", warm: "#ebe4f0" },
};

export function ShapeDivider({ variant = "a" }: { variant?: "a" | "b" | "c" | "d" }) {
  const c = palettes[variant];
  return (
    <div className="relative h-28">
      {/* ── Floating elements — all centered vertically around the vine ── */}

      {/* Clouds — slow sway */}
      <Float className="left-[5%] top-1/2 -translate-y-1/2 -mt-4 w-16 h-9 animate-sway delay-100 opacity-70">
        <Cloud color={c.warm} />
      </Float>
      <Float className="right-[8%] top-1/2 -translate-y-1/2 mt-2 w-12 h-7 animate-sway delay-400 opacity-50">
        <Cloud color={c.accent} />
      </Float>

      {/* Butterflies — fluttery */}
      <Float className="left-[18%] top-1/2 -translate-y-1/2 -mt-5 w-10 h-7 animate-flutter delay-200">
        <Butterfly color1={c.flower} color2={c.accent} />
      </Float>
      <Float className="right-[22%] top-1/2 -translate-y-1/2 mt-3 w-8 h-6 animate-flutter delay-500">
        <Butterfly color1={c.accent} color2={c.flower} />
      </Float>

      {/* Leaves — floating up and down */}
      <Float className="left-[32%] top-1/2 -translate-y-1/2 -mt-3 w-6 h-8 animate-float-up delay-100">
        <CuteLeaf color={c.leaf1} color2={c.vine} />
      </Float>
      <Float className="right-[35%] top-1/2 -translate-y-1/2 mt-4 w-5 h-7 animate-float-down delay-300">
        <CuteLeaf color={c.leaf2} color2={c.vine} />
      </Float>
      <Float className="left-[70%] top-1/2 -translate-y-1/2 -mt-2 w-4 h-6 animate-float-up delay-500">
        <CuteLeaf color={c.leaf1} color2={c.vine} />
      </Float>

      {/* Flowers — gentle drift */}
      <Float className="left-[45%] top-1/2 -translate-y-1/2 -mt-6 w-9 h-9 animate-drift delay-200">
        <CuteFlower petals={c.flower} center={c.berry} />
      </Float>
      <Float className="right-[42%] top-1/2 -translate-y-1/2 mt-5 w-7 h-7 animate-drift delay-400">
        <CuteFlower petals={c.accent} center={c.berry} />
      </Float>

      {/* Sprouts */}
      <Float className="left-[58%] top-1/2 -translate-y-1/2 mt-4 w-5 h-7 animate-float-up delay-300">
        <Sprout color={c.leaf1} />
      </Float>
      <Float className="left-[12%] top-1/2 -translate-y-1/2 mt-5 w-4 h-6 animate-float-up delay-500">
        <Sprout color={c.accent} />
      </Float>

      {/* Mushrooms */}
      <Float className="right-[15%] top-1/2 -translate-y-1/2 mt-3 w-7 h-8 animate-float-down delay-100">
        <Mushroom cap={c.berry} stem={c.warm} />
      </Float>
      <Float className="left-[78%] top-1/2 -translate-y-1/2 -mt-3 w-5 h-6 animate-float-down delay-400">
        <Mushroom cap={c.flower} stem={c.leaf2} />
      </Float>

      {/* Tiny stars — twinkling */}
      <Float className="left-[25%] top-1/2 -translate-y-1/2 -mt-5 w-4 h-4 animate-wiggle delay-100">
        <TinyStar color={c.berry} />
      </Float>
      <Float className="right-[30%] top-1/2 -translate-y-1/2 mt-6 w-3 h-3 animate-wiggle delay-300">
        <TinyStar color={c.flower} />
      </Float>
      <Float className="left-[52%] top-1/2 -translate-y-1/2 -mt-7 w-3.5 h-3.5 animate-wiggle delay-500">
        <TinyStar color={c.accent} />
      </Float>
      <Float className="right-[5%] top-1/2 -translate-y-1/2 mt-2 w-3 h-3 animate-wiggle delay-200">
        <TinyStar color={c.leaf1} />
      </Float>

      {/* ── Main vine — centered ── */}
      <svg viewBox="0 0 1200 70" className="absolute inset-0 w-full h-full max-w-5xl mx-auto left-0 right-0" preserveAspectRatio="xMidYMid meet" fill="none">
        <path
          d="M0 35 Q100 15 200 35 T400 35 T600 35 T800 35 T1000 35 T1200 35"
          stroke={c.vine}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Paired leaves along vine */}
        <path d="M120 33c-4-12 4-20 10-16 0 8-4 14-10 16z" fill={c.leaf1} opacity="0.5" />
        <path d="M130 33c3-10 10-14 12-8-2 6-7 9-12 8z" fill={c.leaf2} opacity="0.4" />
        <path d="M320 37c4 12-4 20-10 16 0-8 4-14 10-16z" fill={c.leaf1} opacity="0.45" />
        <path d="M310 37c-3 10-10 14-12 8 2-6 7-9 12-8z" fill={c.leaf2} opacity="0.35" />
        <path d="M520 33c-5-10 2-20 9-16 1 8-3 14-9 16z" fill={c.leaf1} opacity="0.5" />
        <path d="M530 33c4-8 10-12 11-6-2 6-6 8-11 6z" fill={c.leaf2} opacity="0.4" />
        <path d="M720 37c5 10-2 20-9 16-1-8 3-14 9-16z" fill={c.leaf1} opacity="0.45" />
        <path d="M920 33c-4-12 4-20 10-16 0 8-4 14-10 16z" fill={c.leaf1} opacity="0.45" />
        <path d="M1100 37c4 10-3 18-8 14 0-7 3-12 8-14z" fill={c.leaf1} opacity="0.4" />

        {/* Vine flowers */}
        <g opacity="0.45" transform="translate(230, 30)">
          <circle cx="0" cy="-4" r="3" fill={c.flower} />
          <circle cx="3.8" cy="-1.2" r="3" fill={c.flower} />
          <circle cx="2.4" cy="3.2" r="3" fill={c.flower} />
          <circle cx="-2.4" cy="3.2" r="3" fill={c.flower} />
          <circle cx="-3.8" cy="-1.2" r="3" fill={c.flower} />
          <circle cx="0" cy="0" r="2" fill={c.berry} />
        </g>
        <g opacity="0.35" transform="translate(630, 38)">
          <circle cx="0" cy="-3.5" r="2.5" fill={c.flower} />
          <circle cx="3.3" cy="-1" r="2.5" fill={c.flower} />
          <circle cx="2" cy="2.8" r="2.5" fill={c.flower} />
          <circle cx="-2" cy="2.8" r="2.5" fill={c.flower} />
          <circle cx="-3.3" cy="-1" r="2.5" fill={c.flower} />
          <circle cx="0" cy="0" r="1.8" fill={c.berry} />
        </g>
        <g opacity="0.4" transform="translate(1030, 32)">
          <circle cx="0" cy="-3" r="2.5" fill={c.accent} />
          <circle cx="2.8" cy="-1" r="2.5" fill={c.accent} />
          <circle cx="1.8" cy="2.4" r="2.5" fill={c.accent} />
          <circle cx="-1.8" cy="2.4" r="2.5" fill={c.accent} />
          <circle cx="-2.8" cy="-1" r="2.5" fill={c.accent} />
          <circle cx="0" cy="0" r="1.5" fill={c.berry} />
        </g>

        {/* Berry clusters */}
        <circle cx="430" cy="33" r="3" fill={c.berry} opacity="0.4" />
        <circle cx="438" cy="30" r="2.2" fill={c.berry} opacity="0.3" />
        <circle cx="435" cy="37" r="2" fill={c.berry} opacity="0.25" />
        <circle cx="830" cy="37" r="2.5" fill={c.berry} opacity="0.35" />
        <circle cx="837" cy="34" r="2" fill={c.berry} opacity="0.3" />

        {/* Tendrils */}
        <path d="M170 30c2-6 8-8 10-4" stroke={c.vine} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.3" />
        <path d="M570 30c-2-6-8-8-10-4" stroke={c.vine} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.3" />
        <path d="M970 30c2-6 8-8 10-4" stroke={c.vine} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.3" />
      </svg>
    </div>
  );
}
