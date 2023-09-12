import { useState } from 'react'
import './App.css'
import Auth from './Context/Auth'
import AuthContext from './Context/Auth-Context'
function App() {
  const [first, setfirst] = useState(false)
  const loginAuth = () => {
    setfirst(true)
  }
  return (
    <div className='app'>
      <AuthContext.Provider value={{status : first , login : loginAuth}}>
        <Auth></Auth>
      </AuthContext.Provider>
    </div>
  )
}

export default App
