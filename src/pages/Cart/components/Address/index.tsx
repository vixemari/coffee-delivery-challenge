import { MapPin } from 'phosphor-react';
import { Container, Header, Card, Info, Input } from './styles';
import { useTheme } from 'styled-components'




export function Address() {
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <h3>Complete seu pedido</h3>
      </Header>
      <Card>
        <Info>
          <div>
            <MapPin
            size={24}
            color={theme['yellow-dark']}
            />
            <span>Endereço de entrega</span>
          </div>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </Info>
        <form>
          <Input
            type="text"
            placeholder="Cep"
            area="cep"
          />
          <Input
            type="text"
            placeholder="Rua"
            area="street"
          />
          <Input
          type="text"
          placeholder="Numero"
          area="number"
          />
          <Input
          type="text"
          placeholder="Complemento"
          area="fullAddress"
          />
          <Input
          type="text"
          placeholder="Bairro"
          area="neighborhood"
          />

          <Input
          type="text"
          placeholder="Cidade"
          area="city"
          />
          <Input
          type="text"
          placeholder="UF"
          area="state"
          />
        </form>
      </Card>

    </Container>
  )
}
