import { Container, Order, Heading, Info, InfoContent } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react';
import { useTheme } from "styled-components";
import { CoffeeContext } from '../../context/context';
import { useParams } from 'react-router-dom';
import delivery from '../../images/delivery.svg'


export function Success() {
  const theme = useTheme()
  const { orders } = useContext(CoffeeContext)
  const { id } = useParams<{ id: string }>()
  const orderInfo = orders.find((order) => order.id === Number(id))

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

   if (!orderInfo?.id) {
    return null
  }


  return (
    <Container>
    <Order>
      <Heading>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </Heading>

      <Info>
        <InfoContent>
          <div>
            <MapPin
              color={theme.white}
              style={{ backgroundColor: theme.purple }}
              size={32}
            />

            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {orderInfo.street}, {orderInfo.number}
                </strong>
              </span>

              <span>
                {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
              </span>
            </div>
          </div>

          <div>
            <Timer
              color={theme.white}
              style={{ backgroundColor: theme.yellow }}
              size={32}
            />

            <div>
              <span>Previsão de entrega</span>

              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div>
            <CurrencyDollar
              color={theme.white}
              style={{ backgroundColor: theme['yellow-dark'] }}
              size={32}
            />

            <div>
              <span>Pagamento na entrega</span>

              <strong>{paymentMethod[orderInfo.payment as keyof typeof paymentMethod]}</strong>
            </div>
          </div>
        </InfoContent>
      </Info>
    </Order>

    <img src={delivery} alt="Pedido concluído" />
  </Container>
)

}
