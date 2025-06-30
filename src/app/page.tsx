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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10 max-w-[1400px]">
          
          {/* Mobile-First Layout */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-6 xl:gap-8">
            
            {/* Left */}
            <aside className="lg:col-span-4 xl:col-span-3 lg:order-1">
              <div className="space-y-4 lg:space-y-6 lg:sticky lg:top-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                  {isLoading || !user ? (
                    <>
                      <ProfileSkeleton />
                      <div className="sm:block lg:block">
                        <RewardChartSkeleton />
                      </div>
                    </>
                  ) : (
                    <>
                      <ProfileSummary
                        name={user.name}
                        level={user.level}
                        xpPercent={user.xpPercent}
                        avatarUrl={user.avatarUrl}
                      />
                      <div className="sm:block lg:block">
                        <RewardChart points={user.points} goal={user.goal} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </aside>

            {/* Centre */}
            <main className="lg:col-span-8 xl:col-span-5 lg:order-2 space-y-8 lg:space-y-10 xl:space-y-12">
              
              {/* Benefits */}
              <section className="group">
                <div className="mb-4 lg:mb-6 xl:mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                      Your Benefits
                    </h2>
                    {!isLoading && benefits && (
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full self-start sm:self-auto">
                        {benefits.length} available
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                    Exclusive rewards and perks for your automotive needs.
                  </p>
                </div>

                {isLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    {Array(4).fill(0).map((_, i) => (
                      <BenefitCardSkeleton key={i} />
                    ))}
                  </div>
                ) : (
                  <BenefitsGrid />
                )}
              </section>

              {/* Achievements */}
              <section className="group">
                <div className="mb-4 lg:mb-6 xl:mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                      Your Achievements
                    </h2>
                    {!isLoading && achievements && (
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full self-start sm:self-auto">
                        {achievements.length} earned
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                    Milestones and accomplishments from your journey.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 auto-rows-fr">
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
                          className="transform transition-all duration-200 hover:scale-[1.02] hover:-translate-y-1 h-full"
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
            <aside className="lg:col-span-12 xl:col-span-4 lg:order-3">
              <div className="xl:sticky xl:top-6">
                <div className="lg:max-w-md lg:mx-auto xl:max-w-none">
                  <VehicleDetails />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}