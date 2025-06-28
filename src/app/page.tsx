import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ProfileSummary } from "@/components/ProfileSummary";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { RewardChart } from "@/components/RewardChart";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-10 px-4 py-8 bg-background text-foreground">
      <div className="w-full max-w-5xl flex justify-end">
        <ThemeToggle />
      </div>

      <ProfileSummary
        name="Sachin Jayadev"
        level={7}
        xpPercent={72}
        avatarUrl="https://api.dicebear.com/7.x/personas/svg?seed=sachin"
      />

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Your Benefits</h2>
          <BenefitsGrid />
        </div>

        <div className="flex items-start justify-center">
          <RewardChart points={1850} goal={3000} />
        </div>
      </div>
    </main>
  );
}
