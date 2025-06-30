import { render, screen } from "@testing-library/react";
import {RewardChart} from "../RewardChart";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  RadialBarChart: () => <div>RadialBarChart</div>,
  RadialBar: () => <div>RadialBar</div>,
  Legend: () => <div>Legend</div>,
}));

describe("RewardChart", () => {
  it("renders the radial bar chart", () => {
    render(<RewardChart points={1850} goal={3000} />);
    expect(screen.getByText("RadialBarChart")).toBeInTheDocument();
  });
});
