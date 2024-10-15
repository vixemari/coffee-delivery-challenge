import styled from "styled-components";
import { mixins } from '../../styles/mixins'


export const HomeCointainer = styled.div`
  position: relative;




`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: auto;
  padding: 2rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

  h1 {
    ${mixins.fonts.titleXL}
    color: ${({ theme }) => theme['base-title']};


  }

  p {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme['base-subtitle']};

  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`;

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['base-title']};
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
