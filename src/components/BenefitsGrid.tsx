"use client";

import { useAppStore } from "@/store/useAppStore";
import { BenefitCard } from "@/components/BenefitCard";

export function BenefitsGrid() {
  const benefits = useAppStore((state) => state.benefits);

  return (
    <section
      className="flex space-x-4 w-full overflow-x-auto px-4 scrollbar-thin"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {benefits.map((b, idx) => (
        <div key={idx} style={{ scrollSnapAlign: "start" }}>
          <BenefitCard
            icon={b.icon}
            title={b.title}
            description={b.description}
            ctaLabel={b.ctaLabel}
            onClick={() => alert(`Clicked: ${b.title}`)}
          />
        </div>
      ))}
    </section>
  );
}
