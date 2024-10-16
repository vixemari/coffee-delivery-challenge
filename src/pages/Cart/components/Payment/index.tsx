import { useContext, useState } from "react";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { PaymentContainer, Info, PaymentOptions, Option } from "./styles";
import { useTheme } from "styled-components";
import { CoffeeContext } from "../../../../context/context";


export function Payment() {
  const theme = useTheme()
  const { addPayment } =  useContext(CoffeeContext)
  const [isSelected, setIsSelected] = useState({
    credit: false,
    debit: false,
    cash: false
  })
  const handleSelectPayment = (payment: string) => {
    setIsSelected(prevState => ({
      ...prevState,
      credit: payment === 'credit',
      debit: payment === 'debit',
      money: payment === 'cash'
    }))
    addPayment(payment)
  }


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
        <Option data-state={isSelected.credit} onClick={() => handleSelectPayment('credit')}>
          <CreditCard
            color={theme['purple']}
            size={16} />
          <span>Cartão de crédito</span>
        </Option>
        <Option data-state={isSelected.debit} onClick={() => handleSelectPayment('debit')}>
          <Bank
            color={theme['purple']}
            size={16} />
          <span>Cartão de débito</span>
        </Option>
        <Option data-state={isSelected.cash} onClick={() => handleSelectPayment('cash')}>
          <Money
            color={theme['purple']}
            size={16} />
          <span>Dinheiro</span>
        </Option>

      </PaymentOptions>

    </PaymentContainer>
  )
}
