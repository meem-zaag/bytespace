"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import theme from "@/lib/antd/theme";

/**
 * Registers antd CSS-in-JS for the App Router and applies the ByteSpace theme.
 * Styles are emitted into the `antd` cascade layer (declared in globals.css) so Tailwind
 * utilities override antd without `!important`.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 */
export default function AntdProvider({ children }) {
  return (
    <AntdRegistry layer>
      <ConfigProvider theme={theme}>
        <App component={false}>{children}</App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
