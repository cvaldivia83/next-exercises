"use client"
import styled from "styled-components"

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 1440px;
`;

interface ContainerProps {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <StyledContainer>{ children }</StyledContainer>
  )
}

export default Container;