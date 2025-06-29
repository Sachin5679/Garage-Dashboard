"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type AchievementCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function AchievementCard({
  icon: Icon,
  title,
  description,
}: AchievementCardProps) {
  return (
    <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
    <Card className="h-full flex flex-col items-center justify-between text-center p-4 shadow-sm">
        <Icon className="h-8 w-8 text-yellow-400 mb-2" />
        <CardContent className="flex flex-col flex-grow justify-between items-center gap-2 text-center">
        <h4 className="font-semibold text-base">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
    </motion.div>

  );
}
