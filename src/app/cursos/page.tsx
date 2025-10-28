import Container from "../components/Container"
import H1Title from "../components/H1Title"
import { GET_CURSOS } from "../api/cursos"
import Cursos from "../components/Cursos"

interface Cursos {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
}


const CursosPage = async () => {
  const cursos = await GET_CURSOS() as Cursos[];

  return (
    <Container>
      <H1Title>Cursos</H1Title>
      <Cursos cursos={cursos} />
    </Container>
  )
}

export default CursosPage;