import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Log from './Login'

import App from './Target/App'

const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Log/>}/>
        <Route path='/Target/App' element={<App/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main
