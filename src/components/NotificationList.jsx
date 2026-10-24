import { useContext } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'

const NotificationList = () => {
    const { notifications, removeNotification } = useContext(NotificationContext)

    if (!notifications.length) return <div>No notifications</div>

    return (
        <div>
            <h3>Notification</h3>
            {notifications.map(n => (
                <div key={n.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span>{n.message}</span>
                    <button
                        onClick={() => removeNotification(n.id)}
                    >Dismiss</button>
                </div>
            ))}
        </div>
    )
}

export default NotificationList