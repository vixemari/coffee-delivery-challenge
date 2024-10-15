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

export const Input = styled.input`
    color: ${({ theme }) => theme['base-text']};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme['yellow-dark']};
      border-radius: 6px;
    }

`;
