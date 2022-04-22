const MenuContext = React.createContext()

const MenuContextProvider = ({ children }) => {
  const [toggle, setToggle] = React.useState(false)
  const [sideMenu, setSideMenu] = React.useState(false)

  const context = {
    menu: [toggle, setToggle],
    sidemenu: [sideMenu, setSideMenu],
  }

  return <MenuContext.Provider value={context}>{children}</MenuContext.Provider>
}

export { MenuContext, MenuContextProvider }
