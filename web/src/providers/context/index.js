import { MenuContextProvider } from "./menuContext"

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return <MenuContextProvider>{children}</MenuContextProvider>
}

export default AllContextProviders
