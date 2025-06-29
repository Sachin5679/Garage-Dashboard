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
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
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
      title: "Fuel Cashback",
      description: "Get 2% cashback on all fuel purchases.",
      ctaLabel: "Activate",
    },
    {
      icon: Percent,
      title: "Service Discount",
      description: "15% off on car servicing & repairs.",
      ctaLabel: "Redeem",
    },
    {
      icon: Ticket,
      title: "Toll Pass Credits",
      description: "₹500 FASTag credits for highways.",
      ctaLabel: "Claim",
    },
    {
      icon: Coffee,
      title: "Roadside Assistance",
      description: "Free 24/7 breakdown support calls.",
      ctaLabel: "Activate",
    },
    {
      icon: Star,
      title: "Premium Parking",
      description: "Access to VIP parking spots in malls.",
      ctaLabel: "Unlock",
    },
    {
      icon: Truck,
      title: "Car Wash Credits",
      description: "3 free car washes per month included.",
      ctaLabel: "Book Now",
    },
    {
      icon: UserCheck,
      title: "Mechanic Priority",
      description: "Skip queues at partner garages.",
      ctaLabel: "Enable",
    },
    {
      icon: ShieldCheck,
      title: "Insurance Discount",
      description: "10% off on car insurance renewal.",
      ctaLabel: "Get Quote",
    },
  ];
}

export async function fetchMockAchievements() {
  await delay(500);
  return [
    {
      icon: UserCheck,
      title: "Fuel Saver",
      description: "Saved ₹5k+ on fuel expenses",
    },
    {
      icon: Truck,
      title: "Toll Warrior",
      description: "Completed 50+ toll transactions",
    },
    {
      icon: Star,
      title: "Garage Regular",
      description: "Serviced car 10+ times via app",
    },
  ];
}

export async function fetchMockVehicles() {
  await delay(800);
  return [
    {
      id: "1",
      brand: "Honda",
      model: "Amaze",
      plateNumber: "MH GJ01KU7531",
      state: "MH",
      color: "#1e40af", // blue-700
      actionsPending: 3,
      totalActions: 5,
      services: [
        {
          id: "insurance",
          name: "insurance",
          status: "expires_soon" as const,
          expiryDate: "2025-07-26",
          daysRemaining: 27,
          buttonText: "View plans",
          buttonAction: "view_plans"
        },
        {
          id: "fastag",
          name: "fastag",
          status: "low_balance" as const,
          balance: 200,
          currency: "₹",
          buttonText: "Recharge",
          buttonAction: "recharge"
        },
        {
          id: "traffic_challans",
          name: "traffic challans",
          status: "never_checked" as const,
          buttonText: "Check now",
          buttonAction: "check_challans"
        }
      ]
    },
    {
      id: "2",
      brand: "Maruti",
      model: "Swift",
      plateNumber: "KA 03AB1234",
      state: "KA",
      color: "#dc2626",
      actionsPending: 1,
      totalActions: 4,
      services: [
        {
          id: "insurance",
          name: "insurance",
          status: "active" as const,
          expiryDate: "2025-12-15",
          daysRemaining: 169,
          buttonText: "View details",
          buttonAction: "view_details"
        },
        {
          id: "fastag",
          name: "fastag",
          status: "good_balance" as const,
          balance: 1500,
          currency: "₹",
          buttonText: "Top up",
          buttonAction: "top_up"
        },
        {
          id: "traffic_challans",
          name: "traffic challans",
          status: "pending" as const,
          amount: 2500,
          currency: "₹",
          buttonText: "Pay now",
          buttonAction: "pay_challans"
        }
      ]
    }
  ];
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve));
}