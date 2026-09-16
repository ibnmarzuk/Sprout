import { createFileRoute } from "@tanstack/react-router";
import { Grove } from "@/components/grove";
import { Hero } from "@/components/hero";
import { How } from "@/components/how";
import { Join } from "@/components/join";
import { Manifesto } from "@/components/manifesto";
import { Mission } from "@/components/mission";
import { Poll } from "@/components/poll";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { useGroveHydration } from "@/lib/grove-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useGroveHydration();
  return (
    <main className="min-h-dvh bg-bg text-fg">
      <SiteNav />
      <Hero />
      <Mission />
      <Grove />
      <How />
      <Poll />
      <Manifesto />
      <Join />
      <SiteFooter />
    </main>
  );
}
