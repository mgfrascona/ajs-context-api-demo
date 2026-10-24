import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeProvider.jsx'

const StatCard = ({ number, label }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`stat-card ${theme}`}>
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default StatCard
