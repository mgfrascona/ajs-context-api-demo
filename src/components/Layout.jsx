import Header from './Header'
import Sidebar from './Sidebar'
import StatCard from './StatCard'
import ActivityItem from './ActivityItem'
import NotificationList from './NotificationList'
import NewNotification from './NewNotification'

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main">
          <h2>Welcome to the Dashboard</h2>
          <p className="subtitle">Here's what's happening today</p>
          <NotificationList />

          <div className="stats">
            <StatCard number={24} label="New Messages" />
            <StatCard number={12} label="Pending Tasks" />
            <StatCard number={8} label="Notifications" />
          </div>

          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <ul>
              <ActivityItem title="Project Update" description="The new feature has been deployed to production" />
              <ActivityItem title="New Comment" description="Sarah left a comment on your post" />
              <ActivityItem title="Meeting Scheduled" description="Team standup tomorrow at 10:00 AM" />
            </ul>
          </div>

          <NewNotification />
        </main>
      </div>
    </div>
  )
}

export default Layout
