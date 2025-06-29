"use client";

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type RewardChartProps = {
  points: number;
  goal: number;
};

export function RewardChart({ points, goal }: RewardChartProps) {
  const percent = Math.min((points / goal) * 100, 100);
  const percentRounded = Math.round(percent);

  const data = [
    {
      name: "Rewards",
      value: percent,
      fill: "#4ade80", 
    },
  ];

  const canRedeem = points >= goal;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="shadow-md flex flex-col justify-between h-full">
        <CardHeader>
          <h3 className="text-lg font-semibold">Reward Points</h3>
          <p className="text-sm text-muted-foreground">
            Earn rewards by making payments on time
          </p>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-48 h-50">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                barSize={15}
                data={data}
                startAngle={90}
                endAngle={-270}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  background
                  dataKey="value"
                  angleAxisId={0}
                  cornerRadius={10}
                />
              </RadialBarChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-foreground">{points}</span>
              <span className="text-xs text-muted-foreground">of {goal} pts</span>
              <span
                className={`text-sm mt-2 font-medium ${
                  percent < 50
                    ? "text-yellow-500"
                    : percent < 100
                    ? "text-blue-500"
                    : "text-green-600"
                }`}
              >
                {percentRounded}% to goal
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t pt-4 flex justify-center">
          <Button
            disabled={!canRedeem}
            className="w-full"
            onClick={() =>
              alert(canRedeem ? "Rewards redeemed!" : "Keep earning to redeem")
            }
          >
            {canRedeem ? "Redeem Now" : "Keep Earning"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
