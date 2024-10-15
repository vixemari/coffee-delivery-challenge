import { Container, Header, Card } from "./style"
export function CartDetails() {
  return (
    <Container>
      <Header>
        <h3>Detalhes do pedido</h3>
      </Header>
      <Card>
        <p>Nome do produto</p>
        <p>Quantidade</p>
        <p>Preço</p>
      </Card>
    </Container>
  )
}
