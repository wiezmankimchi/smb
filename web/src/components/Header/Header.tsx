import { Link, routes } from '@redwoodjs/router'
import { useState, useContext } from 'react'


import { MenuContext } from 'src/providers/context/menuContext'

import { AboutIcon } from '../icons/About'
import { AlertIcon } from '../icons/Alert'
import { HomeIcon } from '../icons/Home'
import { InboxIcon } from '../icons/Inbox'
import { MenuClosed, MenuOpen } from '../icons/Menu'
import { SearchIcon } from '../icons/Search'



const Header = () => {
  const {menu, sidemenu}= useContext(MenuContext)
  const [toggle, setToggle] = menu
  const [sideMenu] = sidemenu

  return (
    <header className="h-20 items-center relative z-10">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-10 text-white z-10">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex group h-full items-center relative w-12">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={() => setToggle(!toggle)}
              className="text-4xl text-white focus:outline-none"
            >
              {toggle ? <MenuClosed /> : <MenuOpen />}
            </button>
          </div>
          <div className="container flex left-0 relative w-3/4">
            <div className="group hidden items-center ml-8 relative w-full md:flex lg:w-72">
              <div className="absolute block cursor-pointer flex items-center justify-center h-10 p-3 pr-2 text-gray-500 text-sm uppercase w-auto sm:hidden">
                <svg
                  fill="none"
                  className="h-5 relative w-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {/* Search Icon */}
              <SearchIcon/>
              <input
                type="text"
                className="bg-gray-800 block leading-normal pl-10 py-1.5 pr-4 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
            </div>
          </div>
          <div>Side Menu is{sideMenu?"Open":"Closed"}</div>
          <div className="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
            {/* Home icon */}
            <Link to={routes.home()} className="block pr-5" title='Home'>
              <HomeIcon/>

            </Link>
            {/* About icon */}
            <Link to={routes.about()} className="block pr-5" title="About">
              <AboutIcon/>
            </Link>
            {/* Inbox icon */}
            <Link to={routes.contact()} className="block pr-5" title='Contact Us'>
              <InboxIcon/>
            </Link>
            {/* Alert Icon */}
            <Link to={routes.notifications()} className="block pr-5 relative" title="Notifications">
              <AlertIcon/>
            </Link>
            {/* user avatar */}
            <Link to={routes.home()} className="block relative">
              <img
                alt="user"
                src="assets/images/1.jpg"
                className="h-10 mx-auto object-cover rounded-full w-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
