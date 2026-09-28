/**
 * Ant Design theme mapped from the Figma Style Guide.
 * Palette values mirror the `@theme` tokens in `src/app/globals.css` (antd needs literal colors
 * to derive hover/active shades), so keep both in sync when a token changes.
 */
const palette = {
  white: "#ffffff",
  neutral50: "#f5f5f6",
  neutral100: "#e5e6e8",
  neutral200: "#ced0d3",
  neutral300: "#abaeb5",
  neutral400: "#82868e",
  neutral700: "#4b4c53",
  neutral950: "#242528",
  primary800: "#003be2",
  lime300: "#e4ff54",
  lime400: "#d4fb20",
  lime500: "#cbfc01",
  error: "#e5484d",
};

const fontFamily = "var(--font-satoshi), ui-sans-serif, system-ui, sans-serif";

/** @type {import("antd").ThemeConfig} */
const theme = {
  cssVar: { key: "bytespace" },
  hashed: false,
  token: {
    fontFamily,
    fontSize: 16,
    lineHeight: 1.6,
    colorPrimary: palette.primary800,
    colorLink: palette.primary800,
    colorText: palette.neutral950,
    colorTextSecondary: palette.neutral700,
    colorTextPlaceholder: palette.neutral400,
    colorTextDisabled: palette.neutral300,
    colorBorder: palette.neutral100,
    colorBorderSecondary: palette.neutral200,
    colorBgContainer: palette.white,
    colorBgContainerDisabled: palette.neutral50,
    colorError: palette.error,
    borderRadius: 12,
    borderRadiusLG: 24,
    controlHeight: 46,
    controlHeightLG: 52,
    controlOutline: "rgba(0, 59, 226, 0.12)",
    motionDurationMid: "0.2s",
  },
  components: {
    Form: {
      labelColor: palette.neutral950,
      labelFontSize: 14,
      labelHeight: 17,
      labelRequiredMarkColor: palette.error,
      verticalLabelPadding: "0 0 8px",
      itemMarginBottom: 24,
    },
    Input: {
      borderRadiusLG: 12,
      inputFontSizeLG: 18,
      paddingInlineLG: 23,
      activeBorderColor: palette.primary800,
      hoverBorderColor: palette.neutral200,
      activeShadow: "0 0 0 3px rgba(0, 59, 226, 0.12)",
    },
    Select: {
      borderRadiusLG: 12,
      optionSelectedBg: palette.neutral50,
      optionSelectedColor: palette.neutral950,
      optionActiveBg: palette.neutral50,
      optionFontSize: 16,
      selectorBg: palette.white,
    },
    Button: {
      fontWeight: 500,
      contentFontSize: 18,
      contentFontSizeLG: 18,
      paddingInline: 24,
      paddingInlineLG: 24,
      borderRadius: 24,
      borderRadiusLG: 24,
      colorPrimary: palette.lime400,
      colorPrimaryHover: palette.lime300,
      colorPrimaryActive: palette.lime500,
      primaryShadow: "none",
      defaultShadow: "none",
      primaryColor: palette.neutral950,
    },
    Tabs: {
      itemColor: palette.neutral700,
      itemSelectedColor: palette.neutral950,
      itemHoverColor: palette.neutral950,
      inkBarColor: "transparent",
    },
    Rate: {
      starColor: palette.lime400,
      starBg: palette.neutral200,
      starSize: 24,
    },
    Pagination: {
      itemActiveBg: "transparent",
      itemBg: "transparent",
    },
    Checkbox: {
      colorPrimary: palette.primary800,
    },
    Message: {
      contentPadding: "12px 20px",
    },
  },
};

export default theme;
