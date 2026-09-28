import Link from "next/link";
import BusinessIcon from "@/components/icons/BusinessIcon";
import ComputerIcon from "@/components/icons/ComputerIcon";
import ConnectIcon from "@/components/icons/ConnectIcon";
import DesignServicesIcon from "@/components/icons/DesignServicesIcon";
import DeveloperModeIcon from "@/components/icons/DeveloperModeIcon";
import PhotoCameraIcon from "@/components/icons/PhotoCameraIcon";
import { cn } from "@/lib/utils/cn";

const ICONS = {
  design: DesignServicesIcon,
  development: DeveloperModeIcon,
  computer: ComputerIcon,
  business: BusinessIcon,
  marketing: ConnectIcon,
  photography: PhotoCameraIcon,
};

/**
 * Square learning-path tile (Figma "Categories_Card"): lime icon circle + label, links to a
 * catalog search.
 *
 * @param {object} props
 * @param {string} props.label
 * @param {keyof typeof ICONS} props.icon
 * @param {string} props.href
 * @param {string} [props.className]
 */
export default function LearningPathTile({ label, icon, href, className }) {
  const Icon = ICONS[icon];

  return (
    <Link
      href={href}
      className={cn(
        "group flex aspect-square flex-col items-center justify-center gap-3 rounded-card border border-neutral-200 bg-white p-4 text-center transition duration-300",
        "hover:-translate-y-1 hover:border-lime-500 hover:shadow-card",
        className,
      )}
    >
      <span className="flex size-15 items-center justify-center rounded-full bg-lime-400 text-neutral-950 transition-transform duration-300 group-hover:scale-110">
        <Icon className="size-9" />
      </span>
      <span className="text-label-xl text-neutral-950">{label}</span>
    </Link>
  );
}
