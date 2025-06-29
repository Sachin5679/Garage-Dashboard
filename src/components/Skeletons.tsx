import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <Skeleton className="h-16 w-16 rounded-full mx-auto" />
      <Skeleton className="h-4 w-32 mx-auto" />
      <Skeleton className="h-3 w-24 mx-auto" />
      <Skeleton className="h-2.5 w-full rounded" />
    </div>
  );
}

export function BenefitCardSkeleton() {
  return (
    <div className="w-full max-w-xs space-y-3 p-4 border rounded-lg">
      <Skeleton className="h-6 w-24" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-8 w-full rounded" />
    </div>
  );
}

export function RewardChartSkeleton() {
  return (
    <div className="w-full max-w-sm p-6 border rounded-lg">
      <Skeleton className="h-5 w-40 mb-6" />
      <div className="w-48 h-48 mx-auto">
        <Skeleton className="w-full h-full rounded-full" />
      </div>
    </div>
  );
}
