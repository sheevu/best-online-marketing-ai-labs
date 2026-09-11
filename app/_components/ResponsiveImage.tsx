/* eslint-disable @next/next/no-img-element */
import type { ImgHTMLAttributes } from "react";
import versions from "../lib/image-versions.json";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & { src: string; alt: string; priority?: boolean };
const widths = [160, 320, 480, 640, 960, 1280];

/** Build-generated images: no runtime transformation service or client JS needed. */
export default function ResponsiveImage({ src, alt, priority, sizes = "(max-width: 820px) 85vw, 40vw", ...props }: Props) {
  const stem = src.replace(/^\//, "").replace(/\.webp$/, "");
  const version = versions[stem as keyof typeof versions];
  const srcSet = widths.map(width => `/images/${stem}-${version}-${width}.webp ${width}w`).join(", ");
  return <img {...props} alt={alt} src={`/images/${stem}-${version}-640.webp`} srcSet={srcSet} sizes={sizes}
    loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding={priority ? "sync" : "async"} />;
}
