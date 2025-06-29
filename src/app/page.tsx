"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store/useAppStore";
import { ProfileSummary } from "@/components/ProfileSummary";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { RewardChart } from "@/components/RewardChart";
import {
  ProfileSkeleton,
  BenefitCardSkeleton,
  RewardChartSkeleton,
} from "@/components/Skeletons";
import { AchievementCard } from "@/components/AchievementCard";
import {
  fetchMockUser,
  fetchMockBenefits,
  fetchMockAchievements,
} from "@/lib/mockApi";
import { Navbar } from "@/components/Navbar";
import { VehicleDetails } from "@/components/VehicleDetails";

export default function Home() {
  const {
    user,
    benefits,
    achievements,
    isLoading,
    setUser,
    setBenefits,
    setAchievements,
    setLoading,
  } = useAppStore();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const [user, benefits, achievements] = await Promise.all([
        fetchMockUser(),
        fetchMockBenefits(),
        fetchMockAchievements(),
      ]);

      setUser(user);
      setBenefits(benefits);
      setAchievements(achievements);
      setLoading(false);
    };

    loadData();
  }, [setUser, setBenefits, setAchievements, setLoading]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-[1400px]">
          
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left */}
            <aside className="xl:col-span-3 order-2 xl:order-1">
              <div className="xl:sticky xl:top-6 space-y-6">
                {isLoading || !user ? (
                  <>
                    <ProfileSkeleton />
                    <RewardChartSkeleton />
                  </>
                ) : (
                  <>
                    <ProfileSummary
                      name={user.name}
                      level={user.level}
                      xpPercent={user.xpPercent}
                      avatarUrl={user.avatarUrl}
                    />
                    
                    <RewardChart points={user.points} goal={user.goal} />
                  </>
                )}
              </div>
            </aside>

            {/* Centre */}
            <main className="xl:col-span-5 order-1 xl:order-2 space-y-10 lg:space-y-12">
              
              {/* Benefits Section */}
              <section className="group">
                <div className="mb-6 lg:mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                      Your Benefits
                    </h2>
                    {!isLoading && benefits && (
                      <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {benefits.length} available
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                    Exclusive rewards and perks for your automotive needs.
                  </p>
                </div>

                {isLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    {Array(4).fill(0).map((_, i) => (
                      <BenefitCardSkeleton key={i} />
                    ))}
                  </div>
                ) : (
                  <BenefitsGrid />
                )}
              </section>

              {/* Achievements Section */}
              <section className="group">
                <div className="mb-6 lg:mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                      Your Achievements
                    </h2>
                    {!isLoading && achievements && (
                      <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {achievements.length} earned
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-base lg:text-lg">
                    Milestones and accomplishments from your journey.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {isLoading
                    ? Array(6).fill(0).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square bg-muted/30 rounded-2xl animate-pulse border border-border/30"
                        />
                      ))
                    : achievements.map((achv, idx) => (
                        <div 
                          key={idx}
                          className="transform transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1"
                        >
                          <AchievementCard
                            icon={achv.icon}
                            title={achv.title}
                            description={achv.description}
                          />
                        </div>
                      ))}
                </div>
              </section>
            </main>

            {/* Right */}
            <aside className="xl:col-span-4 order-3">
              <div className="xl:sticky xl:top-6">
                <VehicleDetails />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}