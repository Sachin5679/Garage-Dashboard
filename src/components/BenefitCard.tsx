import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.90 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="max-w-xs"
    >
      <Card className="w-64 h-48 flex flex-col justify-between">
        <CardHeader className="flex items-center gap-3 pb-2">
          <Icon className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold truncate">{title}</h3>
        </CardHeader>

        <CardContent className="flex-1 overflow-hidden">
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>

        <CardFooter className="pt-2">
          <Button size="sm" className="w-full cursor-pointer" onClick={onClick}>
            {ctaLabel}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
