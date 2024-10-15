
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider} from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

import { Router } from "./Router";
import { CoffeeContextProvider } from './context/context';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
