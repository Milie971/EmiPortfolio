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

import { Status } from "./Status";

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded "
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm p-2">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>

        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
const SIDE_PROJECT: SideProjectProps[] = [
  {
    Logo: MessageCircleHeart,
    title: "MyDate",
    description: "Date with relationship ",
    url: "",
  },
  {
    Logo: Code,
    title: "WildCodeHub",
    description: "Plateforme",
    url: "",
  },
  {
    Logo: Coffee,
    title: "La boite à thé",
    description: "Site pour une commande Box thé",
    url: "https://milie971.github.io/site_the/",
  },
  {
    Logo: CookingPot,
    title: "Kome Waza",
    description: "Site de commande de plat ",
    url: "https://milie971.github.io/KomeWaza/",
  },
  {
    Logo: Book,
    title: "Aux bavardages",
    description: "Libraierie café, project Wordpress",
    url: "https://librairiecafe-auxbavardages.fr/",
  },
  {
    Logo: Truck,
    title: "Xela-Groupe",
    description: "First project Wordpress",
    url: "https://xelagroupe.com/",
  },
];
