"use client";
import React, { useEffect } from "react";
import { Plus, Settings, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAppStore } from "../store/useAppStore";
import { fetchMockVehicles } from "../lib/mockApi";
import { CarViewer } from "./Car";

export function VehicleDetails() {
  const { vehicles, selectedVehicle, setVehicles, setSelectedVehicle } =
    useAppStore();

  useEffect(() => {
    const loadVehicles = async () => {
      const vehicleData = await fetchMockVehicles();
      setVehicles(vehicleData);
      setSelectedVehicle(vehicleData[0]);
    };

    if (vehicles.length === 0) {
      loadVehicles();
    }
  }, [vehicles.length, setVehicles, setSelectedVehicle]);

  const vehicle = selectedVehicle || vehicles[0];
  if (!vehicle) return null;

  return (
    <Card className="w-full h-full flex flex-col overflow-hidden">
      <CardContent className="p-0 flex flex-col h-full">
        

        <div className="p-4 overflow-y-auto flex-1">

          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-8 h-8 mx-auto mb-2 bg-muted rounded flex items-center justify-center">
              <span className="text-foreground font-bold text-sm">
                {vehicle.brand.charAt(0)}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              {vehicle.brand} {vehicle.model}
            </h2>
            <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded mt-2">
              <span className="text-xs font-medium">{vehicle.state}</span>
              <span className="ml-1 text-sm font-bold">
                {vehicle.plateNumber.replace(/\s/g, "")}
              </span>
            </div>
          </div>

          <CarViewer />

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-8 bg-muted rounded-full ring-2 ring-red-600 flex items-center justify-center">
              <div className="w-4 h-4 bg-muted-foreground rounded-full" />
            </div>
            <button className="w-8 h-8 border-2 border-border rounded-full flex items-center justify-center hover:bg-muted/50 transition-colors">
              <Plus className="w-4 h-4 text-muted-foreground cursor-pointer" />
            </button>
            <div className="ml-auto">
              <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            {vehicle.services.map((service, index) => (
              <div key={service.id}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground font-medium">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-xs px-2 py-1 rounded whitespace-nowrap ${
                          service.status === "active" ||
                          service.status === "good_balance"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                        }`}
                      >
                        {service.status === "expires_soon" &&
                          `EXPIRES IN ${service.daysRemaining} DAYS`}
                        {service.status === "low_balance" && "LOW BALANCE"}
                        {service.status === "never_checked" &&
                          "NEVER CHECKED"}
                        {service.status === "active" &&
                          `ACTIVE - ${service.daysRemaining} DAYS LEFT`}
                        {service.status === "good_balance" &&
                          "SUFFICIENT BALANCE"}
                        {service.status === "pending" && "PENDING PAYMENT"}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {service.expiryDate &&
                          `• ${new Date(service.expiryDate).getDate()} ${new Date(
                            service.expiryDate
                          ).toLocaleString("default", { month: "short" })}`}
                        {service.balance &&
                          `• ${service.currency}${service.balance}`}
                        {service.amount &&
                          `• ${service.currency}${service.amount}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    {service.buttonAction === "check_challans" ? (
                      <button className="w-24 h-9 bg-muted hover:bg-muted/80 rounded flex items-center justify-center transition-colors cursor-pointer">
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </button>
                    ) : (
                      <button className="w-24 h-9 cursor-pointer bg-foreground text-background rounded text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center">
                        <span className="truncate px-2">
                          {service.buttonText}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
                {index < vehicle.services.length - 1 && (
                  <hr className="mt-4 border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default VehicleDetails;
