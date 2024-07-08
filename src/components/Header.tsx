import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/Linkedin";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-md font-bold text-primary-foreground">
          EmiLolia.com
        </h1>
        {/* <p className="text-lg text-muted">
          Concepteur Developpeur d'application
        </p> */}
        <div className="flex-1 gap-2" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Milie971"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/emilie-lolia-d%C3%A9veloppement-web/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
