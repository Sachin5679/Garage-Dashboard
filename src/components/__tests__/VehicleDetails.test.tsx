import { render, screen } from "@testing-library/react";
import { VehicleDetails } from "@/components/VehicleDetails";

const mockVehicle = {
  id: "1",
  brand: "Maruti",
  model: "Swift",
  plateNumber: "KA 03AB1234",
  state: "KA",
  color: "#dc2626",
  actionsPending: 1,
  totalActions: 4,
  services: [
    {
      id: "insurance",
      name: "Insurance",
      status: "active",
      expiryDate: "2025-12-15",
      daysRemaining: 169,
      buttonText: "View details",
      buttonAction: "view_details"
    },
    {
      id: "fastag",
      name: "Fastag",
      status: "good_balance",
      balance: 1500,
      currency: "₹",
      buttonText: "Top up",
      buttonAction: "top_up"
    },
    {
      id: "traffic_challans",
      name: "Traffic challans",
      status: "pending",
      amount: 2500,
      currency: "₹",
      buttonText: "Pay now",
      buttonAction: "pay_challans"
    }
  ]
};

jest.mock('@/store/useAppStore', () => ({
  useAppStore: () => ({
    vehicles: [mockVehicle],
    selectedVehicle: mockVehicle,
    isLoading: false,
    setSelectedVehicle: jest.fn(),
    setVehicles: jest.fn(),
  }),
}));

describe("VehicleDetails", () => {
  it("renders the selected vehicle's brand, model, and plate number", () => {
    render(<VehicleDetails />);

    expect(screen.getByText(/Maruti.*Swift/)).toBeInTheDocument();

    expect(screen.getByText(/KA.*03AB1234/)).toBeInTheDocument();

  });

  it("displays all vehicle services with their names and button text", () => {
    render(<VehicleDetails />);

    expect(screen.getByText("Insurance")).toBeInTheDocument();
    expect(screen.getByText("Fastag")).toBeInTheDocument();
    expect(screen.getByText("Traffic challans")).toBeInTheDocument();

    expect(screen.getByText("View details")).toBeInTheDocument();
    expect(screen.getByText("Top up")).toBeInTheDocument();
    expect(screen.getByText("Pay now")).toBeInTheDocument();
  });
});
