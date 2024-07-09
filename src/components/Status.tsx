import Link from "next/link";
import { Section } from "./Section";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
//import { SideProject } from "./SideProject";
import { ContactCard } from "./ContactCard";
//import { Work } from "./Work";

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

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 w-full">
          <p className="text-lg text-muted-foreground">Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECT.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORK.map((WorkItem, index) => (
              <Work
                key={index}
                {...WorkItem}
                // image={WorkItem.image}
                // title={WorkItem.title}
                // role={WorkItem.role}
                // date={WorkItem.date}
                // url="/"
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            url="https://www.linkedin.com/in/emilie-lolia-d%C3%A9veloppement-web/"
            name="Emilie lolia"
            image="https://media.licdn.com/dms/image/C4E03AQHOBsFbLqqpvw/profile-displayphoto-shrink_400_400/0/1660825014340?e=1724889600&v=beta&t=-8tyjM8nZYD3nVOqRCGqrf-W3RgUNvUEVtknsWMfNH0"
            mediumImage="data:image/png;base64,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"
            description=""
          />
        </Card>
      </div>
    </Section>
  );
};

const WORK: WorkingProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/C4E0BAQGpPwSUgKTjTw/company-logo_100_100/0/1673953307000/mgen_logo?e=1727308800&v=beta&t=8-BcamMCKFtq-_d3TMwFkdmh1juxr1cYqviWq2w32-Y",
    title: "MGEN",
    role: "Chargé d'activité digitale",
    date: "Septembre 2023 - ...",
    url: "",
    alternance: true,
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4E0BAQFpNXR-FoVivA/company-logo_100_100/0/1679585528755/libellab_logo?e=1727308800&v=beta&t=WZdkq-_sR4pvAnafeaTX931mPmGQdXBz7Ko1bdhcB-E",
    title: "LibelLab",
    role: "Developpeuse Web",
    date: "Octobre 2022",
    url: "",
    stage: true,
  },
];

// type ContactProps = {
//   image: string;
//   mediumImage: string;
//   name: string;
//   description: string;
// };
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
