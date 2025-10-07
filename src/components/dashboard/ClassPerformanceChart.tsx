import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { classData, getPerformanceLevel, performanceLevels } from "@/data/provaData";
import { TrendingUp } from "lucide-react";

const getPerformanceColor = (level: string) => {
  switch (level) {
    case 'advanced': return '#22c55e';  // Green
    case 'adequate': return '#3b82f6';  // Blue
    case 'basic': return '#f59e0b';     // Yellow/Orange
    case 'below': return '#ef4444';     // Red
    default: return '#6b7280';
  }
};

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

export function ClassPerformanceChart() {
  const chartData = classData
    .map(item => ({
      turma: item.turma,
      acertos: item.acertos,
      evolucao: item.evolucao,
      level: getPerformanceLevel(item.acertos),
      participacao: item.participacao
    }))
    .sort((a, b) => b.acertos - a.acertos);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const levelInfo = performanceLevels[data.level];
      
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-4 space-y-2">
          <p className="font-semibold text-card-foreground">Turma {label}</p>
          <p className="text-primary font-bold">{data.acertos.toFixed(1)}% de acertos</p>
          <p className="text-sm text-muted-foreground">
            Participação: {data.participacao.toFixed(1)}%
          </p>
          <Badge 
            className={getPerformanceClasses(data.level)}
          >
            {levelInfo.label}
          </Badge>
          {data.evolucao !== 0 && (
            <p className={`text-sm font-medium ${data.evolucao > 0 ? 'text-performance-advanced' : 'text-performance-below'}`}>
              Evolução: {data.evolucao > 0 ? '+' : ''}{data.evolucao}%
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <TrendingUp className="w-5 h-5" />
          Desempenho por Turma
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Percentual de acertos na Prova Paulista por turma
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
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
                domain={[0, 100]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="acertos" 
                radius={[4, 4, 0, 0]}
                stroke="hsl(var(--border))"
                strokeWidth={1}
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={getPerformanceColor(entry.level)}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Performance Legend */}
        <div className="flex flex-wrap gap-3 mt-4 justify-center">
          {Object.entries(performanceLevels).map(([key, level]) => (
            <div key={key} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded"
                style={{ backgroundColor: getPerformanceColor(key) }}
              />
              <span className="text-xs text-muted-foreground">
                {level.label} ({level.range})
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}