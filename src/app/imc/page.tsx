
import { Metadata } from "next";
import Imc from "../components/IMC";

export const metadata: Metadata = {
  title: "Calculadora de IMC", 
  description: "Calculadora de IMC: insira seu peso e sua altura e a calculadora faz todo o trabalho para você e retorna o seu Índice de Massa Corporal"
}

const Page = () => {
  return (
    <Imc />
  )
}

export default Page;
