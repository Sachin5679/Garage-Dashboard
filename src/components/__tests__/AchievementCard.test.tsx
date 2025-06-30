import { render, screen } from "@testing-library/react";
import { AchievementCard } from "../AchievementCard";
import { UserCheck } from "lucide-react";
import React from "react";

describe("AchievementCard", () => {
  it("renders icon, title, and description", () => {
    const { container } = render(
      <AchievementCard
        icon={UserCheck}
        title="Fuel Saver"
        description="Saved ₹5k+ on fuel expenses"
      />
    );

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    expect(screen.getByText("Fuel Saver")).toBeInTheDocument();
    expect(screen.getByText("Saved ₹5k+ on fuel expenses")).toBeInTheDocument();
  });
});
