import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getPerformanceLevel, performanceLevels, subjects, studentData } from "@/data/provaData";
import { Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function StudentSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<typeof studentData[0] | null>(null);

  const filteredStudents = studentData.filter(student =>
    student.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Search className="w-5 h-5" />
          Buscar Aluno
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Digite o nome do aluno para ver seus resultados detalhados
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Digite o nome do aluno..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {searchTerm && filteredStudents.length > 0 && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {filteredStudents.map((student, index) => (
              <div
                key={index}
                className="p-3 rounded-lg border bg-card hover:bg-accent cursor-pointer transition-colors"
                onClick={() => setSelectedStudent(student)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-card-foreground">
                      {student.nome}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Turma {student.turma}
                    </p>
                  </div>
                  <Badge
                    className={cn(
                      "text-xs",
                      `bg-${performanceLevels[getPerformanceLevel(student.acertos)].color}-bg text-${performanceLevels[getPerformanceLevel(student.acertos)].color}`
                    )}
                  >
                    {student.acertos}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedStudent && (
          <div className="mt-6 p-4 rounded-lg bg-muted/30 border">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-semibold text-primary">
                  {selectedStudent.nome}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Turma {selectedStudent.turma}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Participação</p>
                <p className="text-lg font-bold text-primary">
                  {selectedStudent.participacao}%
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Acertos Gerais</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold text-primary">
                    {selectedStudent.acertos}%
                  </p>
                  <Badge
                    className={cn(
                      "text-xs",
                      `bg-${performanceLevels[getPerformanceLevel(selectedStudent.acertos)].color}-bg text-${performanceLevels[getPerformanceLevel(selectedStudent.acertos)].color}`
                    )}
                  >
                    {performanceLevels[getPerformanceLevel(selectedStudent.acertos)].label}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-card-foreground">
                Desempenho por Disciplina
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {subjects.map(subject => {
                  const score = (selectedStudent as any)[subject.key];
                  if (score === undefined || score === null) return null;
                  
                  const level = getPerformanceLevel(score);
                  const levelInfo = performanceLevels[level];
                  
                  return (
                    <div key={subject.key} className="flex items-center justify-between p-2 rounded bg-card">
                      <span className="text-sm font-medium">
                        {subject.shortName}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">
                          {score}%
                        </span>
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--${levelInfo.color}))`
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {selectedStudent.evolucao !== null && (
              <div className="mt-4 p-3 rounded-lg bg-performance-adequate-bg">
                <p className="text-sm text-muted-foreground">Evolução</p>
                <p className={cn(
                  "text-lg font-bold",
                  selectedStudent.evolucao > 0 ? "text-performance-advanced" : "text-performance-below"
                )}>
                  {selectedStudent.evolucao > 0 ? '+' : ''}{selectedStudent.evolucao}%
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}