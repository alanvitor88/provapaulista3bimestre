import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { classData, subjects } from "@/data/provaData";
import { BookOpen } from "lucide-react";

export function SubjectPerformanceChart() {
  // Calculate average performance by subject
  const subjectAverages = subjects.map(subject => {
    const validScores = classData
      .map(classItem => (classItem as any)[subject.key])
      .filter(score => score !== undefined && score !== null);
    
    const average = validScores.length > 0 
      ? validScores.reduce((sum, score) => sum + score, 0) / validScores.length 
      : 0;
    
    return {
      subject: subject.shortName,
      performance: Math.round(average * 10) / 10,
      fullName: subject.name
    };
  }).filter(item => item.performance > 0);

  const maxValue = Math.max(...subjectAverages.map(item => item.performance));
  const radarMax = Math.ceil(maxValue / 10) * 10;

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <BookOpen className="w-5 h-5" />
          Desempenho por Disciplina
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Média geral de desempenho por disciplina
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={subjectAverages}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fontSize: 12, fill: 'hsl(var(--foreground))' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, radarMax]}
                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
              />
              <Radar
                name="Desempenho"
                dataKey="performance"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Subject Performance Summary */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          {subjectAverages
            .sort((a, b) => b.performance - a.performance)
            .slice(0, 6)
            .map((item, index) => (
              <div key={item.subject} className="text-center">
                <p className="text-sm font-medium text-primary">
                  {item.subject}
                </p>
                <p className="text-lg font-bold text-foreground">
                  {item.performance}%
                </p>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}