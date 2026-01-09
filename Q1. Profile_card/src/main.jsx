import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserData from './UserData'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserData />
  </StrictMode>,
)
