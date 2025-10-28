import Container from "../../components/Container"
import H1Title from "../../components/H1Title"

type PageParams = {
  params: {
    curso: string;
  }
}

const CursoPage = ({ params }: PageParams) => {
  return (
    <Container>
      <H1Title>Curso {params.curso}</H1Title>
    </Container>
  )
}

export default CursoPage;