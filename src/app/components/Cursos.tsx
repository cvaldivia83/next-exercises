"use client"
import styled from "styled-components";

import Link from "next/link";


const StyledCurso = styled.ul`
  list-style: none;
  & li {
    margin: ${({ theme }) => theme.spacing.sm };
  };
  & a {
    color: ${({ theme}) => theme.colors.text };
    font-size: ${({ theme}) => theme.typography.fontSize.lg };
  }
`


// Interface para um curso individual
export interface Curso {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
}

// Interface para os props do componente Cursos
interface CursosProps {
  cursos: Curso[];
}

const Cursos: React.FC<CursosProps> = ({ cursos }) => {

  return (
    <StyledCurso>
      {cursos.map((curso: Curso) => {
        return (
        
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        )
      })}
    </StyledCurso>
  )
}

export default Cursos;