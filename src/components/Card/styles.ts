import styled from "styled-components";
import { mixins } from '../../styles/mixins'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const CoffeeImage = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 4px 8px;
    border-radius: 100px;
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`;

export const Title = styled.h3`
  ${mixins.fonts.titleS}
  color: $${(props) => props.theme['base-title']};
  margin-top: 16px;
`;

export const Description = styled.p`
  ${mixins.fonts.textS}
  color: ${(props) => props.theme['base-text']};
  margin-top: 8px;
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`


export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${(props) => props.theme['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${(props) => props.theme['base-text']};
  }
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

`
export const CartButton = styled.button`
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['background']};
  transition: background-color 0.2s;
  border-radius: 6px;
  padding: 8px;
  display: flex;

 &:hover {
    background-color: ${(props) => props.theme['purple']};
  }
`
