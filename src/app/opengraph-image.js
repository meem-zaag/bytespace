import { ImageResponse } from "next/og";
import { BRAND_COLORS, LOGO_MARK_PATHS } from "@/lib/constants/brand";
import { SITE } from "@/lib/constants/site";

export const alt = `${SITE.name}: get access to hundreds of courses`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image, in the hero's brand grid style. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        background: BRAND_COLORS.blue,
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)",
        backgroundSize: "120px 120px",
        color: BRAND_COLORS.white,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="58" height="64" viewBox="0 0 29 32" fill={BRAND_COLORS.lime}>
          {LOGO_MARK_PATHS.map((d) => (
            <path key={d} d={d} />
          ))}
        </svg>
        <span style={{ fontSize: 48, fontWeight: 700 }}>{SITE.name}</span>
      </div>
      <div style={{ marginTop: 48, fontSize: 76, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
        Get Access to Hundreds Courses Available
      </div>
      <div style={{ marginTop: 28, fontSize: 30, color: BRAND_COLORS.neutral100, maxWidth: 860 }}>
        {SITE.description}
      </div>
      <div
        style={{
          marginTop: 44,
          display: "flex",
          alignSelf: "flex-start",
          padding: "14px 32px",
          borderRadius: 999,
          background: BRAND_COLORS.lime,
          color: "#242528",
          fontSize: 28,
          fontWeight: 600,
        }}
      >
        Explore courses
      </div>
    </div>,
    size,
  );
}
