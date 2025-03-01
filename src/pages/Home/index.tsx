import { HomeCointainer, TitleContainer, Section, Info, CoffeeList } from './styles'
import home from '../../images/home.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Card } from '../../components/Card'

import {coffees} from '../../../data.json'


export function Home() {
  const theme = useTheme()

  return (
    <HomeCointainer>
      <Section>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <Info>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                style={{ backgroundColor: theme['yellow-dark'] }}
                color={theme['background']}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                style={{ backgroundColor: theme['base-text'] }}
                color={theme['background']}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                style={{ backgroundColor: theme['yellow'] }}
                color={theme['background']}
              />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                style={{ backgroundColor: theme['purple'] }}
                color={theme['background']}
              />
              <span>O café chega fresquinho até você</span>
            </div>

          </Info>
        </TitleContainer>
        <img src={home} alt="Home" />
      </Section>
      <CoffeeList>
      <h2>Nossos cafés</h2>
      <div>
        {
          coffees.map(coffee => (
            <Card key={coffee.id} coffee={coffee} />
          ))
        }
      </div>
      </CoffeeList>
    </HomeCointainer>
  )
}
