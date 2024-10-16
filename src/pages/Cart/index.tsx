
import { z } from "zod";
import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Row, CartDetails, Header, Card, Coffee, CoffeeInfo, CartTotalInfo, CheckoutButton } from "./styles";
import { QuantityInput } from "../../components/Form/QuantityInput";
import { Trash } from "phosphor-react";
import { Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { CoffeeContext } from "../../context/context";
import { coffees } from '../../../data.json'


type FormInputs = {
  cep: number
  street: string
  number: number
  fullAddress: string
  neighborhood: string
  city: string
  state: string
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.number().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF')
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
  const { incrementItemQuantity, decrementItemQuantity, cart, removeItens, checkoutCart } = useContext(CoffeeContext)

  const AddressForm = useForm<FormInputs>({
    resolver: zodResolver(newOrder)
  })

  const { handleSubmit } = AddressForm

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  const coffeesInCart = cart.map(item => {
    const coffee = coffees.find(coffee => coffee.id === item.id)
    return {
      ...coffee,
      quantity: item.quantity
    }
  })


  const CartTotal = coffeesInCart.reduce((acc, coffee) => {
    const price = coffee.price ?? 0;
    return acc + price * coffee.quantity;
  }, 0);

  const delivery = 5;

  const submitOrder: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      alert('Adicione itens ao carrinho');
      return;
    }
    checkoutCart(data);
  }


  return (
    <form id="order" onSubmit={handleSubmit(submitOrder)}>
      <FormProvider {...AddressForm}>
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
              {
                coffeesInCart.map(coffee => (
                  <Fragment key={coffee.id}>
                    <Coffee>
                      <div>
                        <img src={coffee.image} alt="Café" />
                        <div>
                          <span>{coffee.title}</span>
                          <CoffeeInfo>
                            <QuantityInput
                              quantity={coffee.quantity}
                              increment={() => coffee.id && handleItemIncrement(coffee.id)}
                              decrement={() => coffee.id && handleItemDecrement(coffee.id)}
                            />
                            <button onClick={() => removeItens(coffee.id)}>
                              <Trash />
                              <span>Remover</span>
                            </button>
                          </CoffeeInfo>
                        </div>
                      </div>
                      <aside>R$ {coffee.price?.toFixed(2).replace('.', ',')}</aside>
                    </Coffee>
                    <span />
                  </Fragment>
                ))
              }
              <CartTotalInfo>
                <div>
                  <span>Total de itens</span>
                  <span>R$ {CartTotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span>R$ {delivery.toFixed(2).replace('.', ',')}</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>R$ {(CartTotal + delivery).toFixed(2).replace('.', ',')}</span>
                </div>
              </CartTotalInfo>
              <CheckoutButton type="submit" form="order" disabled={cart.length === 0 }>
                Confirmar Pedido
              </CheckoutButton>
            </Card>
          </CartDetails>
        </Row>
      </FormProvider>
    </form>
  );
}
