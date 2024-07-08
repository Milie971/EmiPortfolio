import Link from "next/link";
import { Section } from "./Section";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Home,
  LucideIcon,
  Code,
  Coffee,
  CookingPot,
  ArrowUpRight,
  MessageCircleHeart,
  Book,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string;
}) => {
  return (
    <Link
      href={props.url || "#"}
      className={cn("w-full", props.className)}
      target="_blank"
    >
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="relative ">
          <img
            src={props.image}
            alt={props.name}
            className="w-20 h-20 rounded-full object-contain"
          />

          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>

        <ArrowUpRight
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
          size={24}
        />
      </Card>
    </Link>
  );
};
