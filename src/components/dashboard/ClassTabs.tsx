import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { classData, studentData, getPerformanceLevel, performanceLevels } from "@/data/provaData";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function ClassTabs() {
  const classes = classData.map(c => c.turma).sort();

  const getPerformanceClasses = (score: number) => {
    const level = getPerformanceLevel(score);
    const baseClasses = "px-2 py-1 rounded-md text-xs font-medium";
    
    switch(level) {
      case 'advanced':
        return cn(baseClasses, "bg-performance-advanced-bg text-performance-advanced border border-performance-advanced/20");
      case 'adequate':
        return cn(baseClasses, "bg-performance-adequate-bg text-performance-adequate border border-performance-adequate/20");
      case 'basic':
        return cn(baseClasses, "bg-performance-basic-bg text-performance-basic border border-performance-basic/20");
      case 'below':
        return cn(baseClasses, "bg-performance-below-bg text-performance-below border border-performance-below/20");
      default:
        return baseClasses;
    }
  };

  const getStudentsByClass = (turma: string) => {
    return studentData.filter(s => s.turma === turma).sort((a, b) => b.acertos - a.acertos);
  };

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Users className="w-5 h-5" />
          Desempenho por Turma
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Selecione uma turma para visualizar o desempenho individual dos alunos
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={classes[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-11 mb-6">
            {classes.map(turma => (
              <TabsTrigger key={turma} value={turma}>
                {turma}
              </TabsTrigger>
            ))}
          </TabsList>

          {classes.map(turma => {
            const students = getStudentsByClass(turma);
            const classInfo = classData.find(c => c.turma === turma);

            return (
              <TabsContent key={turma} value={turma}>
                {/* Class Summary */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">Total de Alunos</p>
                    <p className="text-2xl font-bold text-primary">{classInfo?.totalAlunos}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">Participação</p>
                    <p className="text-2xl font-bold text-primary">{classInfo?.participacao.toFixed(1)}%</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">Média de Acertos</p>
                    <p className="text-2xl font-bold text-primary">{classInfo?.acertos.toFixed(1)}%</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">Evolução</p>
                    <p className={cn(
                      "text-2xl font-bold",
                      classInfo && classInfo.evolucao > 0 ? "text-performance-advanced" : 
                      classInfo && classInfo.evolucao < 0 ? "text-performance-below" : "text-muted-foreground"
                    )}>
                      {classInfo?.evolucao > 0 ? '+' : ''}{classInfo?.evolucao}%
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <p className="text-sm text-muted-foreground">Proficiência</p>
                    <div className={getPerformanceClasses(classInfo?.acertos || 0)}>
                      {performanceLevels[getPerformanceLevel(classInfo?.acertos || 0)].label}
                    </div>
                  </div>
                </div>

                {/* Students Table */}
                <div className="overflow-x-auto rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold min-w-[250px]">Nome</TableHead>
                        <TableHead className="text-center">Acertos</TableHead>
                        <TableHead className="text-center">Proficiência</TableHead>
                        <TableHead className="text-center">Evolução</TableHead>
                        <TableHead className="text-center">PORT</TableHead>
                        <TableHead className="text-center">MAT</TableHead>
                        <TableHead className="text-center">HIST</TableHead>
                        <TableHead className="text-center">GEO</TableHead>
                        <TableHead className="text-center">ING</TableHead>
                        <TableHead className="text-center">CIE</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student, idx) => (
                        <TableRow key={idx} className="hover:bg-muted/50">
                          <TableCell className="font-medium">{student.nome}</TableCell>
                          <TableCell className="text-center">
                            <span className="font-bold">{student.acertos.toFixed(1)}%</span>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className={getPerformanceClasses(student.acertos)}>
                              {performanceLevels[getPerformanceLevel(student.acertos)].label}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            {student.evolucao !== null && (
                              <Badge
                                variant={student.evolucao > 0 ? "default" : student.evolucao < 0 ? "destructive" : "outline"}
                                className={cn(
                                  "text-xs",
                                  student.evolucao > 0 && "bg-performance-advanced text-white"
                                )}
                              >
                                {student.evolucao > 0 ? '+' : ''}{student.evolucao}%
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-center">
                            <div className={getPerformanceClasses(student.port)}>
                              {student.port.toFixed(1)}%
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className={getPerformanceClasses(student.mat)}>
                              {student.mat.toFixed(1)}%
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className={getPerformanceClasses(student.hist)}>
                              {student.hist.toFixed(1)}%
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className={getPerformanceClasses(student.geo)}>
                              {student.geo.toFixed(1)}%
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className={getPerformanceClasses(student.ing)}>
                              {student.ing.toFixed(1)}%
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className={getPerformanceClasses(student.cie)}>
                              {student.cie.toFixed(1)}%
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
}
