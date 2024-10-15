import styled from "styled-components";
import { mixins } from '../../../../styles/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  h3 {
    ${mixins.fonts.titleS}
    color: ${({ theme }) => theme['base-title']};
  }
`;

export const Card = styled.div`
   padding: 40px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme['base-card']};
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: ${({ theme }) => theme['base-button']};
    margin: 24px 0;
  }
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > span {
        ${mixins.fonts.textM}
        color: ${({ theme }) => theme['base-text']};
        margin-bottom: 8px;
      }

    }
  }

  > aside {
    font-weight: bold;
  }

`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.purple};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme['base-text']};
    }
  }
`;

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      ${mixins.fonts.textS};
    }

    span:last-child {
      ${mixins.fonts.textM};
    }
  }

  div:last-child {
    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  ${mixins.fonts.buttonG};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  border-radius: 6px;
`