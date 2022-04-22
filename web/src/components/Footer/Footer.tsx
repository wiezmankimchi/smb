import {Link, routes} from '@redwoodjs/router'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Twitter from '../icons/Twitter'
import Github from '../icons/Github'
const Footer = () => {
  return (
    <footer className="h-18 items-center relative z-10">
      <div className="container flex flex-col justify-center px-8 py-4 mx-auto max-w-screen-2xl sm:flex-row">
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
    </footer>
  )
}

export default Footer
