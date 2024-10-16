import { MapPin } from 'phosphor-react';
import { useFormContext } from "react-hook-form";
import { useTheme } from 'styled-components'
import { Container, Header, Card, Info, Input, FormCard } from './styles';


export function Address() {
  const theme = useTheme()
  const {
    register,
    formState: { errors } } = useFormContext()

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
        <FormCard>
          <Input
            type="number"
            placeholder="CEP"
            area="cep"
              {...register('cep', { valueAsNumber: true })}
              error={errors.cep}
            />
          <Input
            type="text"
            placeholder="Rua"
            area="street"
            {...register('street')}
            error={errors.street}

          />
          <Input
            type="number"
            placeholder="Numero"
            area="number"
            {...register('number', { valueAsNumber: true })}
            error={errors.number}

          />
          <Input
            type="text"
            placeholder="Complemento"
            area="fullAddress"
            {...register('fullAddress')}
            error={errors.fullAddress}
          />
          <Input
            type="text"
            placeholder="Bairro"
            area="neighborhood"
            {...register('neighborhood')}
            error={errors.neighborhood}
          />
          <Input
            type="text"
            placeholder="Cidade"
            area="city"
            {...register('city')}
            error={errors.city}
          />
          <Input
            type="text"
            placeholder="UF"
            area="state"
            {...register('state')}
            error={errors.state}
          />
        </FormCard>
      </Card>
    </Container>
  )
}
