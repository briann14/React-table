import { createContext } from "react";

const context = createContext('light')

export default context

export function contextprovider({children}) {
   return <context.Provider value='light'>{children}</context.Provider>
}