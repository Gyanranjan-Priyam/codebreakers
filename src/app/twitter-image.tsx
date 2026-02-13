import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CodeBreakers GCEK - Premier Coding Club'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Grid pattern background - Satori compatible */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 229, 255, 0.1) 0px, rgba(0, 229, 255, 0.1) 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, rgba(0, 229, 255, 0.1) 0px, rgba(0, 229, 255, 0.1) 1px, transparent 1px, transparent 50px)',
            opacity: 0.3,
          }}
        />

        {/* Glow effect - expanded gradient instead of blur for Satori compatibility */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(0, 229, 255, 0.3) 0%, rgba(0, 229, 255, 0.2) 20%, rgba(0, 229, 255, 0.1) 40%, rgba(0, 229, 255, 0.05) 60%, transparent 80%)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            zIndex: 1,
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: '#00e5ff',
              letterSpacing: '0.1em',
              textShadow: '0 0 60px rgba(0, 229, 255, 0.8)',
            }}
          >
            CODEBREAKERS
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#ffffff',
              opacity: 0.9,
              letterSpacing: '0.05em',
            }}
          >
            Premier Coding Club at GCEK
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: '#00e5ff',
                }}
              >
                500+
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  opacity: 0.7,
                }}
              >
                Members
              </div>
            </div>

            <div
              style={{
                width: 2,
                height: 80,
                background: 'rgba(0, 229, 255, 0.3)',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: '#00e5ff',
                }}
              >
                50+
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  opacity: 0.7,
                }}
              >
                Events
              </div>
            </div>

            <div
              style={{
                width: 2,
                height: 80,
                background: 'rgba(0, 229, 255, 0.3)',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: '#00e5ff',
                }}
              >
                100+
              </div>
              <div
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  opacity: 0.7,
                }}
              >
                Projects
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, transparent, #00e5ff, transparent)',
            opacity: 0.6,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
