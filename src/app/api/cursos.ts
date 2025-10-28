

export interface Curso {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
}

export interface Aula {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  tempo: number;
  curso_id: number;
  ordem: number;
}

// GET cursos index
export async function GET_CURSOS() {
  const response = await fetch('https://api.origamid.online/cursos');
  const cursos = (await response.json()) as Curso[];
  return cursos;
}

// GET cursos show
export async function GET_CURSO(curso: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`);
  const cursos = (await response.json()) as Curso & {
    aulas: Aula[]
  };
  return cursos;
}

// GET aula
export async function GET_AULA(curso: string, aula: string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`);
  const cursos = (await response.json()) as Aula;
  return cursos;
}