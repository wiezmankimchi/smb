import { Link, routes } from "@redwoodjs/router"
import { useContext } from "react"
import Footer from "src/components/Footer/Footer"
import Header from "src/components/Header/Header"
import { MenuContext } from 'src/providers/context/menuContext'


type SmbLayoutProps = {
  children?: React.ReactNode
}


const Sidebar = () =>{
  const { menu, sidemenu } = useContext(MenuContext)
  const [toggle] = menu
  const [sideMenu, setSideMenu] = sidemenu
  return (
    <div>
      Sidebar
      <p>Menu {toggle ? 'Open' : 'Closed'}</p>
      <button onClick={() => setSideMenu(!sideMenu)}>Button</button>
    </div>
  )
}

const RightSidebar = ()=>{
  return <div>Right Sidebar</div>
}



const SmbLayout = ({ children }: SmbLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col h-screen">
      <header className="bg-gray-500"><Header/></header>

      <div className="flex-1 flex flex-row overflow-y-hidden">
        <main className="flex-1 bg-gray-200 overflow-y-auto">{children}</main>

        <nav className="order-first sm:w-32 bg-gray-200 overflow-y-auto">
          <Sidebar/>
        </nav>

        <aside className="sm:w-32 bg-gray-200 overflow-y-auto">
          <RightSidebar/>
        </aside>
      </div>

      <footer className="bg-gray-500"><Footer/></footer>
    </div>
  )
}

export default SmbLayout
