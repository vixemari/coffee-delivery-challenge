import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";

interface QuantityInputProps {
  quantity: number
  increment: () => void
  decrement: () => void
}

export function QuantityInput({ quantity, increment, decrement }: QuantityInputProps) {
  return (
    <Container>
      <button onClick={() => decrement()}><Minus /></button>
      <span>{quantity}</span>
      <button onClick={() => increment()}><Plus /></button>
    </Container>
  )
}
