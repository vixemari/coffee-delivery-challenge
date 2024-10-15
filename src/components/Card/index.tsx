import { CardContainer, CoffeeImage, Tag, Title, Description, OrderContainer, Price, Order, CartButton } from './styles'
import Cafe from '../../images/coffees/americano.png'
import { QuantityInput } from '../Form/QuantityInput'
import { ShoppingCart } from 'phosphor-react'

export function Card() {
  return (
    <CardContainer>
      <div>
        <CoffeeImage src={Cafe} alt="Café" />
        <Tag>
          <span>Novidade</span>
          </Tag>
        <Title>Café Americano</Title>
        <Description>Café puro e forte</Description>

        <OrderContainer>
          <Price>
            <span>R$</span>
            <span>12,00</span>
          </Price>
          <Order>
            <QuantityInput />
            <CartButton>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </Order>
        </OrderContainer>
      </div>
    </CardContainer>
  )
}
