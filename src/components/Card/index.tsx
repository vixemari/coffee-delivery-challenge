import { CardContainer, CoffeeImage, Tag, Title, Description, OrderContainer, Price, Order, CartButton } from './styles'
import { QuantityInput } from '../Form/QuantityInput'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

interface CardProps {
  coffee: {
    id: string
    title: string
    description: string
    price: number
    image: string
    tags: string[]
  }
}

export function Card({ coffee }: CardProps) {
  const [quantity, setQuantity] = useState(0)

  function increment() {
    setQuantity(quantity + 1)
  }

  function decrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <CardContainer>
      <div>
        <CoffeeImage src={coffee.image} alt={coffee.title} />
        <Tag>
          {coffee.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
          </Tag>
        <Title>{coffee.title}</Title>
        <Description>{coffee.description}</Description>
        <OrderContainer>
          <Price>
            <span>R$</span>
            <span>{
              coffee.price.toFixed(2).replace('.', ',')
              }</span>
          </Price>
          <Order>
            <QuantityInput
              quantity={quantity}
              increment={increment}
              decrement={decrement}
            />
            <CartButton>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </Order>
        </OrderContainer>
      </div>
    </CardContainer>
  )
}
