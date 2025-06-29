import React, { useEffect } from 'react';
import { Plus, Settings, ArrowRight, Maximize } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useAppStore } from '../store/useAppStore';
import { fetchMockVehicles } from '../lib/mockApi';

export function VehicleDetails() {
  const { vehicles, selectedVehicle, setVehicles, setSelectedVehicle } = useAppStore();

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
    <Card className="w-full mx-auto">
      <CardContent className="p-4">
      <div className="flex justify-end mb-4">
        <button className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors">
          <Maximize className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      <div className="text-center mb-6">
        <div className="w-8 h-8 mx-auto mb-2 bg-muted rounded flex items-center justify-center">
          <span className="text-foreground font-bold text-sm">{vehicle.brand.charAt(0)}</span>
        </div>
        <h2 className="text-lg font-semibold text-foreground">{vehicle.brand} {vehicle.model}</h2>
        <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded mt-2">
          <span className="text-xs font-medium">{vehicle.state}</span>
          <span className="ml-1 text-sm font-bold">{vehicle.plateNumber.replace(/\s/g, '')}</span>
        </div>
      </div>

      {/* Car Image */}
      <div className="mb-6 flex justify-center">
        <div className="w-48 h-24 bg-gradient-to-br from-muted/50 to-muted rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="w-40 h-16 bg-card border border-border rounded-lg shadow-md relative">
            <div className="absolute inset-x-2 top-1 h-6 bg-muted rounded-t-lg"></div>
            <div className="absolute bottom-1 left-2 w-4 h-4 bg-foreground rounded-full"></div>
            <div className="absolute bottom-1 right-2 w-4 h-4 bg-foreground rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 border border-border rounded-full px-4 py-2 mb-6 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
          <span className="text-muted-foreground text-sm">{vehicle.actionsPending}/{vehicle.totalActions} actions pending</span>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
          <div className="w-8 h-4 bg-muted-foreground rounded-sm"></div>
        </div>
        {vehicles.slice(0, 2).map((v) => (
          <div 
            key={v.id}
            className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${
              vehicle.id === v.id ? 'ring-2 ring-blue-600' : 'hover:opacity-70'
            }`}
            style={{ backgroundColor: v.color }}
            onClick={() => setSelectedVehicle(v)}
          >
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
        ))}
        <button className="w-8 h-8 border-2 border-border rounded-full flex items-center justify-center hover:bg-muted/50 transition-colors">
          <Plus className="w-4 h-4 text-muted-foreground" />
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
                <h3 className="text-foreground font-medium">{service.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${
                    service.status === 'active' || service.status === 'good_balance'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                  }`}>
                    {service.status === 'expires_soon' && `EXPIRES IN ${service.daysRemaining} DAYS`}
                    {service.status === 'low_balance' && 'LOW BALANCE'}
                    {service.status === 'never_checked' && 'NEVER CHECKED'}
                    {service.status === 'active' && `ACTIVE - ${service.daysRemaining} DAYS LEFT`}
                    {service.status === 'good_balance' && 'SUFFICIENT BALANCE'}
                    {service.status === 'pending' && 'PENDING PAYMENT'}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {service.expiryDate && `• ${new Date(service.expiryDate).getDate()} ${new Date(service.expiryDate).toLocaleString('default', { month: 'short' })}`}
                    {service.balance && `• ${service.currency}${service.balance}`}
                    {service.amount && `• ${service.currency}${service.amount}`}
                  </span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                {service.buttonAction === 'check_challans' ? (
                  <button className="w-24 h-9 bg-muted hover:bg-muted/80 rounded flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                ) : (
                  <button className="w-24 h-9 bg-foreground text-background rounded text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center">
                    <span className="truncate px-2">{service.buttonText}</span>
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
      
      </CardContent>
    </Card>
  );
}

export default VehicleDetails;