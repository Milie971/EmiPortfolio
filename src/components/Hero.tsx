import { ComponentProps, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl">Emilie Lolia</h2>
        <h3 className="font-caption text-3xl text-primary">
          Software developer Enginer
        </h3>
        <p className="text-base">
          I love <Code>Genshin Impact</Code>
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQHOBsFbLqqpvw/profile-displayphoto-shrink_400_400/0/1660825014340?e=1724889600&v=beta&t=-8tyjM8nZYD3nVOqRCGqrf-W3RgUNvUEVtknsWMfNH0"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
          alt="Emilie Avatar"
        />
      </div>
    </Section>
  );
};
