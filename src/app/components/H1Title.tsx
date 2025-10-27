"use client"
import styled from "styled-components"

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl };
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold };
  color: ${({ theme }) => theme.colors.text };
  line-height: 150%;
`

interface H1TitleProps {
  children: React.ReactNode;
}

const H1Title: React.FC<H1TitleProps> = ({ children }) => {
  return (
    <StyledH1>{ children }</StyledH1>
  )
}

export default H1Title;