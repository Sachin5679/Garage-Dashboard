import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

type ProfileSummaryProps = {
  name: string;
  level: number;
  xpPercent: number;
  avatarUrl?: string;
};

export function ProfileSummary({
  name,
  level,
  xpPercent,
  avatarUrl,
}: ProfileSummaryProps) {
  return (
    <Card className="w-full shadow-md">
      <CardContent className=" flex items-center gap-6">
        
        <Avatar className="h-14 w-14 shrink-0 m-2">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        
        <div className="flex-1">
          <div className="mb-1">
            <h2 className="text-base font-semibold leading-tight">{name}</h2>
            <span className="text-sm px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">Level {level}</span>
          </div>

          <div>
            <Progress value={xpPercent} />
            <p className="text-xs text-muted-foreground mt-1">
              {xpPercent}% to next level
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
