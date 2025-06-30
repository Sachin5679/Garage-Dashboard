import { render, screen } from "@testing-library/react";
import { BenefitsGrid } from "../BenefitsGrid";
import React from "react";

const mockState = {
  benefits: [
    {
      icon: () => <svg data-testid="icon" />,
      title: "Fuel Cashback",
      description: "Get 2% cashback on all fuel purchases.",
      ctaLabel: "Activate",
    },
    {
      icon: () => <svg data-testid="icon" />,
      title: "Service Discount",
      description: "15% off on car servicing & repairs.",
      ctaLabel: "Redeem",
    },
  ],
};

jest.mock("../../store/useAppStore", () => ({
  useAppStore: jest.fn((selector) => selector(mockState)),
}));

describe("BenefitsGrid", () => {
  it("renders a list of benefits with titles and CTAs", () => {
    render(<BenefitsGrid />);

    expect(screen.getByText(/Fuel Cashback/i)).toBeInTheDocument();
    expect(screen.getByText(/Activate/i)).toBeInTheDocument();
    expect(screen.getByText(/Service Discount/i)).toBeInTheDocument();
    expect(screen.getByText(/Redeem/i)).toBeInTheDocument();
  });
});
