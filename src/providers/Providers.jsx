import AntdProvider from "@/providers/AntdProvider";
import LenisProvider from "@/providers/LenisProvider";

/**
 * Composes every app-wide client provider in one place for the root layout.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 */
export default function Providers({ children }) {
  return (
    <AntdProvider>
      <LenisProvider>{children}</LenisProvider>
    </AntdProvider>
  );
}
