// Dados da Prova Paulista - Escola Clodonil Cardoso

export interface Student {
  turma: string;
  nome: string;
  participacao: number;
  acertos: number;
  evolucao: number | null;
  port: number;
  mat: number;
  hist: number;
  geo: number;
  ing: number;
  cie: number;
  oePort?: number;
  oeMat?: number;
  edFin?: number;
  tecIno?: number;
}

export interface ClassData {
  turma: string;
  totalAlunos: number;
  participacao: number;
  acertos: number;
  evolucao: number;
  port: number;
  mat: number;
  hist: number;
  geo: number;
  ing: number;
  cie: number;
  oePort?: number;
  oeMat?: number;
  edFin?: number;
  tecIno?: number;
}

export interface Teacher {
  nome: string;
  disciplina: string;
  turmas: string[];
}

export const schoolInfo = {
  nome: "Clodonil Cardoso",
  segmento: "Ensino Fundamental",
  cgpg: "Alan Vitor Moreto Vieira",
  totalAlunos: 346,
  participacao: 97,
  mediaGeral: 48.9,
  participacaoTrend: -0.3,
  evolucaoMedia: 1.8
};

export const teachers: Teacher[] = [
  // Língua Portuguesa
  { nome: "DAIANE", disciplina: "Língua Portuguesa", turmas: ["6A", "6B"] },
  { nome: "SUELEN", disciplina: "Língua Portuguesa", turmas: ["6C", "7B", "7C"] },
  { nome: "BARBARA", disciplina: "Língua Portuguesa", turmas: ["7A", "8B", "8C"] },
  { nome: "MÁRCIA", disciplina: "Língua Portuguesa", turmas: ["8A", "9A", "9B"] },
  
  // Matemática
  { nome: "SÉRGIO", disciplina: "Matemática", turmas: ["6A", "6B", "8C"] },
  { nome: "PRISCILA", disciplina: "Matemática", turmas: ["6C", "9A", "9B"] },
  { nome: "TIAGO", disciplina: "Matemática", turmas: ["7A", "7B", "7C"] },
  { nome: "DANILO", disciplina: "Matemática", turmas: ["8A", "8B"] },
  
  // História
  { nome: "ADRIANO", disciplina: "História", turmas: ["6A", "6B", "7A", "7B"] },
  { nome: "MARCELINO", disciplina: "História", turmas: ["6C", "7C", "8A", "8B", "8C", "9A", "9B"] },
  
  // Geografia
  { nome: "NEIDE", disciplina: "Geografia", turmas: ["6A", "7A", "7B", "8A", "8B", "9A"] },
  { nome: "ADRIANO", disciplina: "Geografia", turmas: ["6B", "6C", "7C", "9B"] },
  
  // Inglês
  { nome: "FABIANI", disciplina: "Inglês", turmas: ["6A", "6B", "6C", "7A", "7B", "7C", "8A", "8B", "8C", "9A", "9B"] },
  
  // Ciências
  { nome: "EZEL", disciplina: "Ciências", turmas: ["6A", "6B", "7A", "8C"] },
  { nome: "PALOMA", disciplina: "Ciências", turmas: ["6C", "7B", "7C", "8A", "8B", "9B"] },
  { nome: "KARINA", disciplina: "Ciências", turmas: ["9A"] },
];

export const classData: ClassData[] = [
  { turma: "9A", totalAlunos: 33, participacao: 100.0, acertos: 65.9, evolucao: 9, port: 66.1, mat: 62.7, hist: 67.6, geo: 71.8, ing: 60.6, cie: 75.4, oePort: 54.2, oeMat: 61.0 },
  { turma: "8C", totalAlunos: 38, participacao: 97.4, acertos: 65.4, evolucao: 2, port: 59.9, mat: 64.9, hist: 51.4, geo: 73.5, ing: 77.8, cie: 74.9, edFin: 72.4, tecIno: 62.2 },
  { turma: "6A", totalAlunos: 37, participacao: 96.6, acertos: 59.5, evolucao: 0, port: 68.2, mat: 63.4, hist: 49.2, geo: 63.5, ing: 69.7, cie: 47.1, edFin: 65.1, tecIno: 32.6 },
  { turma: "7A", totalAlunos: 27, participacao: 100.0, acertos: 55.4, evolucao: 8, port: 57.2, mat: 63.9, hist: 29.3, geo: 57.8, ing: 54.1, cie: 64.4, edFin: 57.8, tecIno: 50.4 },
  { turma: "6B", totalAlunos: 34, participacao: 95.2, acertos: 49.5, evolucao: 3, port: 56.5, mat: 58.3, hist: 32.7, geo: 53.3, ing: 53.8, cie: 35.3, edFin: 66.3, tecIno: 30.0 },
  { turma: "8B", totalAlunos: 29, participacao: 90.9, acertos: 43.4, evolucao: -5, port: 42.8, mat: 35.9, hist: 32.6, geo: 44.8, ing: 50.0, cie: 57.3, edFin: 47.7, tecIno: 43.1 },
  { turma: "6C", totalAlunos: 37, participacao: 92.9, acertos: 40.9, evolucao: 2, port: 50.4, mat: 42.7, hist: 28.0, geo: 45.7, ing: 51.8, cie: 28.5, edFin: 40.6, tecIno: 27.1 },
  { turma: "9B", totalAlunos: 25, participacao: 100.0, acertos: 40.5, evolucao: 3, port: 43.6, mat: 38.2, hist: 38.0, geo: 38.8, ing: 40.8, cie: 46.7, oePort: 41.5, oeMat: 31.5 },
  { turma: "7B", totalAlunos: 31, participacao: 96.8, acertos: 37.8, evolucao: 3, port: 37.3, mat: 41.3, hist: 26.3, geo: 42.7, ing: 40.7, cie: 38.7, edFin: 42.0, tecIno: 34.0 },
  { turma: "7C", totalAlunos: 25, participacao: 88.0, acertos: 34.1, evolucao: 1, port: 36.8, mat: 42.7, hist: 25.9, geo: 31.8, ing: 33.6, cie: 33.2, edFin: 34.5, tecIno: 26.4 },
  { turma: "8A", totalAlunos: 30, participacao: 88.8, acertos: 30.5, evolucao: 0, port: 33.5, mat: 28.9, hist: 21.9, geo: 29.2, ing: 40.7, cie: 40.4, edFin: 25.9, tecIno: 23.7 },
];

export const studentData: Student[] = [
  // 9A
  { turma: "9A", nome: "ADRIAN HENRIQUE RODRIGUES CUNHA", participacao: 100.0, acertos: 72.9, evolucao: 1, port: 80.0, mat: 65.0, hist: 80.0, geo: 80.0, ing: 40.0, cie: 86.7, oePort: 62.5, oeMat: 62.5 },
  { turma: "9A", nome: "ALICIA MEDEIROS GUTZ", participacao: 100.0, acertos: 91.7, evolucao: 20, port: 85.0, mat: 95.0, hist: 90.0, geo: 100.0, ing: 100.0, cie: 100.0, oePort: 75.0, oeMat: 87.5 },
  { turma: "9A", nome: "AMANDA KEROLIN FERREIRA DE SOUZA", participacao: 100.0, acertos: 82.3, evolucao: 4, port: 70.0, mat: 95.0, hist: 70.0, geo: 90.0, ing: 100.0, cie: 100.0, oePort: 50.0, oeMat: 75.0 },
  { turma: "9A", nome: "ANNA ALICE CUNHA OLICINO DE ALMEIDA", participacao: 100.0, acertos: 71.9, evolucao: 16, port: 70.0, mat: 65.0, hist: 90.0, geo: 90.0, ing: 60.0, cie: 73.3, oePort: 62.5, oeMat: 62.5 },
  { turma: "9A", nome: "ARTHUR VERASZTA DE OLIVEIRA", participacao: 100.0, acertos: 63.5, evolucao: 12, port: 45.0, mat: 55.0, hist: 70.0, geo: 100.0, ing: 60.0, cie: 80.0, oePort: 62.5, oeMat: 50.0 },
  { turma: "9A", nome: "CAMILLE VITORIA DE SOUZA AURELIO", participacao: 100.0, acertos: 59.4, evolucao: -12, port: 65.0, mat: 40.0, hist: 80.0, geo: 80.0, ing: 60.0, cie: 66.7, oePort: 37.5, oeMat: 50.0 },
  { turma: "9A", nome: "DAVI VINICIUS OLIVEIRA DA SILVA", participacao: 100.0, acertos: 85.4, evolucao: 8, port: 70.0, mat: 100.0, hist: 90.0, geo: 80.0, ing: 100.0, cie: 100.0, oePort: 62.5, oeMat: 75.0 },
  { turma: "9A", nome: "DEBORA NELMA FONTES BAHIA", participacao: 100.0, acertos: 79.2, evolucao: 13, port: 65.0, mat: 95.0, hist: 70.0, geo: 80.0, ing: 100.0, cie: 86.7, oePort: 62.5, oeMat: 75.0 },
  { turma: "9A", nome: "EMMILY VITÓRIA SILVA SANTOS", participacao: 100.0, acertos: 81.3, evolucao: 8, port: 75.0, mat: 90.0, hist: 70.0, geo: 90.0, ing: 80.0, cie: 86.7, oePort: 62.5, oeMat: 87.5 },
  { turma: "9A", nome: "ÉRICK FELIPE SOARES DE ABREU", participacao: 100.0, acertos: 58.3, evolucao: 24, port: 75.0, mat: 50.0, hist: 50.0, geo: 80.0, ing: 0.0, cie: 73.3, oePort: 62.5, oeMat: 25.0 },
  { turma: "9A", nome: "FELIPE SIQUEIRA LEAL", participacao: 100.0, acertos: 67.7, evolucao: 16, port: 60.0, mat: 50.0, hist: 90.0, geo: 60.0, ing: 100.0, cie: 73.3, oePort: 62.5, oeMat: 87.5 },
  { turma: "9A", nome: "GABRIEL JESUS DE MEDEIROS LIMA", participacao: 100.0, acertos: 28.1, evolucao: -6, port: 25.0, mat: 25.0, hist: 20.0, geo: 10.0, ing: 40.0, cie: 33.3, oePort: 37.5, oeMat: 50.0 },
  { turma: "9A", nome: "GABRIELLY VICTORIA FERREIRA DE OLIVEIRA", participacao: 100.0, acertos: 50.0, evolucao: -7, port: 65.0, mat: 30.0, hist: 70.0, geo: 50.0, ing: 20.0, cie: 66.7, oePort: 50.0, oeMat: 25.0 },
  { turma: "9A", nome: "GIOVANA LIVIA CARNEIRO DE ANDRADE", participacao: 100.0, acertos: 70.8, evolucao: 13, port: 80.0, mat: 70.0, hist: 70.0, geo: 90.0, ing: 40.0, cie: 86.7, oePort: 50.0, oeMat: 37.5 },
  { turma: "9A", nome: "JULIO CESAR MARTINS DE OLIVEIRA", participacao: 100.0, acertos: 69.8, evolucao: 13, port: 65.0, mat: 60.0, hist: 80.0, geo: 80.0, ing: 20.0, cie: 93.3, oePort: 50.0, oeMat: 87.5 },
  { turma: "9A", nome: "KASSIA OLIVEIRA DOS SANTOS", participacao: 100.0, acertos: 78.1, evolucao: 9, port: 75.0, mat: 90.0, hist: 80.0, geo: 80.0, ing: 80.0, cie: 86.7, oePort: 50.0, oeMat: 62.5 },
  { turma: "9A", nome: "KAUAN AUGUSTO DE LIMA FRANCO", participacao: 100.0, acertos: 69.8, evolucao: 15, port: 70.0, mat: 70.0, hist: 80.0, geo: 70.0, ing: 80.0, cie: 66.7, oePort: 50.0, oeMat: 75.0 },
  { turma: "9A", nome: "KETLYN REGINA AGUIAR FERNANDES", participacao: 100.0, acertos: 89.6, evolucao: 17, port: 90.0, mat: 95.0, hist: 90.0, geo: 100.0, ing: 80.0, cie: 93.3, oePort: 87.5, oeMat: 62.5 },
  { turma: "9A", nome: "LEMUEL RODRIGUES LEMOS", participacao: 100.0, acertos: 84.4, evolucao: 11, port: 85.0, mat: 65.0, hist: 80.0, geo: 100.0, ing: 100.0, cie: 100.0, oePort: 87.5, oeMat: 75.0 },
  { turma: "9A", nome: "LEONARDO DE OLIVEIRA PIRES", participacao: 100.0, acertos: 58.3, evolucao: 18, port: 70.0, mat: 55.0, hist: 90.0, geo: 60.0, ing: 20.0, cie: 53.3, oePort: 25.0, oeMat: 62.5 },
  { turma: "9A", nome: "LETICIA RAMALHO DA SILVA", participacao: 100.0, acertos: 83.3, evolucao: 11, port: 95.0, mat: 75.0, hist: 90.0, geo: 80.0, ing: 80.0, cie: 80.0, oePort: 75.0, oeMat: 87.5 },
  { turma: "9A", nome: "LIVYA GOMES PEREIRA", participacao: 100.0, acertos: 57.3, evolucao: 24, port: 70.0, mat: 40.0, hist: 70.0, geo: 80.0, ing: 20.0, cie: 73.3, oePort: 25.0, oeMat: 50.0 },
  { turma: "9A", nome: "LUCAS LEITE DE CARVALHO", participacao: 100.0, acertos: 82.3, evolucao: 9, port: 75.0, mat: 80.0, hist: 60.0, geo: 90.0, ing: 100.0, cie: 100.0, oePort: 62.5, oeMat: 100.0 },
  { turma: "9A", nome: "MATHEUS HENRIQUE MARIANO", participacao: 100.0, acertos: 55.2, evolucao: -13, port: 70.0, mat: 50.0, hist: 70.0, geo: 70.0, ing: 20.0, cie: 46.7, oePort: 25.0, oeMat: 62.5 },
  { turma: "9A", nome: "MICHAEL CHRISTIAN DOS SANTOS BRITO", participacao: 100.0, acertos: 33.3, evolucao: -12, port: 55.0, mat: 40.0, hist: 20.0, geo: 30.0, ing: 20.0, cie: 26.7, oePort: 25.0, oeMat: 12.5 },
  { turma: "9A", nome: "MURILLO JOSE SOUZA FRANCA", participacao: 100.0, acertos: 53.1, evolucao: 2, port: 55.0, mat: 50.0, hist: 30.0, geo: 60.0, ing: 20.0, cie: 93.3, oePort: 12.5, oeMat: 62.5 },
  { turma: "9A", nome: "NATHALY VITORIA AZEVEDO DA SILVA", participacao: 100.0, acertos: 26.0, evolucao: null, port: 30.0, mat: 20.0, hist: 20.0, geo: 10.0, ing: 0.0, cie: 33.3, oePort: 25.0, oeMat: 62.5 },
  { turma: "9A", nome: "PEDRO DANIEL DE OLIVEIRA TEIXEIRA", participacao: 100.0, acertos: 40.6, evolucao: 17, port: 40.0, mat: 30.0, hist: 40.0, geo: 40.0, ing: 20.0, cie: 60.0, oePort: 62.5, oeMat: 25.0 },
  { turma: "9A", nome: "PEDRO HENRIQUE SOARES DOMINGUES", participacao: 100.0, acertos: 39.6, evolucao: 9, port: 40.0, mat: 25.0, hist: 60.0, geo: 40.0, ing: 60.0, cie: 33.3, oePort: 50.0, oeMat: 37.5 },
  { turma: "9A", nome: "REBECA LOPES DOS REIS", participacao: 100.0, acertos: 58.3, evolucao: 17, port: 55.0, mat: 50.0, hist: 40.0, geo: 70.0, ing: 80.0, cie: 73.3, oePort: 87.5, oeMat: 25.0 },
  { turma: "9A", nome: "SAMUEL BORIN VIEIRA", participacao: 100.0, acertos: 82.3, evolucao: 14, port: 80.0, mat: 85.0, hist: 90.0, geo: 100.0, ing: 100.0, cie: 80.0, oePort: 62.5, oeMat: 62.5 },
  { turma: "9A", nome: "VITOR HUGO BARBOSA DA SILVA", participacao: 100.0, acertos: 76.0, evolucao: 15, port: 55.0, mat: 95.0, hist: 60.0, geo: 50.0, ing: 100.0, cie: 86.7, oePort: 75.0, oeMat: 100.0 },
  { turma: "9A", nome: "YURI ARCINI FERNANDES YOSHIDA", participacao: 100.0, acertos: 74.0, evolucao: 8, port: 75.0, mat: 70.0, hist: 70.0, geo: 80.0, ing: 100.0, cie: 93.3, oePort: 50.0, oeMat: 50.0 },

  // 9B
  { turma: "9B", nome: "ADRYAN KAYKE DE SOUZA SILVA", participacao: 100.0, acertos: 38.5, evolucao: 20, port: 55.0, mat: 40.0, hist: 20.0, geo: 60.0, ing: 80.0, cie: 13.3, oePort: 25.0, oeMat: 25.0 },
  { turma: "9B", nome: "ANA VITÓRIA RODRIGUES BARBOSA", participacao: 100.0, acertos: 30.2, evolucao: 14, port: 40.0, mat: 25.0, hist: 30.0, geo: 0.0, ing: 20.0, cie: 40.0, oePort: 37.5, oeMat: 37.5 },
  { turma: "9B", nome: "ANDERSON RODRIGUES DA SILVA", participacao: 100.0, acertos: 34.4, evolucao: 17, port: 40.0, mat: 40.0, hist: 20.0, geo: 40.0, ing: 40.0, cie: 20.0, oePort: 37.5, oeMat: 37.5 },
  { turma: "9B", nome: "ANDRE LUIZ RODRIGUES MENDONCA", participacao: 100.0, acertos: 30.2, evolucao: 4, port: 30.0, mat: 20.0, hist: 10.0, geo: 30.0, ing: 20.0, cie: 40.0, oePort: 50.0, oeMat: 50.0 },
  { turma: "9B", nome: "BRENO FELIPY DE CASTRO RODRIGUES", participacao: 100.0, acertos: 43.8, evolucao: 10, port: 50.0, mat: 45.0, hist: 30.0, geo: 60.0, ing: 20.0, cie: 46.7, oePort: 62.5, oeMat: 12.5 },
  { turma: "9B", nome: "BRUNNO GONCALVES ROCHA", participacao: 100.0, acertos: 27.1, evolucao: 4, port: 35.0, mat: 20.0, hist: 10.0, geo: 20.0, ing: 0.0, cie: 53.3, oePort: 37.5, oeMat: 12.5 },
  { turma: "9B", nome: "ELISEU MONTEIRO DOS SANTOS", participacao: 100.0, acertos: 33.3, evolucao: 5, port: 30.0, mat: 40.0, hist: 50.0, geo: 40.0, ing: 40.0, cie: 20.0, oePort: 37.5, oeMat: 12.5 },
  { turma: "9B", nome: "EWERTON FERREIRA CORRÊA JUNIOR", participacao: 100.0, acertos: 44.8, evolucao: -24, port: 50.0, mat: 40.0, hist: 40.0, geo: 60.0, ing: 20.0, cie: 40.0, oePort: 62.5, oeMat: 37.5 },
  { turma: "9B", nome: "GUILHERME DA SILVA SOUZA", participacao: 100.0, acertos: 44.8, evolucao: 19, port: 60.0, mat: 20.0, hist: 40.0, geo: 40.0, ing: 60.0, cie: 80.0, oePort: 50.0, oeMat: 0.0 },
  { turma: "9B", nome: "JENIFFER VITORIA CORREA", participacao: 100.0, acertos: 53.1, evolucao: 6, port: 60.0, mat: 50.0, hist: 50.0, geo: 70.0, ing: 20.0, cie: 60.0, oePort: 37.5, oeMat: 50.0 },
  { turma: "9B", nome: "JOAO GABRIEL MONTEIRO DOS SANTOS", participacao: 100.0, acertos: 34.4, evolucao: 12, port: 35.0, mat: 55.0, hist: 40.0, geo: 0.0, ing: 60.0, cie: 40.0, oePort: 12.5, oeMat: 12.5 },
  { turma: "9B", nome: "KAROLAINE SOPHIA MARTINS DE OLIVEIRA", participacao: 100.0, acertos: 38.5, evolucao: 11, port: 35.0, mat: 45.0, hist: 30.0, geo: 30.0, ing: 40.0, cie: 33.3, oePort: 62.5, oeMat: 37.5 },
  { turma: "9B", nome: "LUIZ FELIPE DE ALCANTARA PENICHE", participacao: 100.0, acertos: 53.1, evolucao: 13, port: 45.0, mat: 55.0, hist: 60.0, geo: 50.0, ing: 20.0, cie: 80.0, oePort: 50.0, oeMat: 37.5 },
  { turma: "9B", nome: "LUIZ GUSTAVO DIAS DA SILVA", participacao: 100.0, acertos: 41.7, evolucao: -8, port: 35.0, mat: 40.0, hist: 60.0, geo: 40.0, ing: 60.0, cie: 40.0, oePort: 25.0, oeMat: 50.0 },
  { turma: "9B", nome: "LUIZ OTAVIO RIBEIRO DE OLIVEIRA", participacao: 100.0, acertos: 43.8, evolucao: -41, port: 35.0, mat: 30.0, hist: 70.0, geo: 40.0, ing: 100.0, cie: 53.3, oePort: 25.0, oeMat: 37.5 },
  { turma: "9B", nome: "MANUELLE LUANY MORAES ARAÚJO", participacao: 100.0, acertos: 52.1, evolucao: 9, port: 60.0, mat: 40.0, hist: 50.0, geo: 40.0, ing: 40.0, cie: 73.3, oePort: 50.0, oeMat: 50.0 },
  { turma: "9B", nome: "MARCELLY VICTORIA DE ALMEIDA ROCHA", participacao: 100.0, acertos: 44.8, evolucao: 13, port: 55.0, mat: 30.0, hist: 60.0, geo: 30.0, ing: 40.0, cie: 73.3, oePort: 12.5, oeMat: 37.5 },
  { turma: "9B", nome: "MARIA EDUARDA PEREIRA DA SILVA", participacao: 100.0, acertos: 34.4, evolucao: 8, port: 35.0, mat: 50.0, hist: 10.0, geo: 40.0, ing: 40.0, cie: 26.7, oePort: 37.5, oeMat: 25.0 },
  { turma: "9B", nome: "MICAEL LUCAS DA CRUZ FERREIRA", participacao: 100.0, acertos: 65.6, evolucao: 10, port: 80.0, mat: 45.0, hist: 90.0, geo: 80.0, ing: 40.0, cie: 66.7, oePort: 62.5, oeMat: 50.0 },
  { turma: "9B", nome: "RAFAEL AUGUSTO FRANCO", participacao: 100.0, acertos: 30.2, evolucao: 2, port: 35.0, mat: 35.0, hist: 10.0, geo: 20.0, ing: 20.0, cie: 40.0, oePort: 37.5, oeMat: 25.0 },
  { turma: "9B", nome: "ROBERTA ARAUJO DE LIMA", participacao: 100.0, acertos: 32.3, evolucao: 2, port: 20.0, mat: 35.0, hist: 0.0, geo: 40.0, ing: 20.0, cie: 60.0, oePort: 37.5, oeMat: 37.5 },
  { turma: "9B", nome: "STEFANY VITORIA ARAUJO TORQUATO", participacao: 100.0, acertos: 33.3, evolucao: 7, port: 40.0, mat: 35.0, hist: 40.0, geo: 20.0, ing: 20.0, cie: 26.7, oePort: 62.5, oeMat: 12.5 },
  { turma: "9B", nome: "THAYNA APARECIDA RIBEIRO SIMAO", participacao: 100.0, acertos: 25.0, evolucao: -3, port: 20.0, mat: 25.0, hist: 20.0, geo: 30.0, ing: 40.0, cie: 20.0, oePort: 37.5, oeMat: 25.0 },
  { turma: "9B", nome: "TIAGO LUIZ DOMINGUES MARTINS", participacao: 100.0, acertos: 50.0, evolucao: -30, port: 55.0, mat: 50.0, hist: 50.0, geo: 30.0, ing: 100.0, cie: 60.0, oePort: 12.5, oeMat: 50.0 },
  { turma: "9B", nome: "VITOR HENRIQUE DE MELO PEREIRA", participacao: 100.0, acertos: 54.2, evolucao: 4, port: 55.0, mat: 45.0, hist: 60.0, geo: 60.0, ing: 60.0, cie: 60.0, oePort: 75.0, oeMat: 25.0 },

  // 6A
  { turma: "6A", nome: "AMANDA LEONEL MONTEIRO DE RAMOS DE NOBREGA", participacao: 100.0, acertos: 52.5, evolucao: null, port: 70.0, mat: 53.3, hist: 40.0, geo: 50.0, ing: 60.0, cie: 30.0, edFin: 100.0, tecIno: 0.0 },
  { turma: "6A", nome: "ANA CLARA DIAS RIBEIRO", participacao: 100.0, acertos: 55.0, evolucao: 6, port: 60.0, mat: 66.7, hist: 50.0, geo: 30.0, ing: 80.0, cie: 60.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6A", nome: "ANA GABRIELLY DA SILVA COSTA", participacao: 100.0, acertos: 31.3, evolucao: -10, port: 55.0, mat: 20.0, hist: 40.0, geo: 10.0, ing: 0.0, cie: 40.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "6A", nome: "ANA GIULYA MARTINS CARDOSO", participacao: 100.0, acertos: 55.0, evolucao: -5, port: 55.0, mat: 86.7, hist: 40.0, geo: 40.0, ing: 80.0, cie: 40.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "6A", nome: "ANA JULIA DE ALBUQUERQUE GATO", participacao: 100.0, acertos: 56.3, evolucao: -5, port: 70.0, mat: 73.3, hist: 40.0, geo: 80.0, ing: 40.0, cie: 20.0, edFin: 80.0, tecIno: 0.0 },
  { turma: "6A", nome: "ARTHUR COSTA DA SILVA", participacao: 100.0, acertos: 57.5, evolucao: -4, port: 65.0, mat: 66.7, hist: 60.0, geo: 90.0, ing: 60.0, cie: 20.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "6A", nome: "ARTHUR GONCALVES PEREIRA BATISTA", participacao: 37.5, acertos: 45.0, evolucao: 8, port: 45.0, mat: 0, hist: 40.0, geo: 50.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "6A", nome: "AYLA GONCALVES OKAZAKI", participacao: 100.0, acertos: 52.5, evolucao: -15, port: 80.0, mat: 40.0, hist: 50.0, geo: 70.0, ing: 20.0, cie: 40.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "6A", nome: "AYSHA GONCALVES OKAZAKI", participacao: 100.0, acertos: 58.8, evolucao: 0, port: 80.0, mat: 66.7, hist: 30.0, geo: 70.0, ing: 40.0, cie: 30.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "6A", nome: "BRENO WENDEL COSTA MARTINS", participacao: 100.0, acertos: 60.0, evolucao: 3, port: 75.0, mat: 73.3, hist: 30.0, geo: 40.0, ing: 100.0, cie: 60.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6A", nome: "CAIO AUGUSTO MARIANO CUNHA", participacao: 100.0, acertos: 70.0, evolucao: 0, port: 70.0, mat: 86.7, hist: 50.0, geo: 100.0, ing: 100.0, cie: 40.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "6A", nome: "CARLOS EDUARDO RAMALHO DA SILVA", participacao: 100.0, acertos: 51.3, evolucao: -6, port: 60.0, mat: 40.0, hist: 60.0, geo: 50.0, ing: 40.0, cie: 40.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "6A", nome: "CAUÃ DE OLIVEIRA FRANÇA", participacao: 100.0, acertos: 87.5, evolucao: 4, port: 85.0, mat: 100.0, hist: 80.0, geo: 100.0, ing: 100.0, cie: 70.0, edFin: 100.0, tecIno: 60.0 },
  { turma: "6A", nome: "CLARIANA BRAZ DE CARVALHO", participacao: 100.0, acertos: 55.0, evolucao: 5, port: 40.0, mat: 60.0, hist: 50.0, geo: 50.0, ing: 80.0, cie: 60.0, edFin: 80.0, tecIno: 60.0 },
  { turma: "6A", nome: "EMANUELA DE SOUZA GONCALVES", participacao: 100.0, acertos: 42.5, evolucao: -8, port: 50.0, mat: 33.3, hist: 30.0, geo: 30.0, ing: 40.0, cie: 50.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "6A", nome: "ENZO HENRIQUE RIBEIRO DA SILVA", participacao: 100.0, acertos: 35.0, evolucao: -11, port: 60.0, mat: 20.0, hist: 20.0, geo: 30.0, ing: 40.0, cie: 30.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "6A", nome: "ÉRICK RAMOS DOS SANTOS", participacao: 100.0, acertos: 20.0, evolucao: -9, port: 35.0, mat: 26.7, hist: 0.0, geo: 20.0, ing: 20.0, cie: 0.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "6A", nome: "EVELLYN LEAL DANTAS", participacao: 100.0, acertos: 60.0, evolucao: -8, port: 80.0, mat: 40.0, hist: 60.0, geo: 70.0, ing: 100.0, cie: 40.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6A", nome: "GUILHERME RAMALHO DE OLIVEIRA", participacao: 100.0, acertos: 72.5, evolucao: 4, port: 80.0, mat: 80.0, hist: 70.0, geo: 90.0, ing: 100.0, cie: 50.0, edFin: 80.0, tecIno: 0.0 },
  { turma: "6A", nome: "IGOR MEDEIROS GUTZ", participacao: 100.0, acertos: 82.5, evolucao: 0, port: 85.0, mat: 93.3, hist: 80.0, geo: 80.0, ing: 100.0, cie: 80.0, edFin: 100.0, tecIno: 20.0 },
  { turma: "6A", nome: "KAMILLE DE SOUZA MENEZES", participacao: 100.0, acertos: 50.0, evolucao: 10, port: 65.0, mat: 40.0, hist: 80.0, geo: 40.0, ing: 40.0, cie: 30.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "6A", nome: "KRISTOFER EDUARDO SOUZA DOS PASSOS", participacao: 100.0, acertos: 51.3, evolucao: 10, port: 75.0, mat: 53.3, hist: 30.0, geo: 60.0, ing: 60.0, cie: 30.0, edFin: 0.0, tecIno: 60.0 },
  { turma: "6A", nome: "LIVIA MONIQUE DA SILVA TRISTAO", participacao: 100.0, acertos: 63.8, evolucao: 23, port: 85.0, mat: 60.0, hist: 20.0, geo: 70.0, ing: 80.0, cie: 50.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "6A", nome: "LUIZ OCTAVIO PAZ DE LIMA SOUZA", participacao: 100.0, acertos: 73.8, evolucao: 4, port: 75.0, mat: 86.7, hist: 80.0, geo: 60.0, ing: 60.0, cie: 70.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "6A", nome: "LUIZA LOPES", participacao: 37.5, acertos: 82.5, evolucao: 2, port: 90.0, mat: 0, hist: 70.0, geo: 80.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "6A", nome: "MARIANA BORIN VIEIRA", participacao: 100.0, acertos: 91.3, evolucao: 3, port: 90.0, mat: 100.0, hist: 80.0, geo: 100.0, ing: 100.0, cie: 80.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "6A", nome: "MELISSA BRAITBARTH COLACO", participacao: 100.0, acertos: 95.0, evolucao: 9, port: 95.0, mat: 93.3, hist: 100.0, geo: 100.0, ing: 100.0, cie: 100.0, edFin: 100.0, tecIno: 60.0 },
  { turma: "6A", nome: "MIGUEL BRAZ DE CARVALHO", participacao: 100.0, acertos: 68.8, evolucao: 9, port: 60.0, mat: 80.0, hist: 30.0, geo: 100.0, ing: 100.0, cie: 60.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "6A", nome: "MILLENA HEWELYN DA CRUZ FERREIRA", participacao: 100.0, acertos: 66.3, evolucao: 8, port: 80.0, mat: 80.0, hist: 60.0, geo: 60.0, ing: 80.0, cie: 40.0, edFin: 100.0, tecIno: 0.0 },
  { turma: "6A", nome: "MIRELLA DA COSTA ALVES", participacao: 100.0, acertos: 22.5, evolucao: -5, port: 40.0, mat: 13.3, hist: 0.0, geo: 30.0, ing: 40.0, cie: 10.0, edFin: 0.0, tecIno: 40.0 },
  { turma: "6A", nome: "MURILO AUGUSTO DE MORAIS VIEIRA", participacao: 100.0, acertos: 61.3, evolucao: 6, port: 65.0, mat: 73.3, hist: 60.0, geo: 70.0, ing: 80.0, cie: 30.0, edFin: 80.0, tecIno: 20.0 },
  { turma: "6A", nome: "NATHALLY DA SILVA SOUZA", participacao: 100.0, acertos: 85.0, evolucao: 9, port: 90.0, mat: 100.0, hist: 70.0, geo: 80.0, ing: 100.0, cie: 80.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "6A", nome: "POLLYANA SANTOS SILVA", participacao: 100.0, acertos: 56.3, evolucao: 0, port: 55.0, mat: 60.0, hist: 10.0, geo: 70.0, ing: 80.0, cie: 70.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "6A", nome: "RAFAEL LUCAS XAVIER VASSAO", participacao: 100.0, acertos: 77.5, evolucao: -3, port: 80.0, mat: 93.3, hist: 50.0, geo: 90.0, ing: 100.0, cie: 70.0, edFin: 100.0, tecIno: 20.0 },
  { turma: "6A", nome: "VINICIUS XAVIER DE LIMA", participacao: 100.0, acertos: 48.8, evolucao: -6, port: 50.0, mat: 53.3, hist: 50.0, geo: 70.0, ing: 40.0, cie: 40.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "6A", nome: "VITOR HUGO TRISTAO", participacao: 100.0, acertos: 61.3, evolucao: 4, port: 70.0, mat: 60.0, hist: 60.0, geo: 70.0, ing: 80.0, cie: 50.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6A", nome: "YUMI ARCINI FERNANDES YOSHIDA", participacao: 100.0, acertos: 50.0, evolucao: 6, port: 60.0, mat: 46.7, hist: 50.0, geo: 50.0, ing: 100.0, cie: 40.0, edFin: 20.0, tecIno: 20.0 },
  
  // 6B
  { turma: "6B", nome: "ANA CAROLINA MEDEIROS DE LIMA", participacao: 100.0, acertos: 47.5, evolucao: -4, port: 50.0, mat: 73.3, hist: 40.0, geo: 60.0, ing: 60.0, cie: 0.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6B", nome: "ANA JULIA KRANYAK SILVA", participacao: 100.0, acertos: 46.3, evolucao: -18, port: 60.0, mat: 66.7, hist: 20.0, geo: 50.0, ing: 80.0, cie: 20.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "6B", nome: "ARTHUR CORREA LARA DE BRITO", participacao: 100.0, acertos: 60.0, evolucao: 3, port: 70.0, mat: 60.0, hist: 20.0, geo: 80.0, ing: 80.0, cie: 80.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "6B", nome: "AYLLA VICTORIA VEIGA CAMARGO", participacao: 100.0, acertos: 48.8, evolucao: -3, port: 60.0, mat: 40.0, hist: 10.0, geo: 80.0, ing: 40.0, cie: 30.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "6B", nome: "BEATRIZ RIBEIRO ALENCAR", participacao: 100.0, acertos: 60.0, evolucao: -4, port: 70.0, mat: 73.3, hist: 30.0, geo: 50.0, ing: 80.0, cie: 60.0, edFin: 80.0, tecIno: 20.0 },
  { turma: "6B", nome: "CARLOS AUGUSTO MATEUS ALTIERI", participacao: 100.0, acertos: 57.5, evolucao: 2, port: 70.0, mat: 73.3, hist: 50.0, geo: 50.0, ing: 80.0, cie: 30.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6B", nome: "ENZO GABRIEL DA SILVA AGUIAR", participacao: 100.0, acertos: 58.8, evolucao: 14, port: 70.0, mat: 60.0, hist: 70.0, geo: 50.0, ing: 80.0, cie: 40.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6B", nome: "ENZO MIGUEL PEREIRA RODRIGUES AQUINO", participacao: 100.0, acertos: 45.0, evolucao: -3, port: 55.0, mat: 40.0, hist: 30.0, geo: 80.0, ing: 60.0, cie: 10.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6B", nome: "ENZZO GABRYEL DE OLIVEIRA TOBIAS", participacao: 100.0, acertos: 32.5, evolucao: -6, port: 30.0, mat: 46.7, hist: 40.0, geo: 20.0, ing: 20.0, cie: 30.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "6B", nome: "EYSHILA VITORIA ARAUJO DE PONTES AGUIAR", participacao: 100.0, acertos: 50.0, evolucao: null, port: 65.0, mat: 60.0, hist: 20.0, geo: 70.0, ing: 60.0, cie: 10.0, edFin: 80.0, tecIno: 20.0 },
  { turma: "6B", nome: "FELIPE MARTINS DE BRITO", participacao: 100.0, acertos: 56.3, evolucao: 3, port: 40.0, mat: 60.0, hist: 50.0, geo: 70.0, ing: 100.0, cie: 50.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "6B", nome: "GABRIEL FRANCISCO PEREIRA DA SILVA", participacao: 100.0, acertos: 26.3, evolucao: 0, port: 45.0, mat: 33.3, hist: 0.0, geo: 10.0, ing: 20.0, cie: 30.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "6B", nome: "GABRIEL RIBEIRO DOMINGUES", participacao: 100.0, acertos: 73.8, evolucao: 21, port: 75.0, mat: 73.3, hist: 50.0, geo: 90.0, ing: 100.0, cie: 60.0, edFin: 80.0, tecIno: 80.0 },
  { turma: "6B", nome: "GABRIELA RODRIGUES DOS SANTOS", participacao: 100.0, acertos: 55.0, evolucao: -4, port: 65.0, mat: 66.7, hist: 30.0, geo: 50.0, ing: 80.0, cie: 0.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "6B", nome: "GEANE VITORIA DOS SANTOS DA COSTA", participacao: 100.0, acertos: 37.5, evolucao: -9, port: 40.0, mat: 53.3, hist: 30.0, geo: 10.0, ing: 20.0, cie: 30.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "6B", nome: "GUSTAVO ALEXANDRE BARBOSA TRISTAO", participacao: 100.0, acertos: 32.5, evolucao: 11, port: 40.0, mat: 20.0, hist: 20.0, geo: 40.0, ing: 20.0, cie: 40.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "6B", nome: "HELOISA DE SOUZA VIEIRA", participacao: 100.0, acertos: 56.3, evolucao: -6, port: 80.0, mat: 26.7, hist: 50.0, geo: 60.0, ing: 60.0, cie: 50.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "6B", nome: "IAGO MARTINS NUNES SILVA", participacao: 100.0, acertos: 57.5, evolucao: 15, port: 65.0, mat: 60.0, hist: 50.0, geo: 70.0, ing: 80.0, cie: 20.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "6B", nome: "KETHELLYN BIATRIZ DE MOURA SOUZA", participacao: 100.0, acertos: 53.8, evolucao: 5, port: 70.0, mat: 66.7, hist: 30.0, geo: 50.0, ing: 20.0, cie: 30.0, edFin: 60.0, tecIno: 80.0 },
  { turma: "6B", nome: "LOHANNY VITORIA DA SILVA ALMEIDA", participacao: 100.0, acertos: 52.5, evolucao: -3, port: 80.0, mat: 33.3, hist: 40.0, geo: 50.0, ing: 100.0, cie: 20.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "6B", nome: "LUCAS HENRIQUE TRIGO FARIAS", participacao: 100.0, acertos: 32.5, evolucao: 0, port: 40.0, mat: 33.3, hist: 20.0, geo: 30.0, ing: 20.0, cie: 40.0, edFin: 60.0, tecIno: 0.0 },
  { turma: "6B", nome: "MARIA EDUARDA SANTOS ALVES", participacao: 100.0, acertos: 41.3, evolucao: -1, port: 50.0, mat: 66.7, hist: 30.0, geo: 20.0, ing: 20.0, cie: 40.0, edFin: 60.0, tecIno: 0.0 },
  { turma: "6B", nome: "MARIA VITORIA CRISTINA DE SOUZA", participacao: 100.0, acertos: 62.5, evolucao: 20, port: 70.0, mat: 86.7, hist: 40.0, geo: 90.0, ing: 20.0, cie: 50.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6B", nome: "MIELLY ELLYZABETH OLIVEIRA SILVA", participacao: 100.0, acertos: 35.0, evolucao: 0, port: 50.0, mat: 33.3, hist: 0.0, geo: 50.0, ing: 60.0, cie: 20.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "6B", nome: "MIGUEL FERREIRA DE MENDONÇA", participacao: 100.0, acertos: 47.5, evolucao: 3, port: 50.0, mat: 60.0, hist: 20.0, geo: 40.0, ing: 60.0, cie: 70.0, edFin: 60.0, tecIno: 0.0 },
  { turma: "6B", nome: "NICOLE PEDRO DE MORAES", participacao: 100.0, acertos: 55.0, evolucao: -13, port: 70.0, mat: 66.7, hist: 20.0, geo: 50.0, ing: 40.0, cie: 40.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "6B", nome: "PABLO RAUL CORREIA DA SILVA", participacao: 0.0, acertos: 0, evolucao: null, port: 0, mat: 0, hist: 0, geo: 0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "6B", nome: "PAULO HENRIQUE DE QUEIROZ PIRES", participacao: 100.0, acertos: 73.8, evolucao: 14, port: 85.0, mat: 86.7, hist: 50.0, geo: 70.0, ing: 60.0, cie: 60.0, edFin: 100.0, tecIno: 60.0 },
  { turma: "6B", nome: "SAMUEL CAMPOS RIBEIRO", participacao: 100.0, acertos: 43.8, evolucao: 0, port: 35.0, mat: 53.3, hist: 40.0, geo: 70.0, ing: 20.0, cie: 40.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6B", nome: "STHEFANNY RAMOS DE SOUZA", participacao: 100.0, acertos: 53.8, evolucao: 14, port: 50.0, mat: 86.7, hist: 20.0, geo: 70.0, ing: 60.0, cie: 20.0, edFin: 100.0, tecIno: 20.0 },
  { turma: "6B", nome: "THALLYS MIGUEL CORREIA BALDUINO", participacao: 100.0, acertos: 47.5, evolucao: 13, port: 45.0, mat: 60.0, hist: 50.0, geo: 50.0, ing: 20.0, cie: 40.0, edFin: 80.0, tecIno: 20.0 },
  { turma: "6B", nome: "WESLLEY MAYCON AGUIAR DA COSTA", participacao: 100.0, acertos: 41.3, evolucao: 19, port: 25.0, mat: 60.0, hist: 60.0, geo: 30.0, ing: 60.0, cie: 30.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6B", nome: "YGOR AUGUSTTO DA CUNHA RODRIGUES", participacao: 37.5, acertos: 42.5, evolucao: 6, port: 50.0, mat: 0, hist: 20.0, geo: 50.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "6B", nome: "YURI VINICIUS BARBOSA DA SILVA", participacao: 100.0, acertos: 50.0, evolucao: 8, port: 45.0, mat: 86.7, hist: 30.0, geo: 50.0, ing: 40.0, cie: 40.0, edFin: 60.0, tecIno: 20.0 },
  
  // 6C
  { turma: "6C", nome: "ALISSON GABRIEL XAVIER LOPES GONÇALVES", participacao: 100.0, acertos: 36.3, evolucao: 19, port: 35.0, mat: 13.3, hist: 60.0, geo: 50.0, ing: 80.0, cie: 30.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "6C", nome: "ANA CLARA CATALDI AGUIAR", participacao: 100.0, acertos: 46.3, evolucao: 8, port: 75.0, mat: 40.0, hist: 20.0, geo: 70.0, ing: 80.0, cie: 20.0, edFin: 20.0, tecIno: 0.0 },
  { turma: "6C", nome: "ANA FLAVIA DE MORAES MANO BENITES", participacao: 100.0, acertos: 27.5, evolucao: 4, port: 30.0, mat: 26.7, hist: 30.0, geo: 30.0, ing: 40.0, cie: 20.0, edFin: 0.0, tecIno: 40.0 },
  { turma: "6C", nome: "ANA RAPHAELLA PEDROSO DOS SANTOS", participacao: 100.0, acertos: 37.5, evolucao: 20, port: 40.0, mat: 40.0, hist: 10.0, geo: 40.0, ing: 60.0, cie: 50.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "6C", nome: "ANNA JULIA FEITOZA DE OLIVEIRA", participacao: 100.0, acertos: 47.5, evolucao: -6, port: 85.0, mat: 20.0, hist: 40.0, geo: 50.0, ing: 100.0, cie: 30.0, edFin: 0.0, tecIno: 20.0 },
  { turma: "6C", nome: "ANTONY GABRIEL DE CAMPOS DOMINGOS", participacao: 100.0, acertos: 23.8, evolucao: -4, port: 30.0, mat: 13.3, hist: 30.0, geo: 20.0, ing: 60.0, cie: 10.0, edFin: 0.0, tecIno: 40.0 },
  { turma: "6C", nome: "BRENO FRANCISCO SIQUEIRA DOS SANTOS", participacao: 100.0, acertos: 38.8, evolucao: 16, port: 30.0, mat: 40.0, hist: 50.0, geo: 40.0, ing: 40.0, cie: 30.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "6C", nome: "BRENO HENRIQUE DOMINGUES MENDONCA", participacao: 100.0, acertos: 35.0, evolucao: -1, port: 35.0, mat: 60.0, hist: 0.0, geo: 40.0, ing: 20.0, cie: 40.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "6C", nome: "DANIEL FONSECA VICTOR", participacao: 100.0, acertos: 40.0, evolucao: -8, port: 60.0, mat: 20.0, hist: 10.0, geo: 50.0, ing: 80.0, cie: 40.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "6C", nome: "DAVI ANTONIO SIMÃO", participacao: 100.0, acertos: 28.8, evolucao: 1, port: 40.0, mat: 6.7, hist: 30.0, geo: 20.0, ing: 40.0, cie: 40.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "6C", nome: "EMANUELLE VALENTINA DE FREITAS SCHUMACKER", participacao: 100.0, acertos: 47.5, evolucao: -3, port: 60.0, mat: 53.3, hist: 20.0, geo: 50.0, ing: 80.0, cie: 30.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "6C", nome: "ENZO GABRIEL XAVIER DA SILVA", participacao: 100.0, acertos: 37.5, evolucao: -8, port: 45.0, mat: 46.7, hist: 40.0, geo: 70.0, ing: 20.0, cie: 20.0, edFin: 0.0, tecIno: 0.0 },
  { turma: "6C", nome: "ENZO SEBASTIAO LEONCIO DA SILVA SOUZA", participacao: 100.0, acertos: 47.5, evolucao: -3, port: 70.0, mat: 40.0, hist: 50.0, geo: 50.0, ing: 20.0, cie: 30.0, edFin: 80.0, tecIno: 0.0 },
  { turma: "6C", nome: "GABRIEL BARBOSA DOS SANTOS", participacao: 100.0, acertos: 28.8, evolucao: -4, port: 45.0, mat: 20.0, hist: 10.0, geo: 40.0, ing: 0.0, cie: 30.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "6C", nome: "JEREMIAS DOS SANTOS CAMARGO", participacao: 0.0, acertos: 0, evolucao: null, port: 0, mat: 0, hist: 0, geo: 0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "6C", nome: "JOAO GABRIEL PEREIRA RODRIGUES AQUINO", participacao: 100.0, acertos: 57.5, evolucao: 18, port: 75.0, mat: 73.3, hist: 20.0, geo: 60.0, ing: 40.0, cie: 30.0, edFin: 80.0, tecIno: 60.0 },
  { turma: "6C", nome: "JOÃO GUILHERME FERNANDES DA SILVA", participacao: 100.0, acertos: 35.0, evolucao: 8, port: 50.0, mat: 26.7, hist: 20.0, geo: 30.0, ing: 60.0, cie: 30.0, edFin: 60.0, tecIno: 0.0 },
  { turma: "6C", nome: "JOÃO MONTEIRO DOS SANTOS", participacao: 37.5, acertos: 40.0, evolucao: null, port: 55.0, mat: 0, hist: 10.0, geo: 40.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "6C", nome: "JULLIE PEROZZI GONCALVES", participacao: 100.0, acertos: 41.3, evolucao: 16, port: 35.0, mat: 53.3, hist: 20.0, geo: 40.0, ing: 60.0, cie: 20.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "6C", nome: "LEANDRO GUSTAVO CASTRO CUNHA", participacao: 100.0, acertos: 18.8, evolucao: -6, port: 20.0, mat: 20.0, hist: 30.0, geo: 20.0, ing: 20.0, cie: 10.0, edFin: 20.0, tecIno: 0.0 },
  { turma: "6C", nome: "LORRANY HENRIQUESSAO DA SILVA", participacao: 100.0, acertos: 33.8, evolucao: -4, port: 60.0, mat: 33.3, hist: 20.0, geo: 20.0, ing: 40.0, cie: 0.0, edFin: 20.0, tecIno: 60.0 },
  { turma: "6C", nome: "MARCOS DOS SANTOS GOMES", participacao: 0.0, acertos: 0, evolucao: null, port: 0, mat: 0, hist: 0, geo: 0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "6C", nome: "NAOMI ALVES DE AGUIAR", participacao: 100.0, acertos: 25.0, evolucao: -16, port: 15.0, mat: 46.7, hist: 30.0, geo: 20.0, ing: 40.0, cie: 20.0, edFin: 20.0, tecIno: 0.0 },
  { turma: "6C", nome: "PAULA MANUELLA AGUIAR DA SILVA", participacao: 100.0, acertos: 35.0, evolucao: -10, port: 40.0, mat: 46.7, hist: 20.0, geo: 20.0, ing: 0.0, cie: 30.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "6C", nome: "PIETTRO RAMOS DA SILVA", participacao: 100.0, acertos: 51.3, evolucao: 14, port: 45.0, mat: 60.0, hist: 40.0, geo: 80.0, ing: 80.0, cie: 40.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "6C", nome: "RAFAEL VIEIRA DE LIMA", participacao: 100.0, acertos: 76.3, evolucao: 11, port: 70.0, mat: 86.7, hist: 50.0, geo: 100.0, ing: 100.0, cie: 70.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "6C", nome: "RAQUEL CAMPOS DOS REIS SANTANA", participacao: 100.0, acertos: 35.0, evolucao: -6, port: 70.0, mat: 26.7, hist: 20.0, geo: 30.0, ing: 20.0, cie: 20.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "6C", nome: "RICHARD ANDERSON RODRIGUES LUSTOZA DO NASCIMENTO", participacao: 100.0, acertos: 26.3, evolucao: -6, port: 35.0, mat: 26.7, hist: 20.0, geo: 20.0, ing: 40.0, cie: 20.0, edFin: 0.0, tecIno: 40.0 },
  { turma: "6C", nome: "RODRIGO KAUE RODRIGUES DE MEDEIROS", participacao: 100.0, acertos: 48.8, evolucao: 4, port: 45.0, mat: 66.7, hist: 30.0, geo: 50.0, ing: 100.0, cie: 30.0, edFin: 20.0, tecIno: 60.0 },
  { turma: "6C", nome: "ROMERO COELHO NEVES", participacao: 100.0, acertos: 31.3, evolucao: -13, port: 25.0, mat: 46.7, hist: 0.0, geo: 60.0, ing: 60.0, cie: 10.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "6C", nome: "RONNY CESAR SILVEIRA DE OLIVEIRA LOPES", participacao: 100.0, acertos: 28.8, evolucao: -16, port: 45.0, mat: 13.3, hist: 20.0, geo: 40.0, ing: 40.0, cie: 30.0, edFin: 0.0, tecIno: 20.0 },
  { turma: "6C", nome: "SAMUEL BARBOSA DA SILVA", participacao: 100.0, acertos: 67.5, evolucao: 1, port: 75.0, mat: 93.3, hist: 60.0, geo: 90.0, ing: 40.0, cie: 50.0, edFin: 60.0, tecIno: 0.0 },
  { turma: "6C", nome: "SOPHIA DE FATIMA SILVA DE AGUIAR", participacao: 100.0, acertos: 52.5, evolucao: 18, port: 60.0, mat: 73.3, hist: 30.0, geo: 60.0, ing: 80.0, cie: 10.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "6C", nome: "SOPHIA VITÓRIA RAMOS BARBOSA", participacao: 100.0, acertos: 43.8, evolucao: 11, port: 70.0, mat: 46.7, hist: 30.0, geo: 60.0, ing: 40.0, cie: 10.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "6C", nome: "THALLES GONCALVES CALIL", participacao: 100.0, acertos: 61.3, evolucao: 20, port: 65.0, mat: 80.0, hist: 50.0, geo: 40.0, ing: 80.0, cie: 40.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "6C", nome: "VITORIA CRISTINA DA SILVA PEREIRA", participacao: 100.0, acertos: 48.8, evolucao: 4, port: 70.0, mat: 40.0, hist: 20.0, geo: 30.0, ing: 60.0, cie: 60.0, edFin: 80.0, tecIno: 20.0 },
  { turma: "6C", nome: "YOHANA VITORIA MORAES ADAO", participacao: 100.0, acertos: 51.3, evolucao: -13, port: 60.0, mat: 53.3, hist: 40.0, geo: 70.0, ing: 40.0, cie: 20.0, edFin: 80.0, tecIno: 40.0 },
  
  // 7A
  { turma: "7A", nome: "ALINE CRISTINA MEDEIROS DA SILVA", participacao: 100.0, acertos: 68.8, evolucao: 15, port: 75.0, mat: 80.0, hist: 40.0, geo: 80.0, ing: 60.0, cie: 60.0, edFin: 60.0, tecIno: 80.0 },
  { turma: "7A", nome: "ANGELIKA GONCALVES OKAZAKI", participacao: 100.0, acertos: 70.0, evolucao: 6, port: 90.0, mat: 66.7, hist: 40.0, geo: 80.0, ing: 20.0, cie: 90.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "7A", nome: "ANTHONY GABRIEL RIBEIRO CORREA", participacao: 100.0, acertos: 32.5, evolucao: 6, port: 30.0, mat: 40.0, hist: 30.0, geo: 60.0, ing: 20.0, cie: 30.0, edFin: 20.0, tecIno: 0.0 },
  { turma: "7A", nome: "ARTUR LOPES VIEIRA", participacao: 100.0, acertos: 47.5, evolucao: 15, port: 40.0, mat: 60.0, hist: 30.0, geo: 50.0, ing: 60.0, cie: 60.0, edFin: 20.0, tecIno: 60.0 },
  { turma: "7A", nome: "DAVI COUTO DO NASCIMENTO", participacao: 100.0, acertos: 43.8, evolucao: 9, port: 30.0, mat: 53.3, hist: 30.0, geo: 40.0, ing: 80.0, cie: 40.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "7A", nome: "ERIKA DE CASTRO ROMERO", participacao: 100.0, acertos: 52.5, evolucao: -4, port: 70.0, mat: 93.3, hist: 0.0, geo: 50.0, ing: 20.0, cie: 30.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "7A", nome: "GABRIELLA FONSECA DA SILVA", participacao: 100.0, acertos: 56.3, evolucao: -8, port: 40.0, mat: 66.7, hist: 60.0, geo: 60.0, ing: 80.0, cie: 70.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "7A", nome: "GABRIELLA YASMIN SILVA DA ROCHA", participacao: 100.0, acertos: 50.0, evolucao: 8, port: 45.0, mat: 60.0, hist: 30.0, geo: 20.0, ing: 60.0, cie: 70.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "7A", nome: "GABRIELLY DE ABREU PASSOS", participacao: 100.0, acertos: 55.0, evolucao: 4, port: 70.0, mat: 46.7, hist: 30.0, geo: 40.0, ing: 60.0, cie: 70.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "7A", nome: "HELLEN LORENA SANTIAGO PATT", participacao: 100.0, acertos: 47.5, evolucao: 0, port: 35.0, mat: 73.3, hist: 40.0, geo: 70.0, ing: 20.0, cie: 50.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "7A", nome: "HELOIZA PAULOSKI JERONIMO", participacao: 100.0, acertos: 52.5, evolucao: 9, port: 55.0, mat: 73.3, hist: 20.0, geo: 50.0, ing: 80.0, cie: 60.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "7A", nome: "ISIS LOPES VIEIRA", participacao: 100.0, acertos: 51.3, evolucao: -10, port: 60.0, mat: 53.3, hist: 20.0, geo: 60.0, ing: 40.0, cie: 70.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "7A", nome: "JAQUELINE DE SOUZA SANTOS", participacao: 100.0, acertos: 66.3, evolucao: 16, port: 65.0, mat: 86.7, hist: 30.0, geo: 60.0, ing: 60.0, cie: 90.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "7A", nome: "KAUE DE AGUIAR MONTEIRO", participacao: 100.0, acertos: 38.8, evolucao: 19, port: 45.0, mat: 40.0, hist: 20.0, geo: 40.0, ing: 40.0, cie: 50.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "7A", nome: "LAURYN VITORIA RIBEIRO DE CARVALHO", participacao: 100.0, acertos: 41.3, evolucao: 6, port: 40.0, mat: 33.3, hist: 20.0, geo: 50.0, ing: 40.0, cie: 50.0, edFin: 40.0, tecIno: 80.0 },
  { turma: "7A", nome: "LIVIA DE CAMARGO LOPES", participacao: 100.0, acertos: 43.8, evolucao: 1, port: 60.0, mat: 40.0, hist: 20.0, geo: 30.0, ing: 60.0, cie: 40.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "7A", nome: "MATHEUS VERASZTA DE OLIVEIRA", participacao: 100.0, acertos: 70.0, evolucao: 4, port: 65.0, mat: 66.7, hist: 50.0, geo: 80.0, ing: 80.0, cie: 90.0, edFin: 60.0, tecIno: 80.0 },
  { turma: "7A", nome: "MIGUEL RODRIGUES DE SANTANA", participacao: 100.0, acertos: 40.0, evolucao: 13, port: 40.0, mat: 46.7, hist: 10.0, geo: 40.0, ing: 60.0, cie: 50.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "7A", nome: "MOISES DE SOUZA RODRIGUES NETO", participacao: 100.0, acertos: 76.3, evolucao: 15, port: 75.0, mat: 80.0, hist: 70.0, geo: 60.0, ing: 60.0, cie: 80.0, edFin: 100.0, tecIno: 100.0 },
  { turma: "7A", nome: "PAMELA PEREIRA DA COSTA", participacao: 100.0, acertos: 61.3, evolucao: 18, port: 70.0, mat: 60.0, hist: 20.0, geo: 90.0, ing: 80.0, cie: 70.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "7A", nome: "PEDRO HENRIQUE VIEIRA DE LIMA", participacao: 100.0, acertos: 68.8, evolucao: -3, port: 60.0, mat: 100.0, hist: 20.0, geo: 60.0, ing: 80.0, cie: 80.0, edFin: 80.0, tecIno: 80.0 },
  { turma: "7A", nome: "PIETRO LAGO RAMOS", participacao: 100.0, acertos: 73.8, evolucao: 39, port: 85.0, mat: 60.0, hist: 50.0, geo: 80.0, ing: 60.0, cie: 90.0, edFin: 80.0, tecIno: 80.0 },
  { turma: "7A", nome: "RAQUELLI TOMAZ DE SOUZA GOMES", participacao: 100.0, acertos: 35.0, evolucao: 8, port: 45.0, mat: 33.3, hist: 10.0, geo: 30.0, ing: 20.0, cie: 50.0, edFin: 20.0, tecIno: 60.0 },
  { turma: "7A", nome: "RYAN ARAUJO GATO DE OLIVEIRA", participacao: 100.0, acertos: 57.5, evolucao: 1, port: 55.0, mat: 80.0, hist: 10.0, geo: 70.0, ing: 20.0, cie: 70.0, edFin: 80.0, tecIno: 60.0 },
  { turma: "7A", nome: "SIMONE PRADO DA SILVA", participacao: 100.0, acertos: 80.0, evolucao: 18, port: 85.0, mat: 100.0, hist: 40.0, geo: 80.0, ing: 80.0, cie: 80.0, edFin: 100.0, tecIno: 60.0 },
  { turma: "7A", nome: "YAGO FELIPE FELIX SOUZA", participacao: 100.0, acertos: 56.3, evolucao: 9, port: 45.0, mat: 60.0, hist: 20.0, geo: 80.0, ing: 60.0, cie: 80.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "7A", nome: "YUMI ARAUJO RIBEIRO", participacao: 100.0, acertos: 58.8, evolucao: 13, port: 70.0, mat: 73.3, hist: 30.0, geo: 50.0, ing: 60.0, cie: 70.0, edFin: 60.0, tecIno: 20.0 },
  
  // 7B
  { turma: "7B", nome: "ALEXSANDER RICHARDY FERREIRA DIAS", participacao: 100.0, acertos: 23.8, evolucao: -4, port: 25.0, mat: 20.0, hist: 20.0, geo: 20.0, ing: 40.0, cie: 20.0, edFin: 0.0, tecIno: 60.0 },
  { turma: "7B", nome: "ALLAN GABRIEL LOPES DA SILVA", participacao: 100.0, acertos: 37.5, evolucao: 3, port: 25.0, mat: 33.3, hist: 40.0, geo: 40.0, ing: 80.0, cie: 40.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "7B", nome: "ANNA CAROLINA PAZ DE LIMA AQUINO", participacao: 0.0, acertos: 0, evolucao: null, port: 0, mat: 0, hist: 0, geo: 0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "7B", nome: "BIANCA SAMARA DE AGUIAR OLIVEIRA", participacao: 100.0, acertos: 43.8, evolucao: 6, port: 55.0, mat: 26.7, hist: 10.0, geo: 60.0, ing: 60.0, cie: 80.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "7B", nome: "ESTER LARA MACIEL", participacao: 100.0, acertos: 23.8, evolucao: null, port: 25.0, mat: 33.3, hist: 20.0, geo: 30.0, ing: 0.0, cie: 20.0, edFin: 0.0, tecIno: 40.0 },
  { turma: "7B", nome: "FELIPE LUIZ DOMINGUES MARTINS", participacao: 100.0, acertos: 33.8, evolucao: 4, port: 40.0, mat: 33.3, hist: 20.0, geo: 50.0, ing: 40.0, cie: 10.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "7B", nome: "GABRIELE SANTANA DA SILVA", participacao: 100.0, acertos: 27.5, evolucao: -4, port: 20.0, mat: 33.3, hist: 30.0, geo: 20.0, ing: 40.0, cie: 30.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "7B", nome: "GEOVANA ROBERTO DE SOUZA PEREIRA", participacao: 100.0, acertos: 27.5, evolucao: 6, port: 45.0, mat: 20.0, hist: 40.0, geo: 20.0, ing: 0.0, cie: 20.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "7B", nome: "JOÃO LUCAS RODRIGUES SILVA", participacao: 100.0, acertos: 45.0, evolucao: 1, port: 45.0, mat: 33.3, hist: 50.0, geo: 60.0, ing: 60.0, cie: 30.0, edFin: 20.0, tecIno: 80.0 },
  { turma: "7B", nome: "JOAO VICTOR DE MORAIS FERREIRA", participacao: 100.0, acertos: 30.0, evolucao: 4, port: 25.0, mat: 26.7, hist: 30.0, geo: 20.0, ing: 60.0, cie: 20.0, edFin: 40.0, tecIno: 60.0 },
  { turma: "7B", nome: "KAMILLY MARIA FAUSTINO GONCALVES SANTOS DA SILVA", participacao: 100.0, acertos: 37.5, evolucao: 11, port: 35.0, mat: 46.7, hist: 30.0, geo: 30.0, ing: 40.0, cie: 40.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "7B", nome: "KAROLINY ROSA MARQUES", participacao: 100.0, acertos: 37.5, evolucao: 1, port: 30.0, mat: 73.3, hist: 10.0, geo: 10.0, ing: 40.0, cie: 40.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "7B", nome: "KENNY DE SOUZA WALDHELM", participacao: 100.0, acertos: 33.8, evolucao: -9, port: 10.0, mat: 60.0, hist: 50.0, geo: 40.0, ing: 0.0, cie: 40.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "7B", nome: "KEVYN DE SOUZA WALDHELM", participacao: 100.0, acertos: 33.8, evolucao: -4, port: 40.0, mat: 46.7, hist: 10.0, geo: 50.0, ing: 40.0, cie: 20.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "7B", nome: "LORENA FRANCO DE CAMPOS", participacao: 100.0, acertos: 27.5, evolucao: -5, port: 40.0, mat: 13.3, hist: 30.0, geo: 30.0, ing: 40.0, cie: 20.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "7B", nome: "LORRAINE RIBEIRO MARTINS", participacao: 100.0, acertos: 50.0, evolucao: 28, port: 40.0, mat: 66.7, hist: 50.0, geo: 50.0, ing: 60.0, cie: 40.0, edFin: 80.0, tecIno: 20.0 },
  { turma: "7B", nome: "LUANY LAISSA GONCALVES CELESTINO", participacao: 100.0, acertos: 40.0, evolucao: 18, port: 30.0, mat: 46.7, hist: 40.0, geo: 80.0, ing: 40.0, cie: 20.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "7B", nome: "LUCAS DAVID RIBEIRO PRADO", participacao: 100.0, acertos: 61.3, evolucao: 19, port: 75.0, mat: 66.7, hist: 30.0, geo: 50.0, ing: 60.0, cie: 70.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "7B", nome: "LUCAS DE OLIVEIRA CORREA", participacao: 100.0, acertos: 37.5, evolucao: 1, port: 30.0, mat: 46.7, hist: 10.0, geo: 60.0, ing: 0.0, cie: 50.0, edFin: 40.0, tecIno: 60.0 },
  { turma: "7B", nome: "LUCAS EMANUEL FONSECA CORREA", participacao: 100.0, acertos: 37.5, evolucao: 1, port: 35.0, mat: 46.7, hist: 10.0, geo: 40.0, ing: 60.0, cie: 40.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "7B", nome: "LUIZ FABRICIO DE ANDRADE GOMES", participacao: 100.0, acertos: 43.8, evolucao: 3, port: 40.0, mat: 40.0, hist: 40.0, geo: 50.0, ing: 40.0, cie: 70.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "7B", nome: "MARCIO VINICIUS RIBEIRO", participacao: 100.0, acertos: 27.5, evolucao: 0, port: 20.0, mat: 53.3, hist: 20.0, geo: 20.0, ing: 40.0, cie: 20.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "7B", nome: "MARIA EDUARDA RAMOS COSTA", participacao: 100.0, acertos: 36.3, evolucao: 20, port: 35.0, mat: 20.0, hist: 40.0, geo: 60.0, ing: 40.0, cie: 30.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "7B", nome: "MARIA FLOR DE SOUZA AQUINO", participacao: 100.0, acertos: 35.0, evolucao: 1, port: 35.0, mat: 13.3, hist: 20.0, geo: 50.0, ing: 60.0, cie: 30.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "7B", nome: "NICOLLAS CAETANO MARIANO DA SILVA", participacao: 100.0, acertos: 50.0, evolucao: 18, port: 45.0, mat: 60.0, hist: 10.0, geo: 60.0, ing: 40.0, cie: 80.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "7B", nome: "PEDRO JOSE DE LARA SILVA", participacao: 100.0, acertos: 36.3, evolucao: 8, port: 25.0, mat: 60.0, hist: 20.0, geo: 30.0, ing: 0.0, cie: 50.0, edFin: 80.0, tecIno: 20.0 },
  { turma: "7B", nome: "SOPHIA VITORIA DE SOUZA OLIVEIRA", participacao: 100.0, acertos: 33.8, evolucao: 13, port: 30.0, mat: 26.7, hist: 30.0, geo: 40.0, ing: 20.0, cie: 40.0, edFin: 40.0, tecIno: 60.0 },
  { turma: "7B", nome: "TALITA RIBEIRO MARTINS PEREIRA", participacao: 100.0, acertos: 45.0, evolucao: -34, port: 50.0, mat: 53.3, hist: 20.0, geo: 70.0, ing: 40.0, cie: 30.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "7B", nome: "VICTOR GABRIEL RANGEL DA SILVA", participacao: 100.0, acertos: 40.0, evolucao: 1, port: 45.0, mat: 53.3, hist: 10.0, geo: 30.0, ing: 60.0, cie: 30.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "7B", nome: "YASMIN EVA AGUIAR DA SILVA", participacao: 100.0, acertos: 62.5, evolucao: 1, port: 80.0, mat: 53.3, hist: 30.0, geo: 70.0, ing: 80.0, cie: 90.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "7B", nome: "YASMIN FARIA PEREIRA", participacao: 100.0, acertos: 36.3, evolucao: 4, port: 45.0, mat: 33.3, hist: 20.0, geo: 40.0, ing: 40.0, cie: 40.0, edFin: 40.0, tecIno: 20.0 },
  
  // 7C
  { turma: "7C", nome: "ADRYEL OTAVIO DE LIMA PEREIRA", participacao: 100.0, acertos: 27.5, evolucao: -6, port: 35.0, mat: 26.7, hist: 20.0, geo: 30.0, ing: 0.0, cie: 20.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "7C", nome: "ALLAN PATRICK KUZNIER BRAGA", participacao: 100.0, acertos: 31.3, evolucao: 8, port: 15.0, mat: 46.7, hist: 40.0, geo: 50.0, ing: 20.0, cie: 30.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "7C", nome: "DAVI LUCAS AGUIAR SILVA DE SOUZA", participacao: 100.0, acertos: 30.0, evolucao: -3, port: 25.0, mat: 26.7, hist: 20.0, geo: 30.0, ing: 60.0, cie: 30.0, edFin: 20.0, tecIno: 60.0 },
  { turma: "7C", nome: "EMANUELLY CORREIA RODRIGUES", participacao: 0.0, acertos: 0, evolucao: null, port: 0, mat: 0, hist: 0, geo: 0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "7C", nome: "EMERSON CELESTINO DE SOUZA", participacao: 62.5, acertos: 30.0, evolucao: -4, port: 0, mat: 33.3, hist: 0, geo: 0, ing: 40.0, cie: 40.0, edFin: 20.0, tecIno: 0.0 },
  { turma: "7C", nome: "FERNANDO DE OLIVEIRA TEIXEIRA", participacao: 100.0, acertos: 21.3, evolucao: -10, port: 15.0, mat: 46.7, hist: 0.0, geo: 20.0, ing: 20.0, cie: 20.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "7C", nome: "GABRIEL NEVES PEREIRA", participacao: 37.5, acertos: 27.5, evolucao: 4, port: 20.0, mat: 0, hist: 40.0, geo: 30.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "7C", nome: "GABRIELLY FORATI DE OLIVEIRA", participacao: 100.0, acertos: 41.3, evolucao: 8, port: 50.0, mat: 60.0, hist: 30.0, geo: 30.0, ing: 40.0, cie: 30.0, edFin: 60.0, tecIno: 0.0 },
  { turma: "7C", nome: "GEOVANNA CASTRO PENTEADO", participacao: 100.0, acertos: 43.8, evolucao: 11, port: 65.0, mat: 46.7, hist: 30.0, geo: 50.0, ing: 60.0, cie: 10.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "7C", nome: "ISABELLA PEREIRA DOS SANTOS", participacao: 100.0, acertos: 28.8, evolucao: 5, port: 40.0, mat: 26.7, hist: 30.0, geo: 10.0, ing: 40.0, cie: 30.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "7C", nome: "IVONE VITORIA RAMOS DE AGUIAR", participacao: 100.0, acertos: 27.5, evolucao: -1, port: 25.0, mat: 40.0, hist: 20.0, geo: 30.0, ing: 20.0, cie: 20.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "7C", nome: "JOSE LUCAS DE SOUZA PEREIRA", participacao: 100.0, acertos: 30.0, evolucao: 4, port: 35.0, mat: 26.7, hist: 30.0, geo: 10.0, ing: 60.0, cie: 30.0, edFin: 0.0, tecIno: 60.0 },
  { turma: "7C", nome: "KAMILLY VITORIA SILVA DE OLIVEIRA", participacao: 100.0, acertos: 36.3, evolucao: -1, port: 55.0, mat: 40.0, hist: 20.0, geo: 30.0, ing: 40.0, cie: 0.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "7C", nome: "KAUANY CRISTINA RODRIGUES CAMPOS", participacao: 100.0, acertos: 25.0, evolucao: -5, port: 15.0, mat: 40.0, hist: 30.0, geo: 10.0, ing: 0.0, cie: 40.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "7C", nome: "KAUE HENRIQUE ALVES RODRIGUES", participacao: 100.0, acertos: 42.5, evolucao: 3, port: 45.0, mat: 46.7, hist: 50.0, geo: 30.0, ing: 60.0, cie: 40.0, edFin: 60.0, tecIno: 0.0 },
  { turma: "7C", nome: "KENNEDY VICTOR RODRIGUES PEREIRA", participacao: 100.0, acertos: 33.8, evolucao: 6, port: 35.0, mat: 46.7, hist: 20.0, geo: 40.0, ing: 0.0, cie: 20.0, edFin: 20.0, tecIno: 80.0 },
  { turma: "7C", nome: "MARIA EDUARDA DA COSTA RIBEIRO", participacao: 37.5, acertos: 32.5, evolucao: -11, port: 30.0, mat: 0, hist: 40.0, geo: 30.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "7C", nome: "MATEUS FERNANDO DOS SANTOS", participacao: 100.0, acertos: 37.5, evolucao: -5, port: 35.0, mat: 40.0, hist: 20.0, geo: 40.0, ing: 20.0, cie: 60.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "7C", nome: "MIKAELY EDUARDA APARECIDA DA SILVA PINHEIRO", participacao: 100.0, acertos: 45.0, evolucao: 3, port: 55.0, mat: 60.0, hist: 10.0, geo: 60.0, ing: 20.0, cie: 60.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "7C", nome: "PEDRO HENRIQUE DE AGUIAR", participacao: 100.0, acertos: 21.3, evolucao: -3, port: 20.0, mat: 40.0, hist: 20.0, geo: 0.0, ing: 20.0, cie: 30.0, edFin: 20.0, tecIno: 0.0 },
  { turma: "7C", nome: "RAFAEL FELIPE MEDEIROS DE OLIVEIRA", participacao: 100.0, acertos: 40.0, evolucao: 23, port: 40.0, mat: 40.0, hist: 20.0, geo: 30.0, ing: 60.0, cie: 30.0, edFin: 60.0, tecIno: 80.0 },
  { turma: "7C", nome: "VICTOR XIMENDES BOSSHARD GARCIA", participacao: 100.0, acertos: 46.3, evolucao: 16, port: 45.0, mat: 60.0, hist: 30.0, geo: 40.0, ing: 60.0, cie: 60.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "7C", nome: "VITORIA THÔBIAS DOMINGUES", participacao: 100.0, acertos: 66.3, evolucao: 9, port: 80.0, mat: 73.3, hist: 30.0, geo: 70.0, ing: 60.0, cie: 80.0, edFin: 40.0, tecIno: 60.0 },
  { turma: "7C", nome: "YURI ADRIAN DOS SANTOS DOMINGUES", participacao: 62.5, acertos: 27.5, evolucao: -13, port: 0, mat: 40.0, hist: 0, geo: 0, ing: 0.0, cie: 40.0, edFin: 20.0, tecIno: 0.0 },
  { turma: "7C", nome: "YURI ALVES SILVA DUTRA", participacao: 100.0, acertos: 25.0, evolucao: -10, port: 30.0, mat: 33.3, hist: 20.0, geo: 30.0, ing: 40.0, cie: 10.0, edFin: 0.0, tecIno: 20.0 },
  
  // 8A
  { turma: "8A", nome: "DAVID LUCAS LEOCADIO", participacao: 100.0, acertos: 28.8, evolucao: 3, port: 30.0, mat: 33.3, hist: 10.0, geo: 10.0, ing: 60.0, cie: 40.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "8A", nome: "DERICK ANDREWS JESUS CASTRO ALMEIDA", participacao: 37.5, acertos: 17.5, evolucao: -13, port: 25.0, mat: 0, hist: 10.0, geo: 10.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "8A", nome: "DIEGO RENAN COSTA DA SILVA", participacao: 100.0, acertos: 27.5, evolucao: -49, port: 30.0, mat: 20.0, hist: 30.0, geo: 40.0, ing: 40.0, cie: 20.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "8A", nome: "ENZO LUCIDIO MARTINS MANO", participacao: 62.5, acertos: 20.0, evolucao: -7, port: 0, mat: 20.0, hist: 0, geo: 0, ing: 20.0, cie: 0.0, edFin: 20.0, tecIno: 60.0 },
  { turma: "8A", nome: "FRANCINNY SANTOS PEDROSO", participacao: 100.0, acertos: 28.8, evolucao: 5, port: 35.0, mat: 26.7, hist: 10.0, geo: 30.0, ing: 0.0, cie: 30.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "8A", nome: "GIOVANA RODRIGUES CUNHA", participacao: 37.5, acertos: 30.0, evolucao: -5, port: 35.0, mat: 0, hist: 20.0, geo: 30.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "8A", nome: "ISABELLA CRISTINA DE SOUZA LACERDA", participacao: 100.0, acertos: 41.3, evolucao: 13, port: 50.0, mat: 46.7, hist: 10.0, geo: 20.0, ing: 20.0, cie: 80.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "8A", nome: "ISABELLY DE BARROS RODRIGUES", participacao: 62.5, acertos: 32.5, evolucao: 6, port: 0, mat: 20.0, hist: 0, geo: 0, ing: 60.0, cie: 50.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "8A", nome: "IZABELY VITORIA COSTA MOTTA", participacao: 62.5, acertos: 20.0, evolucao: -5, port: 0, mat: 13.3, hist: 0, geo: 0, ing: 20.0, cie: 40.0, edFin: 0.0, tecIno: 20.0 },
  { turma: "8A", nome: "JENNIFER ARIELI ALVES DE LIMA", participacao: 100.0, acertos: 27.5, evolucao: -12, port: 30.0, mat: 33.3, hist: 0.0, geo: 10.0, ing: 60.0, cie: 30.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "8A", nome: "LOHANY VITORIA MORAES ADAO", participacao: 100.0, acertos: 41.3, evolucao: 15, port: 50.0, mat: 33.3, hist: 60.0, geo: 50.0, ing: 40.0, cie: 40.0, edFin: 0.0, tecIno: 20.0 },
  { turma: "8A", nome: "LUAN CAVALCANTE HENRIQUE", participacao: 100.0, acertos: 35.0, evolucao: 7, port: 25.0, mat: 33.3, hist: 20.0, geo: 40.0, ing: 60.0, cie: 60.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "8A", nome: "LUCAS EDUARDO BARBOSA DOS SANTOS", participacao: 62.5, acertos: 27.5, evolucao: 3, port: 0, mat: 26.7, hist: 0, geo: 0, ing: 20.0, cie: 40.0, edFin: 0.0, tecIno: 40.0 },
  { turma: "8A", nome: "LUIZ GUSTAVO SANTANA FERREIRA", participacao: 100.0, acertos: 23.8, evolucao: -4, port: 10.0, mat: 40.0, hist: 40.0, geo: 30.0, ing: 20.0, cie: 20.0, edFin: 0.0, tecIno: 20.0 },
  { turma: "8A", nome: "MARIA EDUARDA DOMINGUES DE SOUZA", participacao: 100.0, acertos: 32.5, evolucao: 8, port: 30.0, mat: 33.3, hist: 40.0, geo: 50.0, ing: 40.0, cie: 20.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "8A", nome: "MARIA SOPHIA RIBEIRO DE ANDRADE", participacao: 100.0, acertos: 38.8, evolucao: 13, port: 40.0, mat: 33.3, hist: 20.0, geo: 50.0, ing: 40.0, cie: 60.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "8A", nome: "MARIA THEREZA RIBEIRO RUIS DE CARVALHO", participacao: 37.5, acertos: 42.5, evolucao: 10, port: 45.0, mat: 0, hist: 30.0, geo: 50.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "8A", nome: "MATHEUS HENRIQUE AQUINO DE LIMA", participacao: 100.0, acertos: 17.5, evolucao: -13, port: 5.0, mat: 20.0, hist: 0.0, geo: 40.0, ing: 40.0, cie: 30.0, edFin: 0.0, tecIno: 20.0 },
  { turma: "8A", nome: "MHARYANA DE OLIVEIRA TOBIAS", participacao: 100.0, acertos: 27.5, evolucao: -13, port: 35.0, mat: 33.3, hist: 30.0, geo: 10.0, ing: 20.0, cie: 20.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "8A", nome: "NICOLAS CUNHA DE ANDRADE", participacao: 100.0, acertos: 33.8, evolucao: 11, port: 40.0, mat: 20.0, hist: 20.0, geo: 50.0, ing: 20.0, cie: 40.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "8A", nome: "NICOLAS VASSAO DEVERAS SILVA", participacao: 100.0, acertos: 33.8, evolucao: 5, port: 35.0, mat: 26.7, hist: 30.0, geo: 30.0, ing: 40.0, cie: 50.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "8A", nome: "PABLO RODRIGUES DA SILVA", participacao: 100.0, acertos: 25.0, evolucao: -3, port: 15.0, mat: 33.3, hist: 10.0, geo: 10.0, ing: 40.0, cie: 50.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "8A", nome: "PEDRO LEONARDO DE CASTRO CUNHA", participacao: 100.0, acertos: 28.8, evolucao: 2, port: 25.0, mat: 26.7, hist: 20.0, geo: 30.0, ing: 40.0, cie: 50.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "8A", nome: "PHELIPE ANDERSON CAMPOS CARDOSO", participacao: 100.0, acertos: 35.0, evolucao: 7, port: 25.0, mat: 33.3, hist: 30.0, geo: 10.0, ing: 60.0, cie: 70.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "8A", nome: "RUAN GUILHERME ROCHA PINTO", participacao: 100.0, acertos: 37.5, evolucao: 3, port: 40.0, mat: 60.0, hist: 10.0, geo: 30.0, ing: 60.0, cie: 60.0, edFin: 0.0, tecIno: 0.0 },
  { turma: "8A", nome: "SAMUEL FRANCISCO BARBOSA", participacao: 100.0, acertos: 27.5, evolucao: null, port: 45.0, mat: 26.7, hist: 30.0, geo: 10.0, ing: 40.0, cie: 10.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "8A", nome: "SAMUEL MONTEIRO DOS SANTOS", participacao: 100.0, acertos: 35.0, evolucao: 12, port: 30.0, mat: 40.0, hist: 30.0, geo: 30.0, ing: 60.0, cie: 50.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "8A", nome: "THOMAS DE SOUSA DOMINGUES", participacao: 100.0, acertos: 40.0, evolucao: -3, port: 40.0, mat: 13.3, hist: 40.0, geo: 40.0, ing: 100.0, cie: 60.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "8A", nome: "VITORIA CRISTINA HILARIO DE OLIVEIRA", participacao: 100.0, acertos: 25.0, evolucao: 1, port: 65.0, mat: 0.0, hist: 10.0, geo: 20.0, ing: 20.0, cie: 20.0, edFin: 0.0, tecIno: 20.0 },
  { turma: "8A", nome: "WALLACE DE OLIVEIRA SOUZA", participacao: 100.0, acertos: 32.5, evolucao: 12, port: 35.0, mat: 33.3, hist: 10.0, geo: 30.0, ing: 60.0, cie: 50.0, edFin: 40.0, tecIno: 0.0 },

  // 8B
  { turma: "8B", nome: "ALANA MONTEIRO SARAIVA", participacao: 100.0, acertos: 77.5, evolucao: -1, port: 70.0, mat: 86.7, hist: 10.0, geo: 90.0, ing: 100.0, cie: 100.0, edFin: 100.0, tecIno: 100.0 },
  { turma: "8B", nome: "ANA BEATRIZ DE SOUSA WALDHELM", participacao: 37.5, acertos: 62.5, evolucao: 2, port: 70.0, mat: 0, hist: 30.0, geo: 80.0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "8B", nome: "ANA BEATRIZ RODRIGUES GUEDES", participacao: 100.0, acertos: 38.8, evolucao: 2, port: 40.0, mat: 26.7, hist: 30.0, geo: 40.0, ing: 0.0, cie: 40.0, edFin: 80.0, tecIno: 80.0 },
  { turma: "8B", nome: "ANA CLARA ALVES TRIGO", participacao: 100.0, acertos: 60.0, evolucao: -25, port: 40.0, mat: 73.3, hist: 60.0, geo: 40.0, ing: 60.0, cie: 70.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "8B", nome: "ANDRÉ LUIZ CAMARGO DA SILVA", participacao: 0.0, acertos: 0, evolucao: null, port: 0, mat: 0, hist: 0, geo: 0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "8B", nome: "ANTONIO CARLOS KRANYAK SILVA", participacao: 100.0, acertos: 42.5, evolucao: -1, port: 40.0, mat: 33.3, hist: 40.0, geo: 30.0, ing: 80.0, cie: 70.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "8B", nome: "ARTHUR DEMILSON SOUZA DE LIMA", participacao: 100.0, acertos: 46.3, evolucao: 6, port: 55.0, mat: 33.3, hist: 40.0, geo: 60.0, ing: 40.0, cie: 30.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "8B", nome: "BEATRIZ DE ANDRADE GOMES", participacao: 100.0, acertos: 46.3, evolucao: -30, port: 45.0, mat: 53.3, hist: 20.0, geo: 60.0, ing: 80.0, cie: 40.0, edFin: 20.0, tecIno: 60.0 },
  { turma: "8B", nome: "CARLOS EDUARDO DOMINGUES DA SILVA", participacao: 100.0, acertos: 80.0, evolucao: 12, port: 90.0, mat: 86.7, hist: 30.0, geo: 100.0, ing: 80.0, cie: 90.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "8B", nome: "DEBORA DOS SANTOS MARQUES", participacao: 100.0, acertos: 40.0, evolucao: -32, port: 30.0, mat: 13.3, hist: 30.0, geo: 70.0, ing: 40.0, cie: 60.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "8B", nome: "FERNANDO VINICIUS SOUZA GOMES", participacao: 0.0, acertos: 0, evolucao: null, port: 0, mat: 0, hist: 0, geo: 0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "8B", nome: "FRANCISCO RICARDO TORRALVO DE ARRUDA", participacao: 100.0, acertos: 72.5, evolucao: 10, port: 65.0, mat: 66.7, hist: 50.0, geo: 70.0, ing: 100.0, cie: 90.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "8B", nome: "HELOYSE RAYARA CORREIA ELIAS", participacao: 100.0, acertos: 45.0, evolucao: 3, port: 55.0, mat: 20.0, hist: 40.0, geo: 60.0, ing: 40.0, cie: 40.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "8B", nome: "ISAAC FERNANDO VASSAO DOS SANTOS", participacao: 100.0, acertos: 25.0, evolucao: -3, port: 15.0, mat: 26.7, hist: 40.0, geo: 20.0, ing: 20.0, cie: 40.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "8B", nome: "KAIO DE SOUZA GOMES", participacao: 100.0, acertos: 25.0, evolucao: -5, port: 20.0, mat: 13.3, hist: 20.0, geo: 20.0, ing: 40.0, cie: 50.0, edFin: 20.0, tecIno: 40.0 },
  { turma: "8B", nome: "KEROLLIN VICTORIA RODRIGUES PEREIRA", participacao: 100.0, acertos: 33.8, evolucao: -3, port: 40.0, mat: 26.7, hist: 20.0, geo: 30.0, ing: 40.0, cie: 60.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "8B", nome: "LEONARDO DOMINGUES DAMASIO", participacao: 100.0, acertos: 36.3, evolucao: 10, port: 25.0, mat: 26.7, hist: 20.0, geo: 20.0, ing: 60.0, cie: 80.0, edFin: 20.0, tecIno: 80.0 },
  { turma: "8B", nome: "LUIZ FONTES SANCHES GARCIA NETO", participacao: 100.0, acertos: 35.0, evolucao: 0, port: 40.0, mat: 26.7, hist: 50.0, geo: 10.0, ing: 60.0, cie: 70.0, edFin: 0.0, tecIno: 0.0 },
  { turma: "8B", nome: "MARCOS ANTONIO SOARES DOS SANTOS", participacao: 100.0, acertos: 43.8, evolucao: 10, port: 40.0, mat: 46.7, hist: 40.0, geo: 50.0, ing: 20.0, cie: 60.0, edFin: 20.0, tecIno: 60.0 },
  { turma: "8B", nome: "MARIA CLARA ANTUNES PEREIRA", participacao: 100.0, acertos: 43.8, evolucao: 10, port: 45.0, mat: 33.3, hist: 40.0, geo: 50.0, ing: 60.0, cie: 50.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "8B", nome: "MARIA EDUARDA DOS SANTOS PEREIRA", participacao: 100.0, acertos: 23.8, evolucao: -18, port: 35.0, mat: 13.3, hist: 10.0, geo: 20.0, ing: 20.0, cie: 40.0, edFin: 20.0, tecIno: 20.0 },
  { turma: "8B", nome: "MATHEUS RIBEIRO DA SILVA", participacao: 100.0, acertos: 25.0, evolucao: -2, port: 20.0, mat: 13.3, hist: 20.0, geo: 40.0, ing: 20.0, cie: 40.0, edFin: 60.0, tecIno: 0.0 },
  { turma: "8B", nome: "NICOLY DOS SANTOS TOBIAS", participacao: 100.0, acertos: 31.3, evolucao: -45, port: 40.0, mat: 20.0, hist: 10.0, geo: 10.0, ing: 40.0, cie: 60.0, edFin: 40.0, tecIno: 40.0 },
  { turma: "8B", nome: "RAFAELA DA SILVA", participacao: 100.0, acertos: 41.3, evolucao: -26, port: 60.0, mat: 26.7, hist: 10.0, geo: 30.0, ing: 100.0, cie: 70.0, edFin: 0.0, tecIno: 20.0 },
  { turma: "8B", nome: "RUAN GUILHERME DE ALMEIDA RIBEIRO", participacao: 100.0, acertos: 50.0, evolucao: 21, port: 40.0, mat: 66.7, hist: 30.0, geo: 50.0, ing: 60.0, cie: 50.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "8B", nome: "RYAN CORREIA SANTOS", participacao: 100.0, acertos: 31.3, evolucao: 2, port: 40.0, mat: 20.0, hist: 60.0, geo: 30.0, ing: 0.0, cie: 20.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "8B", nome: "STEFANNY VITORIA XAVIER SANTOS", participacao: 100.0, acertos: 42.5, evolucao: -50, port: 45.0, mat: 33.3, hist: 60.0, geo: 30.0, ing: 20.0, cie: 50.0, edFin: 40.0, tecIno: 60.0 },
  { turma: "8B", nome: "VITORIA APARECIDA DE AQUINO VASSAO", participacao: 100.0, acertos: 27.5, evolucao: -4, port: 30.0, mat: 20.0, hist: 20.0, geo: 40.0, ing: 20.0, cie: 40.0, edFin: 40.0, tecIno: 0.0 },
  { turma: "8B", nome: "YASMIN COSTA MARTINS", participacao: 100.0, acertos: 45.0, evolucao: 15, port: 20.0, mat: 26.7, hist: 50.0, geo: 60.0, ing: 100.0, cie: 80.0, edFin: 20.0, tecIno: 60.0 },

  // 8C
  { turma: "8C", nome: "ANA JULIA SANTANA FERREIRA", participacao: 100.0, acertos: 75.0, evolucao: -6, port: 55.0, mat: 86.7, hist: 70.0, geo: 100.0, ing: 80.0, cie: 60.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "8C", nome: "BEATRIZ NATALY APARECIDA DA CRUZ", participacao: 100.0, acertos: 80.0, evolucao: 9, port: 75.0, mat: 60.0, hist: 80.0, geo: 100.0, ing: 100.0, cie: 80.0, edFin: 80.0, tecIno: 100.0 },
  { turma: "8C", nome: "BEATRIZ ROCHA DA SILVA", participacao: 100.0, acertos: 53.8, evolucao: -7, port: 55.0, mat: 26.7, hist: 50.0, geo: 60.0, ing: 100.0, cie: 70.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "8C", nome: "CALEU DE FREITAS ALVES", participacao: 100.0, acertos: 52.5, evolucao: -2, port: 35.0, mat: 60.0, hist: 20.0, geo: 50.0, ing: 80.0, cie: 80.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "8C", nome: "CARLOS DANIEL LEMOS DOS SANTOS", participacao: 100.0, acertos: 56.3, evolucao: -1, port: 45.0, mat: 46.7, hist: 40.0, geo: 80.0, ing: 100.0, cie: 70.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "8C", nome: "CARLOS EDUARDO DOS SANTOS NERIS", participacao: 100.0, acertos: 55.0, evolucao: 8, port: 45.0, mat: 73.3, hist: 10.0, geo: 70.0, ing: 60.0, cie: 60.0, edFin: 60.0, tecIno: 80.0 },
  { turma: "8C", nome: "EMANUELLE SUNTACK DOS SANTOS", participacao: 100.0, acertos: 51.3, evolucao: 1, port: 65.0, mat: 26.7, hist: 30.0, geo: 70.0, ing: 80.0, cie: 70.0, edFin: 40.0, tecIno: 20.0 },
  { turma: "8C", nome: "FABRICIO RODRIGUES BRAGA JAQUES", participacao: 100.0, acertos: 73.8, evolucao: -10, port: 65.0, mat: 66.7, hist: 50.0, geo: 100.0, ing: 80.0, cie: 80.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "8C", nome: "GUILHERME SILVA RIOS", participacao: 100.0, acertos: 85.0, evolucao: 8, port: 70.0, mat: 86.7, hist: 90.0, geo: 90.0, ing: 100.0, cie: 80.0, edFin: 100.0, tecIno: 100.0 },
  { turma: "8C", nome: "HELOISA MUNIZ SILVA RIBEIRO", participacao: 100.0, acertos: 72.5, evolucao: -10, port: 55.0, mat: 86.7, hist: 30.0, geo: 100.0, ing: 80.0, cie: 90.0, edFin: 60.0, tecIno: 100.0 },
  { turma: "8C", nome: "HYGOR GABRIEL CORREA SANTOS", participacao: 100.0, acertos: 41.3, evolucao: 3, port: 45.0, mat: 40.0, hist: 10.0, geo: 10.0, ing: 100.0, cie: 70.0, edFin: 60.0, tecIno: 20.0 },
  { turma: "8C", nome: "ISABELA DOS SANTOS VEGENER", participacao: 100.0, acertos: 73.8, evolucao: -1, port: 60.0, mat: 80.0, hist: 70.0, geo: 70.0, ing: 40.0, cie: 100.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "8C", nome: "ISABELLY DA SILVA VIEIRA", participacao: 100.0, acertos: 83.8, evolucao: 4, port: 90.0, mat: 60.0, hist: 90.0, geo: 90.0, ing: 100.0, cie: 100.0, edFin: 80.0, tecIno: 60.0 },
  { turma: "8C", nome: "JAMILY LUIZA MOREIRA DA SILVA", participacao: 100.0, acertos: 70.0, evolucao: -11, port: 75.0, mat: 80.0, hist: 30.0, geo: 90.0, ing: 60.0, cie: 70.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "8C", nome: "JESSICA ARAUJO DE LIMA", participacao: 100.0, acertos: 57.5, evolucao: 21, port: 35.0, mat: 53.3, hist: 70.0, geo: 80.0, ing: 80.0, cie: 50.0, edFin: 40.0, tecIno: 100.0 },
  { turma: "8C", nome: "JOAO GABRIEL PEREIRA SILVA", participacao: 100.0, acertos: 42.5, evolucao: -37, port: 45.0, mat: 20.0, hist: 30.0, geo: 50.0, ing: 40.0, cie: 70.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "8C", nome: "JULIA VITÓRIA LOPES CORDEIRO", participacao: 100.0, acertos: 72.5, evolucao: -12, port: 75.0, mat: 66.7, hist: 60.0, geo: 80.0, ing: 100.0, cie: 80.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "8C", nome: "KEMELLY CELESTINO BRAGA", participacao: 100.0, acertos: 92.5, evolucao: 18, port: 85.0, mat: 93.3, hist: 90.0, geo: 100.0, ing: 100.0, cie: 100.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "8C", nome: "LAVINIA BURGHI GONCALVES", participacao: 100.0, acertos: 78.8, evolucao: -5, port: 80.0, mat: 86.7, hist: 40.0, geo: 100.0, ing: 60.0, cie: 70.0, edFin: 100.0, tecIno: 100.0 },
  { turma: "8C", nome: "LUANY RODRIGUES DE OLIVEIRA", participacao: 100.0, acertos: 67.5, evolucao: 21, port: 70.0, mat: 60.0, hist: 70.0, geo: 80.0, ing: 80.0, cie: 70.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "8C", nome: "LUARA RAMOS LOPES", participacao: 100.0, acertos: 62.5, evolucao: 3, port: 50.0, mat: 73.3, hist: 80.0, geo: 70.0, ing: 40.0, cie: 60.0, edFin: 60.0, tecIno: 60.0 },
  { turma: "8C", nome: "LUCAS LEMOS SANTOS DE ALMEIDA", participacao: 100.0, acertos: 26.3, evolucao: 2, port: 20.0, mat: 26.7, hist: 10.0, geo: 40.0, ing: 80.0, cie: 30.0, edFin: 0.0, tecIno: 20.0 },
  { turma: "8C", nome: "LUIZ OTAVIO AQUINO DE LIMA WALDHELM", participacao: 100.0, acertos: 71.3, evolucao: 31, port: 70.0, mat: 66.7, hist: 70.0, geo: 70.0, ing: 40.0, cie: 90.0, edFin: 80.0, tecIno: 80.0 },
  { turma: "8C", nome: "MATEUS BRAGA MENDONCA", participacao: 100.0, acertos: 83.8, evolucao: 1, port: 80.0, mat: 86.7, hist: 60.0, geo: 100.0, ing: 100.0, cie: 80.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "8C", nome: "MATEUS DANIEL BRAGA DE SOUSA", participacao: 0.0, acertos: 0, evolucao: null, port: 0, mat: 0, hist: 0, geo: 0, ing: 0, cie: 0, edFin: 0, tecIno: 0 },
  { turma: "8C", nome: "MIGUEL HENRIQUE XAVIER VASSAO", participacao: 100.0, acertos: 71.3, evolucao: -2, port: 70.0, mat: 66.7, hist: 60.0, geo: 90.0, ing: 80.0, cie: 90.0, edFin: 60.0, tecIno: 40.0 },
  { turma: "8C", nome: "MILENA CRISTINA CARVALHO CORREA", participacao: 100.0, acertos: 50.0, evolucao: -21, port: 50.0, mat: 73.3, hist: 20.0, geo: 40.0, ing: 40.0, cie: 60.0, edFin: 20.0, tecIno: 80.0 },
  { turma: "8C", nome: "PEDRO HENRIQUE AGUIAR DE CASTRO", participacao: 100.0, acertos: 58.8, evolucao: -26, port: 55.0, mat: 60.0, hist: 40.0, geo: 40.0, ing: 100.0, cie: 80.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "8C", nome: "PIETRO RIBEIRO TRUDES", participacao: 100.0, acertos: 91.3, evolucao: 14, port: 90.0, mat: 93.3, hist: 80.0, geo: 100.0, ing: 100.0, cie: 90.0, edFin: 100.0, tecIno: 80.0 },
  { turma: "8C", nome: "RAISSA LOPES RODRIGUES", participacao: 100.0, acertos: 75.0, evolucao: 9, port: 75.0, mat: 53.3, hist: 70.0, geo: 100.0, ing: 100.0, cie: 80.0, edFin: 60.0, tecIno: 80.0 },
  { turma: "8C", nome: "RAQUEL CRISTINA MEDEIROS DA SILVA", participacao: 100.0, acertos: 80.0, evolucao: 23, port: 80.0, mat: 66.7, hist: 80.0, geo: 80.0, ing: 80.0, cie: 90.0, edFin: 80.0, tecIno: 100.0 },
  { turma: "8C", nome: "RUAN VASSAO", participacao: 100.0, acertos: 62.5, evolucao: 18, port: 55.0, mat: 86.7, hist: 40.0, geo: 50.0, ing: 80.0, cie: 60.0, edFin: 100.0, tecIno: 40.0 },
  { turma: "8C", nome: "RYAN CESAR DUARTE RAMOS", participacao: 100.0, acertos: 60.0, evolucao: 18, port: 45.0, mat: 86.7, hist: 30.0, geo: 60.0, ing: 60.0, cie: 80.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "8C", nome: "VICTOR GOMES BARBOSA PIRES", participacao: 100.0, acertos: 61.3, evolucao: 25, port: 55.0, mat: 66.7, hist: 50.0, geo: 50.0, ing: 100.0, cie: 70.0, edFin: 80.0, tecIno: 40.0 },
  { turma: "8C", nome: "VICTÓRIA KUSNIER DE LARA", participacao: 100.0, acertos: 73.8, evolucao: 23, port: 75.0, mat: 73.3, hist: 40.0, geo: 90.0, ing: 80.0, cie: 80.0, edFin: 80.0, tecIno: 80.0 },
  { turma: "8C", nome: "WEDERSON HENRIQUE DA SILVA", participacao: 100.0, acertos: 62.5, evolucao: 16, port: 60.0, mat: 60.0, hist: 30.0, geo: 60.0, ing: 80.0, cie: 90.0, edFin: 60.0, tecIno: 80.0 },
  { turma: "8C", nome: "YAN CORREIA SANTOS", participacao: 100.0, acertos: 35.0, evolucao: -38, port: 15.0, mat: 33.3, hist: 40.0, geo: 40.0, ing: 40.0, cie: 50.0, edFin: 20.0, tecIno: 80.0 },
  { turma: "8C", nome: "YANDER KAWAN DE LIMA CORREA BRAZ", participacao: 100.0, acertos: 58.8, evolucao: null, port: 45.0, mat: 66.7, hist: 70.0, geo: 70.0, ing: 60.0, cie: 70.0, edFin: 80.0, tecIno: 0.0 }
];

export const getPerformanceLevel = (percentage: number): 'below' | 'basic' | 'adequate' | 'advanced' => {
  if (percentage >= 90) return 'advanced';
  if (percentage >= 70) return 'adequate';
  if (percentage >= 45) return 'basic';
  return 'below';
};

export const performanceLevels = {
  below: { label: 'Abaixo do Básico', range: '0% - 44,99%', color: 'performance-below' },
  basic: { label: 'Básico', range: '45% - 69,99%', color: 'performance-basic' },
  adequate: { label: 'Adequado', range: '70% - 89,99%', color: 'performance-adequate' },
  advanced: { label: 'Avançado', range: '90% - 100%', color: 'performance-advanced' },
};

export const subjects = [
  { key: 'port', name: 'Português', shortName: 'PORT' },
  { key: 'mat', name: 'Matemática', shortName: 'MAT' },
  { key: 'hist', name: 'História', shortName: 'HIST' },
  { key: 'geo', name: 'Geografia', shortName: 'GEO' },
  { key: 'ing', name: 'Inglês', shortName: 'ING' },
  { key: 'cie', name: 'Ciências', shortName: 'CIE' },
  { key: 'oePort', name: 'OE Português', shortName: 'OE PORT' },
  { key: 'oeMat', name: 'OE Matemática', shortName: 'OE MAT' },
  { key: 'edFin', name: 'Ed. Financeira', shortName: 'ED FIN' },
  { key: 'tecIno', name: 'Tecnologia', shortName: 'TEC INO' },
];