import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 80rem;
  padding: 1.325rem;
  margin: auto;

  background: ${(props) => props.theme["background"]};

  display: flex;
  flex-direction: column;

`
