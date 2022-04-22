import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = ({ title = 'Home' }) => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="flex flex-wrap">
        <div className="w-full bg-gray-300 py-6 px-6 rounded-3xl">
          <div className="flex justify-between text-gray-500 items-center mb-8">
            <p className="text-2xl font-bold">{title}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
