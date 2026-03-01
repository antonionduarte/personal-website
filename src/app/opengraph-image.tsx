import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "António Duarte - Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#171715",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#c9c2a5",
            marginBottom: 16,
          }}
        >
          António Duarte
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#8a8468",
            marginBottom: 40,
          }}
        >
          Software Engineer | Distributed Systems
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Distributed Systems", "Parallel Computing", "Algorithm Design"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 20,
                  color: "#8fad6e",
                  border: "1px solid #3d5a27",
                  borderRadius: 12,
                  padding: "8px 20px",
                  backgroundColor: "rgba(143,173,110,0.1)",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 24,
            color: "#8a8468",
          }}
        >
          antonionduarte.dev
        </div>
      </div>
    ),
    { ...size },
  )
}
