import { HeaderSection } from "./HeaderSection";
import { PerformanceCard } from "./PerformanceCard";
import { ClassPerformanceChart } from "./ClassPerformanceChart";
import { SubjectPerformanceChart } from "./SubjectPerformanceChart";
import { ProficiencyDistributionChart } from "./ProficiencyDistributionChart";
import { TeacherPerformanceTable } from "./TeacherPerformanceTable";
import { StudentRankingTabs } from "./StudentRankingTabs";
import { StudentSearch } from "./StudentSearch";
import { PerformanceLegend } from "./PerformanceLegend";
import { EvolutionChart } from "./EvolutionChart";
import { ClassTable } from "./ClassTable";
import { ClassTabs } from "./ClassTabs";
import { classData, subjects, schoolInfo } from "@/data/provaData";
import { BarChart3, TrendingUp, Users, BookOpen } from "lucide-react";

export function Dashboard() {
  // Calculate overall statistics
  const totalParticipation = classData.reduce((sum, c) => sum + c.participacao, 0) / classData.length;
  const overallPerformance = classData.reduce((sum, c) => sum + c.acertos, 0) / classData.length;
  const totalEvolution = classData.reduce((sum, c) => sum + c.evolucao, 0) / classData.length;
  
  // Calculate subject averages
  const subjectAverages = subjects.map(subject => {
    const validScores = classData
      .map(classItem => (classItem as any)[subject.key])
      .filter(score => score !== undefined && score !== null);
    
    return validScores.length > 0 
      ? validScores.reduce((sum, score) => sum + score, 0) / validScores.length 
      : 0;
  }).filter(avg => avg > 0);

  const bestSubjectAvg = Math.max(...subjectAverages);
  const worstSubjectAvg = Math.min(...subjectAverages);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <HeaderSection />

        {/* Key Performance Indicators */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Indicadores Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PerformanceCard
              title="Média Geral"
              value={schoolInfo.mediaGeral}
              subtitle="Percentual de acertos"
              showPerformanceLevel
              icon={<TrendingUp className="w-4 h-4" />}
            />
            <PerformanceCard
              title="Participação Média"
              value={schoolInfo.participacao}
              subtitle="Das turmas"
              icon={<Users className="w-4 h-4" />}
              trend={schoolInfo.participacaoTrend}
            />
            <PerformanceCard
              title="Melhor Disciplina"
              value={bestSubjectAvg}
              subtitle="Média por disciplina"
              showPerformanceLevel
              icon={<BookOpen className="w-4 h-4" />}
            />
            <PerformanceCard
              title="Evolução Média"
              value={schoolInfo.evolucaoMedia}
              subtitle="Crescimento"
              icon={<TrendingUp className="w-4 h-4" />}
              trend={schoolInfo.evolucaoMedia}
            />
          </div>
        </section>

        {/* Charts Section */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Análise de Desempenho
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ClassPerformanceChart />
            <SubjectPerformanceChart />
          </div>
          <div className="mt-6">
            <ProficiencyDistributionChart />
          </div>
        </section>

        {/* Evolution and Legend */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <EvolutionChart />
            </div>
            <PerformanceLegend />
          </div>
        </section>

        {/* Student Search */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Consulta Individual
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StudentSearch />
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-gradient-primary text-white">
                <h3 className="text-xl font-bold mb-2">Destaque da Prova</h3>
                <p className="text-sm opacity-90 mb-4">
                  As turmas 9A e 8C obtiveram os melhores resultados gerais, 
                  demonstrando excelente preparação e dedicação.
                </p>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="font-bold">9A:</span> 65.9%
                  </div>
                  <div>
                    <span className="font-bold">8C:</span> 65.4%
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg bg-performance-basic-bg border border-performance-basic/20">
                <h3 className="text-xl font-bold mb-2 text-performance-basic">
                  Oportunidades de Melhoria
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Algumas turmas apresentaram resultados abaixo da média 
                  e podem se beneficiar de apoio adicional.
                </p>
                <div className="space-y-2 text-sm">
                  <div>História: Média geral de 37.8%</div>
                  <div>Turma 8A: Necessita atenção especial</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Class Tabs - Students by Class */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Alunos por Turma
          </h2>
          <ClassTabs />
        </section>

        {/* Teacher Performance */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Desempenho dos Professores
          </h2>
          <TeacherPerformanceTable />
        </section>

        {/* Student Ranking */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Rankings por Disciplina
          </h2>
          <StudentRankingTabs />
        </section>

        {/* Detailed Table */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Dados Detalhados
          </h2>
          <ClassTable />
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t">
          <p className="text-muted-foreground text-sm">
            Dashboard Prova Paulista - Escola {" "}
            <span className="font-semibold text-primary">Clodonil Cardoso</span>
            {" "} | Coordenado por {" "}
            <span className="font-semibold text-primary">Alan Vitor Moreto Vieira</span>
          </p>
        </footer>
      </div>
    </div>
  );
}