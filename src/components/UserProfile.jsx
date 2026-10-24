import { useContext } from 'react'
import { UserContext } from '../contexts/UserProvider.jsx'

const UserProfile = () => {
    const { user, setUser } = useContext(UserContext)

    const updateName = newName => {
        setUser({ ...user, name: newName })
    }

    return (
        <div className="user-profile">
            <div className="avatar">{user.name[0]}</div>
            <h3>Hello, {user.name}!</h3>
            <button onClick={() => updateName('Jane')}>
                Change Name
            </button>
        </div>
    )
}

export default UserProfile
