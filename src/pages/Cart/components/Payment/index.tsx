import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentContainer, Info, PaymentOptions } from "./styles";
import { useTheme } from "styled-components";


export function Payment() {
  const theme = useTheme()
  return (
    <PaymentContainer>
      <Info>
        <div>
          <CurrencyDollar
            color={theme['purple']}
            size={24} />
          <span>Pagamento</span>
        </div>
        <span>O pagamento é feito na entrega. Escolha a forma que deseja
          pagar</span>
      </Info>
      <PaymentOptions>
        <div>
          <CreditCard
            color={theme['purple']}
            size={16} />
          <span>Cartão de crédito</span>
        </div>
        <div>
          <Bank
            color={theme['purple']}
            size={16} />
          <span>Cartão de débito</span>
        </div>
        <div>
          <Money
            color={theme['purple']}
            size={16} />
          <span>Dinheiro</span>
        </div>

      </PaymentOptions>

    </PaymentContainer>
  )
}
