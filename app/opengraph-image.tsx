import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Faisal Amir — Frontend & UI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#09090b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <p
        style={{
          color: "#71717a",
          fontSize: 20,
          margin: 0,
          marginBottom: 16,
          fontFamily: "sans-serif",
        }}
      >
        urmauur.com
      </p>
      <h1
        style={{
          color: "#fafafa",
          fontSize: 64,
          fontWeight: 400,
          margin: 0,
          marginBottom: 16,
          fontFamily: "sans-serif",
          lineHeight: 1.1,
        }}
      >
        Faisal Amir
      </h1>
      <p
        style={{
          color: "#71717a",
          fontSize: 28,
          margin: 0,
          fontFamily: "sans-serif",
        }}
      >
        Frontend & UI Engineer from Indonesia
      </p>
    </div>,
    { ...size }
  );
}
