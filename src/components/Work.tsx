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

type WorkingProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  stage?: boolean;
  alternance?: boolean;
};

export const Work = (props: WorkingProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded "
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.alternance && <Badge variant="outline">Alternance</Badge>}
        </div>

        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>

      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
