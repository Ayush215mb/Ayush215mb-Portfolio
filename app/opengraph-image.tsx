import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ayush Yadav — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* Background grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          display: "flex",
        }}
      />

      {/* Subtle glow top-left */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          display: "flex",
        }}
      />

      {/* Left content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0px",
          maxWidth: "640px",
        }}
      >
        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#4ade80",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#4ade80",
              fontSize: "14px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Open to Work
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Ayush</span>
          <span>Yadav</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "22px",
            color: "#a3a3a3",
            fontWeight: 400,
            letterSpacing: "0.01em",
            marginBottom: "36px",
            display: "flex",
          }}
        >
          Full-Stack Developer
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {["React", "Next.js", "Node.js", "TypeScript", "React Native"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "6px 14px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "6px",
                  color: "#d4d4d4",
                  fontSize: "13px",
                  fontWeight: 500,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  display: "flex",
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>

        {/* Divider + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#525252",
              fontSize: "14px",
              letterSpacing: "0.08em",
            }}
          >
            glevoidd.in
          </span>
        </div>
      </div>

      {/* Right — profile image */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        {/* Middle ring */}
        <div
          style={{
            position: "absolute",
            width: "248px",
            height: "248px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
          }}
        />
        {/* Photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.glevoidd.in/AyushYadav.jpeg"
          width={220}
          height={220}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid rgba(255,255,255,0.15)",
          }}
          alt="Ayush Yadav"
        />

        {/* Patent badge */}
        <div
          style={{
            position: "absolute",
            bottom: "-8px",
            right: "-16px",
            backgroundColor: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "8px",
            padding: "8px 12px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          <span
            style={{
              color: "#fbbf24",
              fontSize: "11px",
              fontWeight: 600,
              display: "flex",
            }}
          >
            📄 Patent Holder
          </span>
          <span style={{ color: "#737373", fontSize: "10px", display: "flex" }}>
            202531042207 A
          </span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
