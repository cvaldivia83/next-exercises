"use client"
import styled from "styled-components"

const StyledInput = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;

  & label {
    margin: ${({ theme }) => theme.spacing.md } 0;
    color: ${({ theme }) => theme.colors.text };
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold };
    font-size: ${({ theme }) => theme.typography.fontSize.lg };
  };
  & input {
    font-size: ${({ theme }) => theme.typography.fontSize.base };
    padding: 8px;
    border-style: solid;
    height: 40px;
    width: 50%;
    border-radius: 4px;
    border-color: font-size: ${({ theme }) => theme.colors.textSecondary };
  }
`

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<InputProps> = ({ label, name, type = "text", value, setValue }) => {

  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </StyledInput>
  )
}

export default Input;