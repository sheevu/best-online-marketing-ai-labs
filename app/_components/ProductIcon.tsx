import React from "react";
import {
  Article,
  Browsers,
  ChartLineUp,
  Compass,
  Crown,
  Cpu,
  FileText,
  FolderUser,
  GlobeHemisphereWest,
  Lightning,
  MagnifyingGlass,
  MapPin,
  Megaphone,
  Robot,
  RocketLaunch,
  ShoppingBag,
  Sparkle,
  Storefront,
  Table,
  Target,
  TrendUp,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

const iconMap: Record<string, React.ComponentType<{ weight?: "duotone" | "bold" | "regular" | "fill" | "thin" | "light"; className?: string }>> = {
  Article,
  Browsers,
  ChartLineUp,
  Compass,
  Crown,
  Cpu,
  FileText,
  FolderUser,
  GlobeHemisphereWest,
  Lightning,
  MagnifyingGlass,
  MapPin,
  Megaphone,
  Robot,
  RocketLaunch,
  ShoppingBag,
  Sparkle,
  Storefront,
  Table,
  Target,
  TrendUp,
  WhatsappLogo,
};

export default function ProductIcon({
  name,
  weight = "duotone",
  className,
}: {
  name: string;
  weight?: "duotone" | "bold" | "regular" | "fill" | "thin" | "light";
  className?: string;
}) {
  const IconComponent = iconMap[name] || Target;
  return <IconComponent weight={weight} className={className} />;
}
