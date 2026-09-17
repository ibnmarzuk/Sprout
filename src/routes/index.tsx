import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { DigitalToOffline } from "@/components/digital-to-offline";
import { MilestoneEngine } from "@/components/milestone-engine";
import { ImpactMapSection } from "@/components/impact-map-section";
import { Grove } from "@/components/grove";
import { Poll } from "@/components/poll";
import { Manifesto } from "@/components/manifesto";
import { Join } from "@/components/join";
import { SiteFooter } from "@/components/site-footer";
import { useGroveHydration } from "@/lib/grove-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useGroveHydration();

  return (
    <main className="min-h-dvh bg-bg text-fg">
      <SiteNav />
      <Hero />
      <DigitalToOffline />
      <MilestoneEngine />
      <ImpactMapSection />
      <Grove />
      <Poll />
      <Manifesto />
      <Join />
      <SiteFooter />
    </main>
  );
}
