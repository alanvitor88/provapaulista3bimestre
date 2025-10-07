import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { classData, getPerformanceLevel, performanceLevels, subjects } from "@/data/provaData";
import { Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function ClassTable() {
  const sortedClasses = [...classData].sort((a, b) => b.acertos - a.acertos);

  const getPerformanceColor = (score: number) => {
    const level = getPerformanceLevel(score);
    return performanceLevels[level].color;
  };

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Users className="w-5 h-5" />
          Tabela Detalhada por Turma
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Desempenho completo de todas as turmas por disciplina
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Turma</TableHead>
                <TableHead className="text-center">Alunos</TableHead>
                <TableHead className="text-center">Participação</TableHead>
                <TableHead className="text-center">Acertos</TableHead>
                <TableHead className="text-center">Evolução</TableHead>
                {subjects.slice(0, 6).map(subject => (
                  <TableHead key={subject.key} className="text-center">
                    {subject.shortName}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedClasses.map((classItem) => (
                <TableRow key={classItem.turma} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    {classItem.turma}
                  </TableCell>
                  <TableCell className="text-center">
                    {classItem.totalAlunos}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className="text-xs">
                      {classItem.participacao.toFixed(1)}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-bold">
                        {classItem.acertos.toFixed(1)}%
                      </span>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: `hsl(var(--${getPerformanceColor(classItem.acertos)}))`
                        }}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {classItem.evolucao !== 0 && (
                      <Badge
                        variant={classItem.evolucao > 0 ? "default" : "destructive"}
                        className={cn(
                          "text-xs",
                          classItem.evolucao > 0 && "bg-performance-advanced text-white"
                        )}
                      >
                        {classItem.evolucao > 0 ? '+' : ''}{classItem.evolucao}%
                      </Badge>
                    )}
                  </TableCell>
                  {subjects.slice(0, 6).map(subject => {
                    const score = (classItem as any)[subject.key];
                    return (
                      <TableCell key={subject.key} className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-sm font-medium">
                            {score.toFixed(1)}%
                          </span>
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: `hsl(var(--${getPerformanceColor(score)}))`
                            }}
                          />
                        </div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}