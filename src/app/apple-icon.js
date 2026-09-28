import { ImageResponse } from "next/og";
import { BRAND_COLORS, LOGO_MARK_PATHS } from "@/lib/constants/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the lime logo mark on brand blue. */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BRAND_COLORS.blue,
      }}
    >
      <svg width="104" height="114" viewBox="0 0 29 32" fill={BRAND_COLORS.lime}>
        {LOGO_MARK_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    </div>,
    size,
  );
}
