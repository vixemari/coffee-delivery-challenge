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