export default function IceCreamBar({ color = '#f5e6c8', size = 1 }) {
  const w = 90 * size
  const h = 130 * size

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 90 130"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(4px 8px 16px rgba(0,0,0,0.12))' }}
    >
      {/* Ice cream block */}
      <rect x="5" y="5" width="80" height="85" rx="18" ry="18" fill={color} />
      {/* Subtle shine */}
      <rect x="15" y="12" width="18" height="60" rx="9" fill="rgba(255,255,255,0.35)" />
      {/* Stick */}
      <rect x="33" y="82" width="24" height="44" rx="8" fill="#d4a96a" />
      {/* Stick grain lines */}
      <line x1="40" y1="90" x2="40" y2="118" stroke="#c0944a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="50" y1="90" x2="50" y2="118" stroke="#c0944a" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
