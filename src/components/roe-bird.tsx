import bird from "@/assets/roe-bird.png.asset.json";
import { cn } from "@/lib/utils";

export function RoeBird({ className, decorative = false }: { className?: string; decorative?: boolean }) {
  return <span
    role={decorative ? undefined : "img"}
    aria-label={decorative ? undefined : "Roe bird"}
    aria-hidden={decorative ? true : undefined}
    className={cn("roe-bird block shrink-0 bg-current", className)}
    style={{ maskImage: `url("${bird.url}")`, WebkitMaskImage: `url("${bird.url}")` }}
  />;
}