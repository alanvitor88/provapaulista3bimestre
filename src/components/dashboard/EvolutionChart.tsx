import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { classData } from "@/data/provaData";
import { TrendingUp, TrendingDown } from "lucide-react";

export function EvolutionChart() {
  const evolutionData = classData
    .filter(item => item.evolucao !== 0)
    .map(item => ({
      turma: item.turma,
      evolucao: item.evolucao,
      acertos: item.acertos
    }))
    .sort((a, b) => b.evolucao - a.evolucao);

  const positiveEvolution = evolutionData.filter(item => item.evolucao > 0);
  const negativeEvolution = evolutionData.filter(item => item.evolucao < 0);

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <TrendingUp className="w-5 h-5" />
          Evolução das Turmas
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Comparação da evolução do desempenho entre as turmas
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={evolutionData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="turma" 
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
                domain={['dataMin - 2', 'dataMax + 2']}
              />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-card border border-border rounded-lg shadow-lg p-4">
                        <p className="font-semibold text-card-foreground">Turma {label}</p>
                        <p className={`font-bold ${data.evolucao > 0 ? 'text-performance-advanced' : 'text-performance-below'}`}>
                          Evolução: {data.evolucao > 0 ? '+' : ''}{data.evolucao}%
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Acertos atuais: {data.acertos}%
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="evolucao"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-performance-advanced-bg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-performance-advanced" />
              <h3 className="font-semibold text-performance-advanced">
                Evolução Positiva
              </h3>
            </div>
            <div className="space-y-2">
              {positiveEvolution.slice(0, 3).map(item => (
                <div key={item.turma} className="flex justify-between text-sm">
                  <span>Turma {item.turma}</span>
                  <span className="font-bold text-performance-advanced">
                    +{item.evolucao}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-performance-below-bg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-performance-below" />
              <h3 className="font-semibold text-performance-below">
                Necessita Atenção
              </h3>
            </div>
            <div className="space-y-2">
              {negativeEvolution.slice(0, 3).map(item => (
                <div key={item.turma} className="flex justify-between text-sm">
                  <span>Turma {item.turma}</span>
                  <span className="font-bold text-performance-below">
                    {item.evolucao}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}