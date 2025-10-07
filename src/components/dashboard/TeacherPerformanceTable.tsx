import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { teachers, classData, getPerformanceLevel, performanceLevels } from "@/data/provaData";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

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

export function TeacherPerformanceTable() {
  // Calculate teacher performance based on their classes
  const teacherPerformance = teachers.map(teacher => {
    const teacherClasses = teacher.turmas
      .map(turma => classData.find(c => c.turma === turma))
      .filter(Boolean);
    
    if (teacherClasses.length === 0) return null;
    
    // Get subject key based on discipline
    const subjectMap: Record<string, keyof typeof classData[0]> = {
      'Língua Portuguesa': 'port',
      'Matemática': 'mat',
      'História': 'hist',
      'Geografia': 'geo',
      'Inglês': 'ing',
      'Ciências': 'cie'
    };
    
    const subjectKey = subjectMap[teacher.disciplina];
    if (!subjectKey) return null;
    
    const performances = teacherClasses.map(c => (c as any)[subjectKey]).filter(p => p != null);
    const averagePerformance = performances.length > 0 
      ? performances.reduce((sum, p) => sum + p, 0) / performances.length 
      : 0;
    
    return {
      ...teacher,
      averagePerformance: Math.round(averagePerformance * 10) / 10,
      classCount: teacherClasses.length,
      totalStudents: teacherClasses.reduce((sum, c) => sum + c!.totalAlunos, 0)
    };
  }).filter(Boolean) as Array<{
    nome: string;
    disciplina: string;
    turmas: string[];
    averagePerformance: number;
    classCount: number;
    totalStudents: number;
  }>;

  // Group by discipline
  const disciplineGroups = teacherPerformance.reduce((acc, teacher) => {
    if (!acc[teacher.disciplina]) {
      acc[teacher.disciplina] = [];
    }
    acc[teacher.disciplina].push(teacher);
    return acc;
  }, {} as Record<string, typeof teacherPerformance>);

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Users className="w-5 h-5" />
          Desempenho por Professor
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Média de desempenho dos alunos por professor e disciplina
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Object.entries(disciplineGroups).map(([discipline, teachers]) => (
            <div key={discipline}>
              <h3 className="font-semibold text-lg text-primary mb-3">{discipline}</h3>
              <div className="grid gap-3">
                {teachers
                  .sort((a, b) => b.averagePerformance - a.averagePerformance)
                  .map((teacher) => {
                    const level = getPerformanceLevel(teacher.averagePerformance);
                    
                    return (
                      <div
                        key={`${teacher.nome}-${teacher.disciplina}`}
                        className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h4 className="font-medium text-card-foreground">
                              {teacher.nome}
                            </h4>
                            <Badge 
                              className={cn("text-xs", getPerformanceClasses(level))}
                            >
                              {performanceLevels[level].label}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {teacher.classCount} turma{teacher.classCount > 1 ? 's' : ''} • {teacher.totalStudents} alunos
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Turmas: {teacher.turmas.join(', ')}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">
                            {teacher.averagePerformance}%
                          </p>
                          <p className="text-xs text-muted-foreground">média</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}