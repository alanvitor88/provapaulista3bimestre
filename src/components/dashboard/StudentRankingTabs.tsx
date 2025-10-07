import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { studentData, teachers, getPerformanceLevel, performanceLevels, subjects } from "@/data/provaData";
import { Award, TrendingUp } from "lucide-react";
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

// Helper function to get teacher for a specific class and subject
const getTeacherForClass = (turma: string, disciplina: string) => {
  const teacher = teachers.find(
    t => t.disciplina === disciplina && t.turmas.includes(turma)
  );
  return teacher?.nome || 'N/A';
};

export function StudentRankingTabs() {
  // Subject mapping
  const subjectMap: Record<string, { key: keyof typeof studentData[0], name: string }> = {
    'Língua Portuguesa': { key: 'port', name: 'Língua Portuguesa' },
    'Matemática': { key: 'mat', name: 'Matemática' },
    'História': { key: 'hist', name: 'História' },
    'Geografia': { key: 'geo', name: 'Geografia' },
    'Inglês': { key: 'ing', name: 'Inglês' },
    'Ciências': { key: 'cie', name: 'Ciências' }
  };

  const getRankingForSubject = (disciplina: string) => {
    const subjectInfo = subjectMap[disciplina];
    if (!subjectInfo) return [];

    // Filter students with adequate or advanced performance
    const rankedStudents = studentData
      .map(student => {
        const score = student[subjectInfo.key] as number;
        const level = getPerformanceLevel(score);
        const teacher = getTeacherForClass(student.turma, disciplina);
        
        return {
          nome: student.nome,
          turma: student.turma,
          score,
          level,
          teacher
        };
      })
      .filter(s => s.level === 'adequate' || s.level === 'advanced')
      .sort((a, b) => b.score - a.score);

    return rankedStudents;
  };

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Award className="w-5 h-5" />
          Ranking de Alunos - Adequado e Avançado
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Alunos com desempenho adequado ou avançado por disciplina
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="Língua Portuguesa" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            {Object.keys(subjectMap).map((subject) => (
              <TabsTrigger key={subject} value={subject} className="text-xs lg:text-sm">
                {subject === 'Língua Portuguesa' ? 'Port.' : 
                 subject === 'Matemática' ? 'Mat.' : 
                 subject === 'História' ? 'Hist.' : 
                 subject === 'Geografia' ? 'Geo.' : 
                 subject === 'Inglês' ? 'Ing.' : 'Ciên.'}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(subjectMap).map(([disciplina, info]) => {
            const ranking = getRankingForSubject(disciplina);
            
            return (
              <TabsContent key={disciplina} value={disciplina} className="space-y-4 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-primary">{info.name}</h3>
                  <Badge variant="secondary" className="text-sm">
                    {ranking.length} aluno{ranking.length !== 1 ? 's' : ''}
                  </Badge>
                </div>

                {ranking.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Nenhum aluno com desempenho adequado ou avançado nesta disciplina
                  </div>
                ) : (
                  <div className="grid gap-3">
                    {ranking.map((student, index) => (
                      <div
                        key={`${student.nome}-${student.turma}`}
                        className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 flex-wrap">
                              <h4 className="font-medium text-card-foreground">
                                {student.nome}
                              </h4>
                              <Badge 
                                className={cn("text-xs", getPerformanceClasses(student.level))}
                              >
                                {performanceLevels[student.level].label}
                              </Badge>
                            </div>
                            <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                              <span>Turma: {student.turma}</span>
                              <span>•</span>
                              <span>Professor(a): {student.teacher}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <p className="text-2xl font-bold text-primary">
                            {student.score}%
                          </p>
                          <p className="text-xs text-muted-foreground">acertos</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
}
