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

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-8">
        <p className="text-muted-foreground text-sm">
          @Copywrite 2024 Emilie Lolia
        </p>
      </Section>
    </footer>
  );
};
