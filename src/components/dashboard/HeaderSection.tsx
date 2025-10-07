import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { schoolInfo } from "@/data/provaData";
import { GraduationCap, Users, TrendingUp } from "lucide-react";
import logoEscola from "@/assets/logo-escola.png";

export function HeaderSection() {
  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="text-center space-y-4">
        <div className="flex flex-col items-center justify-center gap-4 mb-2">
          <img src={logoEscola} alt="Logo Escola Clodonil Cardoso" className="w-32 h-32 object-contain" />
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Prova Paulista 3º Bimestre
            </h1>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Relatório de Desempenho - {schoolInfo.segmento}
        </p>
      </div>

      {/* School Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card shadow-card border-0 hover:shadow-elevated transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Escola</h3>
                <p className="text-2xl font-bold text-primary">{schoolInfo.nome}</p>
                <Badge variant="outline" className="mt-1">
                  {schoolInfo.segmento}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card border-0 hover:shadow-elevated transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Participação</h3>
                <p className="text-2xl font-bold text-primary">
                  {schoolInfo.totalAlunos} alunos
                </p>
                <Badge variant="secondary" className="mt-1 bg-performance-advanced-bg text-performance-advanced">
                  {schoolInfo.participacao}% participaram
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card border-0 hover:shadow-elevated transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Coordenador</h3>
                <p className="text-lg font-semibold text-primary">{schoolInfo.cgpg}</p>
                <Badge variant="outline" className="mt-1">
                  CGPG
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}