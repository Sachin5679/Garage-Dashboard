import { create } from "zustand";

type User = {
  name: string;
  avatarUrl: string;
  level: number;
  xpPercent: number;
  points: number;
  goal: number;
};

type Benefit = {
  title: string;
  description: string;
  ctaLabel: string;
  icon: any;
};

type Achievement = {
  icon: any;
  title: string;
  description: string;
};

type VehicleService = {
  id: string;
  name: string;
  status: "expires_soon" | "low_balance" | "never_checked" | "active" | "good_balance" | "pending";
  expiryDate?: string;
  daysRemaining?: number;
  balance?: number;
  amount?: number;
  currency?: string;
  buttonText: string;
  buttonAction: string;
};

type Vehicle = {
  id: string;
  brand: string;
  model: string;
  plateNumber: string;
  state: string;
  color: string;
  actionsPending: number;
  totalActions: number;
  services: VehicleService[];
};

type AppStore = {
  user: User | null;
  benefits: Benefit[];
  achievements: Achievement[];
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  isLoading: boolean;
  setUser: (user: User) => void;
  setBenefits: (benefits: Benefit[]) => void;
  setAchievements: (achievements: Achievement[]) => void;
  setVehicles: (vehicles: Vehicle[]) => void;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
  setLoading: (loading: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  benefits: [],
  achievements: [],
  vehicles: [],
  selectedVehicle: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setBenefits: (benefits) => set({ benefits }),
  setAchievements: (achievements) => set({ achievements }),
  setVehicles: (vehicles) => set({ vehicles }),
  setSelectedVehicle: (selectedVehicle) => set({ selectedVehicle }),
  setLoading: (isLoading) => set({ isLoading }),
}));