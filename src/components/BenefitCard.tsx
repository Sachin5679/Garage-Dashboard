import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaLabel: string;
  onClick?: () => void;
};

export function BenefitCard({
  icon: Icon,
  title,
  description,
  ctaLabel,
  onClick,
}: BenefitCardProps) {
  return (
    <Card className="w-full max-w-xs transition-all hover:scale-[1.02] hover:shadow-lg">
      <CardHeader className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onClick}>
          {ctaLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
