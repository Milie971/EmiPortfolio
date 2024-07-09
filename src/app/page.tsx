import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Spacing } from "@/components/Spacing";
import { Status } from "@/components/Status";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main>
      <Image
        src="/nextjs-github-pages/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
      <Header />

      <Spacing size="md" />

      <Hero />

      <Spacing size="md" />

      <Status />

      <Spacing size="md" />

      <Skills />

      <Spacing size="md" />

      <Contact />

      <Spacing size="md" />

      <Footer />

      <Spacing size="md" />
    </main>
  );
}
