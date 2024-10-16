
import { z } from "zod";
import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Row, CartDetails, Header, Card, Coffee, CoffeeInfo, CartTotalInfo, CheckoutButton } from "./styles";
import cafe from '../../images/coffees/americano.png'
import { QuantityInput } from "../../components/Form/QuantityInput";
import { Trash } from "phosphor-react";
import { Fragment } from "react/jsx-runtime";


type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF')
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
  const form = useForm<FormInputs>({
    resolver: zodResolver(newOrder)
  })

  const {
    handleSubmit

  } = form

  return (
    <FormProvider {...form}>
    <Row>
      <div>
        <Address />
        <Payment />
      </div>
      <CartDetails>
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
                <QuantityInput
                  quantity={1}
                  increment={() => {}}
                  decrement={() => {}}
                />
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
      <CheckoutButton onClick={handleSubmit((data) => console.log(data))}>
        Confirmar Pedido
      </CheckoutButton>
      </Card>
    </CartDetails>
    </Row>
    </FormProvider>
  );
}
