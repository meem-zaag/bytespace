import AntdProvider from "@/providers/AntdProvider";
import LenisProvider from "@/providers/LenisProvider";
import MotionProvider from "@/providers/MotionProvider";

/**
 * Composes every app-wide client provider in one place for the root layout.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 */
export default function Providers({ children }) {
  return (
    <AntdProvider>
      <MotionProvider>
        <LenisProvider>{children}</LenisProvider>
      </MotionProvider>
    </AntdProvider>
  );
}
