"use client"
import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  margin: ${({ theme }) => theme.spacing.sm } 0;
  padding: ${({ theme }) => theme.spacing.sm } ${({ theme }) => theme.spacing.md };
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary };
  color: ${({ theme }) => theme.colors.background };
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold };
  font-size: ${({ theme }) => theme.typography.fontSize.base };
`

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit"
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button' }) => {
  return (
    <StyledButton type={type}>{ children }</StyledButton>
  )
}

export default Button;