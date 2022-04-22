import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NotificationsPage = ({ title = 'Notifications' }) => {
  return (
    <>
      <MetaTags title="Notifications" description="Notifications page" />

      <div className="flex flex-wrap">
        <div className="w-full bg-teal-200 py-6 px-6 rounded-3xl">
          <div className="flex justify-between text-stone-500 items-center mb-8">
            <p className="text-2xl font-bold">{title}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotificationsPage
