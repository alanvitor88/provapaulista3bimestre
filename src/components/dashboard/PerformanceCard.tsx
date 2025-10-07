import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPerformanceLevel, performanceLevels } from "@/data/provaData";
import { cn } from "@/lib/utils";

interface PerformanceCardProps {
  title: string;
  value: number;
  subtitle?: string;
  showPerformanceLevel?: boolean;
  icon?: React.ReactNode;
  trend?: number;
}

const getPerformanceClasses = (level: string) => {
  switch (level) {
    case 'below':
      return 'bg-performance-below-bg text-performance-below';
    case 'basic':
      return 'bg-performance-basic-bg text-performance-basic';
    case 'adequate':
      return 'bg-performance-adequate-bg text-performance-adequate';
    case 'advanced':
      return 'bg-performance-advanced-bg text-performance-advanced';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export function PerformanceCard({ 
  title, 
  value, 
  subtitle, 
  showPerformanceLevel = false, 
  icon,
  trend 
}: PerformanceCardProps) {
  const performanceLevel = getPerformanceLevel(value);
  const levelInfo = performanceLevels[performanceLevel];

  return (
    <Card className="bg-gradient-card shadow-card border-0 hover:shadow-elevated transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">
              {value.toFixed(1)}%
            </span>
            {trend && (
              <Badge 
                variant={trend > 0 ? "default" : "destructive"}
                className={cn(
                  "text-xs",
                  trend > 0 && "bg-performance-advanced text-white"
                )}
              >
                {trend > 0 ? '+' : ''}{trend}%
              </Badge>
            )}
          </div>
          
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
          
          {showPerformanceLevel && (
            <Badge 
              className={cn("text-xs font-medium", getPerformanceClasses(performanceLevel))}
            >
              {levelInfo.label}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}