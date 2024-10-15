import { Container, Header, Card, Coffee, CoffeeInfo, CartTotalInfo, CheckoutButton } from "./style"
import cafe from '../../../../images/coffees/americano.png'
import { QuantityInput } from "../../../../components/Form/QuantityInput"
import { Trash } from "phosphor-react"
import { Fragment } from "react/jsx-runtime"


export function CartDetails() {
  return (
    <Container>
      <Header>
        <h3>Cafés selecionados</h3>
      </Header>
      <Card>
        <Fragment>
        <Coffee>
          <div>
            <img src={cafe} alt="Café" />
            <div>
              <span>Americano</span>
              <CoffeeInfo>
                <QuantityInput />
                <button>
                  <Trash />
                  <span>Remover</span>
                </button>
              </CoffeeInfo>
            </div>
          </div>
          <aside>R$ 12,00</aside>
        </Coffee>
        <span />
      </Fragment>
      <CartTotalInfo>
        <div>
          <span>Total de itens</span>
          <span>R$ 12,00</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 5,00</span>
        </div>
        <div>
        <span>Total</span>
        <span>R$ 17,00</span>
        </div>
      </CartTotalInfo>
      <CheckoutButton>Confirmar Pedido</CheckoutButton>
      </Card>
    </Container>
  )
}
