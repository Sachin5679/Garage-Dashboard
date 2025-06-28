"use client";

import { BenefitCard } from "@/components/BenefitCard";
import { Gift, Percent, Ticket } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Welcome Bonus",
    description: "Get 500 bonus reward points on sign-up.",
    ctaLabel: "Claim",
  },
  {
    icon: Percent,
    title: "Exclusive Discount",
    description: "15% off on partner brands every Friday.",
    ctaLabel: "Activate",
  },
  {
    icon: Ticket,
    title: "Voucher Unlock",
    description: "Unlock ₹200 Flipkart voucher using 1000 XP.",
    ctaLabel: "Redeem",
  },
];

export function BenefitsGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl px-4">
      {benefits.map((b, idx) => (
        <BenefitCard
          key={idx}
          icon={b.icon}
          title={b.title}
          description={b.description}
          ctaLabel={b.ctaLabel}
          onClick={() => alert(`Clicked: ${b.title}`)}
        />
      ))}
    </section>
  );
}
