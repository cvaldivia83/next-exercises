"use client"

import Container from "../components/Container";
import H1Title from "../components/H1Title";
import Input from "../components/Input";
import Button from '../components/Button';
import { FormEvent, useState } from 'react';

const Imc = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const heightMeters = Number(height)/100 * Number(height)/100 ;
    const results = (Number(weight)/ heightMeters).toFixed(2);
    setImc(Number(results));
  }

  return (
    <Container>
      <H1Title>Calculadora de IMC</H1Title>

      <form action="" onSubmit={handleSubmit}>
        <Input label="Altura (cm)" name="altura" type="text" value={height} setValue={setHeight} />
        <Input label="Peso (kg)" name="peso" type="text" value={weight} setValue={setWeight} />

        <Button type="submit">Calcular IMC</Button>
        <p>{ imc === 0 ? "" : `Seu IMC é de ${imc}`}</p>
      </form>
    </Container>
  )
}

export default Imc;