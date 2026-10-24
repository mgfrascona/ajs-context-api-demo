import UserProfile from './UserProfile'

import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider.jsx'

const Sidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <aside className="sidebar">
      <UserProfile />
      <nav>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
      <div className="theme-switcher">
        <span>Theme:</span>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </aside>
  )
}

export default Sidebar
