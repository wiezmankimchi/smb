import { Link, routes } from '@redwoodjs/router'
import { UserAuthTools } from 'src/components/User/UserAuthTools'
import Facebook from 'src/components/icons/Facebook'
import Instagram from 'src/components/icons/Instagram'
import Github from 'src/components/icons/Github'
import Twitter from 'src/components/icons/Twitter'
import { useAuth } from '@redwoodjs/auth'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { loading, isAuthenticated, logIn, logOut, currentUser } = useAuth()
  return (
    <>
      {/* Header */}
      <section className="w-full px-6 pb-12 antialiased bg-white h-1/6">
        <div className="mx-auto max-w-screen-2xl">
          <nav className="relative z-50 h-24 select-none">
            <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-300 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
              <div className="flex items-center justify-start w-1/4 h-full pr-4">
                <div className="inline-block py-4 md:py-0">
                  <Link to={routes.home()}>
                    <span className="p-1 text-xl font-black leading-none text-gray-900">
                      <span className="">SMB</span>
                      <span className="text-indigo-600">.</span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                <Link
                  to={routes.home()}
                  className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                >
                  Home
                </Link>
                <Link
                  to={routes.about()}
                  className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                >
                  About
                </Link>
                <Link
                  to={routes.contact()}
                  className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                >
                  Contact
                </Link>
                {isAuthenticated && (
                  <Link
                    to={routes.users()}
                    className="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
                  >
                    Users
                  </Link>
                )}
                <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                  <UserAuthTools />
                </div>
              </div>
            </div>
          </nav>
          <div></div>
        </div>
      </section>
      {/* End Header */}
      <section className="container w-full max-w-screen-2xl px-20 py-3 text-left md:max-w-none h-3/4">
        {children}
      </section>
      {/* Footer */}
      <section className="text-gray-700 bg-white h-12">
        <div className="container flex flex-col items-center px-10 py-8 mx-auto max-w-screen-2xl sm:flex-row">
          <Link to={routes.home()}>
            <span className="p-1 text-xl font-black leading-none text-gray-900">
              <span className="">SMB</span>
              <span className="text-indigo-600">.</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
            © 2022 CRM for SMB
          </p>
          <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <Facebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <Instagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <Twitter />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <Github />
            </a>
          </span>
        </div>
      </section>
    </>
  )
}

export default MainLayout
