import Container from "../../../components/Container"
import H1Title from "../../../components/H1Title"
import { GET_AULA } from "@/app/api/cursos"

type AulaParams = {
  params: {
    curso: string;
    aula: string;
  }
}

const AulaPage = async ({ params }: AulaParams) => {

  const aula = await GET_AULA(params.curso, params.aula);

  return (
    <Container>
      <H1Title>Aula {aula.nome}</H1Title>
    </Container>
  )
}

export default AulaPage;