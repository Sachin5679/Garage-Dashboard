"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store/useAppStore";
import { motion } from "framer-motion";
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


export default function Home() {
  const {
    user,
    benefits,
    achievements,
    isLoading,
    setUser,
    setBenefits,
    setMissions,
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

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-screen bg-background text-foreground px-4 py-6 sm:py-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left */}
          <section className="md:col-span-3 flex flex-col gap-8">
            <div className="w-full max-w-md">
              {isLoading || !user ? (
                <ProfileSkeleton />
              ) : (
                <ProfileSummary
                  name={user.name}
                  level={user.level}
                  xpPercent={user.xpPercent}
                  avatarUrl={user.avatarUrl}
                />
              )}
            </div>

            <div>
              {isLoading || !user ? (
                <RewardChartSkeleton />
              ) : (
                <RewardChart points={user.points} goal={user.goal} />
              )}
            </div>
          </section>

          {/* Right */}
          <section className="md:col-span-8 flex flex-col gap-10">
            
            <div>
              <h2 className="text-2xl font-semibold mb-1">Your Benefits</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Explore perks, discounts, and exclusive rewards.
              </p>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <BenefitCardSkeleton />
                  <BenefitCardSkeleton />
                  <BenefitCardSkeleton />
                </div>
              ) : (
                <BenefitsGrid />
              )}
            </div>


            
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {isLoading
                  ? Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="h-32 bg-muted rounded-lg animate-pulse"
                        />
                      ))
                  : achievements.map((achv, idx) => (
                      <AchievementCard
                        key={idx}
                        icon={achv.icon}
                        title={achv.title}
                        description={achv.description}
                      />
                    ))}
              </div>
            </div>
          </section>
        </div>
      </motion.main>
    </>
  );
}
