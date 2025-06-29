import {
  Gift,
  Percent,
  Ticket,
  Coffee,
  Star,
  Truck,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

export async function fetchMockUser() {
  await delay(1000);
  return {
    name: "Sachin Jayadev",
    avatarUrl: "https://api.dicebear.com/7.x/personas/svg?seed=sachin",
    level: 7,
    xpPercent: 72,
    points: 1850,
    goal: 3000,
  };
}

export async function fetchMockBenefits() {
  await delay(1000);
  return [
    {
      icon: Gift,
      title: "Welcome Bonus",
      description: "Earn 1000 coins on first payment.",
      ctaLabel: "Claim",
    },
    {
      icon: Percent,
      title: "Partner Discounts",
      description: "20% off on dining with XYZ card.",
      ctaLabel: "Activate",
    },
    {
      icon: Ticket,
      title: "Movie Voucher",
      description: "Get ₹300 Paytm voucher on spend.",
      ctaLabel: "Redeem",
    },
    {
      icon: Coffee,
      title: "Cafe Perk",
      description: "Free CCD coffee on weekend payments.",
      ctaLabel: "Claim",
    },
    {
      icon: Star,
      title: "VIP Access",
      description: "Concert invites for top 5% users.",
      ctaLabel: "Join",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders over ₹999 at CredStore.",
      ctaLabel: "Activate",
    },
    {
      icon: UserCheck,
      title: "Priority Support",
      description: "24/7 VIP support for premium members.",
      ctaLabel: "Enable",
    },
    {
      icon: ShieldCheck,
      title: "Fraud Protection",
      description: "Complimentary card fraud cover.",
      ctaLabel: "Learn More",
    },
  ];
}

export async function fetchMockAchievements() {
  await delay(500);
  return [
    {
      icon: ShieldCheck,
      title: "Fraud Free",
      description: "No failed payments in 6 months",
    },
    {
      icon: UserCheck,
      title: "Verified Spender",
      description: "Paid ₹10k+ bills",
    },
    {
      icon: Truck,
      title: "Fast Lander",
      description: "Always paid before due date",
    },
    {
      icon: Star,
      title: "Loyalty Level 3",
      description: "Used platform 6+ months",
    },
  ];
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
