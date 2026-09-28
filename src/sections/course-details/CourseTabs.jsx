"use client";

import { Tabs } from "antd";
import { useState } from "react";

const TAB_CLASSES = {
  header: "mb-10 before:hidden",
  item: "m-0 rounded-3xl bg-neutral-50 px-4 py-3 text-label-m transition-colors hover:bg-neutral-100 [&.ant-tabs-tab-active]:bg-lime-400 [&.ant-tabs-tab-active]:hover:bg-lime-300",
  indicator: "hidden",
};

/**
 * About / Lessons / Reviews switcher (antd Tabs styled as the Figma pills). The active tab is
 * mirrored in `?tab=` so each tab can be linked to directly.
 *
 * @param {object} props
 * @param {{ key: string, label: string }[]} props.tabs
 * @param {Record<string, import("react").ReactNode>} props.panels content per tab key
 * @param {string | null} [props.initialTab] requested tab (from `?tab=`), falls back to the first
 */
export default function CourseTabs({ tabs, panels, initialTab = null }) {
  const initial = tabs.some((tab) => tab.key === initialTab) ? initialTab : tabs[0].key;
  const [active, setActive] = useState(initial);

  function handleChange(key) {
    setActive(key);
    const url = key === tabs[0].key ? window.location.pathname : `?tab=${key}`;
    window.history.replaceState(null, "", url);
  }

  return (
    <Tabs
      activeKey={active}
      onChange={handleChange}
      tabBarGutter={16}
      classNames={TAB_CLASSES}
      items={tabs.map((tab) => ({ key: tab.key, label: tab.label, children: panels[tab.key] }))}
    />
  );
}
