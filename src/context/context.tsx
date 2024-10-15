import { createContext } from "react";


interface CoffeeContextType {
  coffees: string
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeProviderProps {
  children: React.ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeProviderProps) {
  return (
    <CoffeeContext.Provider
    value={{ coffees: '1' }}>
      {children}
    </CoffeeContext.Provider>
  )
}
