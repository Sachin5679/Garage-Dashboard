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
    <Card className="w-full max-w-sm shadow-md">
      <CardContent className="p-4 flex flex-col items-center space-y-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="text-center">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-muted-foreground">Level {level}</p>
        </div>

        <div className="w-full space-y-1">
          <Progress value={xpPercent} />
          <p className="text-xs text-muted-foreground text-center">
            {xpPercent}% to next level
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
