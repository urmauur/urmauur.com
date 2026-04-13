import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

const size = { width: 1200, height: 630 };

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") ?? "Faisal Amir";
  const description =
    searchParams.get("description") ?? "Frontend & UI Engineer from Indonesia";

  const iconData = readFileSync(join(process.cwd(), "app/icon1.png"));
  const base64 = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        background: "#09090b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
      }}
    >
      <img src={base64} width={80} height={80} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "#18181b",
          border: "1px solid #27272a",
          borderRadius: 999,
          padding: "6px 16px",
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#22c55e",
          }}
        />
        <span
          style={{
            color: "#a1a1aa",
            fontSize: 16,
            fontFamily: "sans-serif",
          }}
        >
          Available for opportunities
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <h1
          style={{
            color: "#fafafa",
            fontSize: 64,
            fontWeight: 400,
            margin: 0,
            fontFamily: "sans-serif",
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "#71717a",
            fontSize: 28,
            margin: 0,
            fontFamily: "sans-serif",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {description}
        </p>
      </div>
      <p
        style={{
          color: "#71717a",
          fontSize: 18,
          margin: 0,
          fontFamily: "sans-serif",
          position: "absolute",
          bottom: 48,
        }}
      >
        urmauur.com
      </p>
    </div>,
    { ...size }
  );
}
