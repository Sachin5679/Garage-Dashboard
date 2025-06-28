"use client";

import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type RewardChartProps = {
  points: number;
  goal: number;
};

export function RewardChart({ points, goal }: RewardChartProps) {
  const percent = Math.min((points / goal) * 100, 100);

  const data = [
    {
      name: "Rewards",
      value: percent,
      fill: "#4ade80", 
    },
  ];

  return (
    <Card className="w-full max-w-sm shadow-md">
      <CardHeader>
        <h3 className="text-lg font-semibold">Reward Points</h3>
      </CardHeader>
      <CardContent className="h-60 flex items-center justify-center">
        <div className="relative w-48 h-48">
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
                cornerRadius={10}
              />
            </RadialBarChart>
          </ResponsiveContainer>

          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">
              {points}
            </span>
            <span className="text-xs text-muted-foreground">of {goal} pts</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
