import { ImageResponse } from "next/og";
import { person } from "./data/profile";

export const alt = "Binsar Damanik — Backend Developer (Node.js / TypeScript)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const dots = [0, 200, 400, 600, 800, 1000];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1f3a",
          color: "#f2f6fb",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.05 }}>
            {person.name}
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              marginTop: 24,
              color: "#2fd08a",
            }}
          >
            Backend Developer — Node.js / TypeScript
          </div>
          <div style={{ fontSize: 32, marginTop: 16, color: "#b4c3d8" }}>
            NestJS · Express · PostgreSQL · Seeking remote (UTC+7)
          </div>
        </div>
        <div style={{ display: "flex", position: "relative", height: 48 }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 20,
              width: 1040,
              height: 8,
              background: "#2fd08a",
            }}
          />
          {dots.map((x) => (
            <div
              key={x}
              style={{
                position: "absolute",
                left: x,
                top: 6,
                width: 36,
                height: 36,
                borderRadius: 18,
                background: "#ffffff",
                border: "6px solid #0b1f3a",
              }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
