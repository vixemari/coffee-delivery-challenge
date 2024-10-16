import styled from "styled-components";
import { mixins } from '../../../../styles/mixins'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 16px;

  border-radius: 6px;

`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 16px;
  color: ${({ theme }) => theme['base-text']};

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      ${mixins.fonts.textM}
    }
  }

  > span {
    ${mixins.fonts.textS}
    margin-top: 2px;
    margin-left: 32px;
  }

`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 16px;
`

  export const Option = styled.div`
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 6px;
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme['base-button']};
    text-transform: uppercase;
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme['base-hover']};
    }

    span {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme['base-text']};
    }

    &[data-state='true'] {
    background-color: ${({ theme }) => theme['purple-light']};
    border-color: ${({ theme }) => theme.purple};
  }

`;