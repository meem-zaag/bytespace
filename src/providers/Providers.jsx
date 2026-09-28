import AntdProvider from "@/providers/AntdProvider";

/**
 * Composes every app-wide client provider in one place for the root layout.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 */
export default function Providers({ children }) {
  return <AntdProvider>{children}</AntdProvider>;
}
