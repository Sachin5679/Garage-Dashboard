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

type Mission = {
  icon: any;
  title: string;
  reward: string;
};

type Achievement = {
  icon: any;
  title: string;
  description: string;
};

type AppStore = {
  user: User | null;
  benefits: Benefit[];
  missions: Mission[];
  achievements: Achievement[];
  isLoading: boolean;
  setUser: (user: User) => void;
  setBenefits: (benefits: Benefit[]) => void;
  setMissions: (missions: Mission[]) => void;
  setAchievements: (achievements: Achievement[]) => void;
  setLoading: (loading: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  benefits: [],
  missions: [],
  achievements: [],
  isLoading: true,
  setUser: (user) => set({ user }),
  setBenefits: (benefits) => set({ benefits }),
  setMissions: (missions) => set({ missions }),
  setAchievements: (achievements) => set({ achievements }),
  setLoading: (isLoading) => set({ isLoading }),
}));
