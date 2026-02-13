import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00e5ff',
          fontWeight: 900,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        {/* CB icon with border */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '140px',
            height: '140px',
            border: '4px solid #00e5ff',
            borderRadius: '20px',
            zIndex: 1,
          }}
        >
          CB
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
