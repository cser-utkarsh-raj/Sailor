import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mast */}
          <line x1="60" y1="20" x2="60" y2="78" stroke="#7BB8E0" strokeWidth="5" strokeLinecap="round" />

          {/* Left sail — coral/pink */}
          <path
            d="M58 24 L58 72 L30 62 Z"
            fill="#F2908A"
            stroke="#101C31"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Right sail — pale seafoam */}
          <path
            d="M62 28 L62 72 L85 58 Z"
            fill="#D5E8E0"
            stroke="#101C31"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Hull */}
          <path
            d="M25 76 L95 76 L85 92 L35 92 Z"
            fill="#2D5887"
            stroke="#101C31"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Ocean waves / blobs at the bottom */}
          <path
            d="M20 92 Q35 105 50 92 T80 92 T100 85"
            fill="none"
            stroke="#7BB8E0"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
