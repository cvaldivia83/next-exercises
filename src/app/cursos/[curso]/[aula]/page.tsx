import Container from "../../../components/Container"
import H1Title from "../../../components/H1Title"

type AulaParams = {
  params: {
    curso: string;
    aula: string;
  }
}

const AulaPage = ({ params }: AulaParams) => {
  return (
    <Container>
      <H1Title>Curso: {params.curso} - Aula {params.aula}</H1Title>
    </Container>
  )
}

export default AulaPage;