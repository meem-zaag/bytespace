"use client";

import { Button } from "antd";
import { cn } from "@/lib/utils/cn";

/**
 * Lime submit button (antd keeps a 1px transparent border, hence the 23/11px padding) for antd forms ("Continue", "Sign In"), with a built-in loading state.
 *
 * @param {object} props
 * @param {boolean} [props.loading=false]
 * @param {boolean} [props.disabled=false]
 * @param {boolean} [props.block=false] full width
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function SubmitButton({ loading = false, disabled, block, className, children }) {
  return (
    <Button
      type="primary"
      htmlType="submit"
      size="large"
      loading={loading}
      disabled={disabled}
      block={block}
      className={cn("h-auto px-[23px] py-[11px] leading-[1.2]", className)}
    >
      {children}
    </Button>
  );
}
