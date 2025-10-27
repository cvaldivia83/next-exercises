"use client"
import styled from "styled-components"
import Link from "next/link"

const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md };
  .nav-list {
    list-style: none;
  }

  .nav-item {
    display: inline-block;
    margin: 0 ${({ theme }) => theme.spacing.xs };
  }

  .nav-link {
    text-decoration: none;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold };
    color: ${({ theme }) => theme.colors.secondary };
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul className="nav-list">
          <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
          <li className="nav-item">
            <Link href="/imc" className="nav-link">Calculadora de IMC</Link>
          </li>
          
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header;