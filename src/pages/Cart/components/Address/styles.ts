import styled from "styled-components";
import { mixins } from '../../../../styles/mixins'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  area: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;


  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-left: 16px;
    display: grid;
    grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;

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
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 25px;
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

export const Input = styled.input<InputProps>`
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    padding: 12px;
    outline: none;
    grid-area: ${(props) => props.area};


    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme['yellow-dark']};
      border-radius: 6px;
    }

`;
