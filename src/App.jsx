import { ThemeProvider } from './contexts/ThemeProvider'
import { NotificationProvider } from './contexts/NotificationContext'
import Layout from './components/Layout'
import './App.css'

const App = () => {
	return (
		<ThemeProvider>
			<NotificationProvider>
				<Layout />
			</NotificationProvider>
		</ThemeProvider>
	)
}

export default App
