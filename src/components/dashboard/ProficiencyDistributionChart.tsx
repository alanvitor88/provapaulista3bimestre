import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { PieChart as PieChartIcon } from "lucide-react";

const data = [
  { name: "Abaixo do Básico", value: 172, color: "hsl(var(--performance-below))" },
  { name: "Básico", value: 119, color: "hsl(var(--performance-basic))" },
  { name: "Adequado", value: 50, color: "hsl(var(--performance-adequate))" },
  { name: "Avançado", value: 5, color: "hsl(var(--performance-advanced))" },
];

const totalGeral = 346;

export function ProficiencyDistributionChart() {
  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="font-semibold text-sm"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <PieChartIcon className="w-5 h-5" />
          Distribuição de Proficiência
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Total de {totalGeral} alunos por nível de desempenho
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--foreground))",
                }}
                formatter={(value: number) => [`${value} alunos`, ""]}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value, entry: any) => (
                  <span className="text-sm text-foreground">
                    {value} ({entry.payload.value})
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Distribution Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {data.map((item) => (
            <div
              key={item.name}
              className="p-3 rounded-lg border"
              style={{ backgroundColor: `${item.color}15` }}
            >
              <p className="text-xs font-medium" style={{ color: item.color }}>
                {item.name}
              </p>
              <p className="text-2xl font-bold text-foreground mt-1">
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground">
                {((item.value / totalGeral) * 100).toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
