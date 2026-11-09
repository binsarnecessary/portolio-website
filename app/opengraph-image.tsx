import { ImageResponse } from "next/og";
import { person } from "./data/profile";
import { positioning, statusChips } from "./data/person";

export const alt = "Binsar Damanik — Backend Developer (Node.js / TypeScript)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const [role, ...rest] = positioning;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#0f172a",
          padding: "80px 88px",
          borderTop: "12px solid #4f46e5",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
            {person.name}
          </div>
          <div style={{ fontSize: 42, fontWeight: 600, marginTop: 28, color: "#4f46e5" }}>
            {role}
          </div>
          <div style={{ fontSize: 30, marginTop: 16, color: "#475569" }}>{rest.join(" · ")}</div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {statusChips.map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                fontSize: 26,
                color: "#334155",
                background: "#f8fafc",
                border: "2px solid #e2e8f0",
                borderRadius: 999,
                padding: "8px 24px",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
