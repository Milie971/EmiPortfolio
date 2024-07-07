import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactLogo";
import { Badge } from "./ui/badge";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindLogo";
import { JavaIcon } from "./icons/JavaLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...
      </h2>
      <div>
        <div className="flex max-md:flex-col gap-4">
          <div className="flex flex-col gap-2 ">
            <ReactIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className=" text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use
            <Code>Next.js</Code> as a backend and frontend framwork.
          </p>

          <div className="flex flex-col gap-2 ">
            <JavaIcon size={42} />
          </div>
          <h3 className=" text-2xl font-semibold tracking-tight">Java</h3>
          <p className="text-sm text-muted-foreground">
            <Code>Java</Code> is a langage i love learn to create app mobile and
            website.
          </p>

          <div className="flex flex-col gap-2 ">
            <TailwindIcon size={42} />
          </div>
          <h3 className=" text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            <Code>Tailwind</Code>, help me build beautiful website and respect
            UX recommandation for the users.
          </p>
        </div>
      </div>
    </Section>
  );
};
