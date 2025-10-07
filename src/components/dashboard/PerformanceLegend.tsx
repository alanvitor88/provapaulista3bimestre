import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { performanceLevels } from "@/data/provaData";
import { Info } from "lucide-react";

export function PerformanceLegend() {
  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Info className="w-5 h-5" />
          Níveis de Desempenho
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Classificação dos resultados da Prova Paulista
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(performanceLevels).map(([key, level]) => (
            <div
              key={key}
              className={`p-4 rounded-lg border bg-${level.color}-bg/20 hover:bg-${level.color}-bg/30 transition-colors`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full bg-${level.color}`}
                />
                <div>
                  <h3 className={`font-semibold text-${level.color}`}>
                    {level.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {level.range}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}