import Container from "../../components/Container"
import H1Title from "../../components/H1Title"
import { GET_CURSO } from "@/app/api/cursos"
import Link from "next/link"

type PageParams = {
  params: {
    curso: string;
  }
}

interface Curso {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Aula[]
}

interface Aula {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
}

const CursoPage = async ({ params }: PageParams) => {
  const oneCurso = await GET_CURSO(params.curso) as Curso;

  return (
    <Container>
      <H1Title>Curso {params.curso}</H1Title>
      <div className="cursos-lista">
        <h2>{oneCurso.nome}</h2>
        <p>{oneCurso.descricao}</p>
        <small>{oneCurso.slug}</small>
      </div>

      <div>
        <ul>
          { oneCurso.aulas.map((item) => {
            return (
              <li key={item.slug}><Link href={`/cursos/${oneCurso.nome}/${item.slug}`}>{item.nome}</Link></li>
            )
          })}
        </ul>
      </div>

    </Container>
  )
}

export default CursoPage;