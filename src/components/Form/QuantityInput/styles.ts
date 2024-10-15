import styled from "styled-components";

export const Container = styled.div`
   padding-top: 2px;
   background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;

  button {
    background-color: transparent;
    border: none;
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
  }

  button svg {
    color: ${(props) => props.theme['purple']};

    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${(props) => props.theme['base-title']};
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
