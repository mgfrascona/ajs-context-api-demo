import { useContext } from 'react'
import { UserContext } from '../contexts/UserProvider.jsx'

const UserMenu = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="user-menu">
      <span className="user-menu-name">{user.name}</span>
      <div className="user-menu-dropdown">
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </div>
    </div>
  )
}

export default UserMenu
