import { useState, useContext } from 'react'
import { NotificationContext } from '../contexts/NotificationContext'

const NewNotification = () => {
    const [text, setText] = useState('')
    const { addNotification } = useContext(NotificationContext)

    const submit = () => {
        if (!text) return
        addNotification(text)
        setText('')
    }

    return (
        <div>
            <input type="text" 
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder='Notification message'
            />
            <button
                onClick={submit}
            >Add</button>
        </div>
    )
}

export default NewNotification