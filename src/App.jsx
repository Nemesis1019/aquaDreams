import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

import { Home, NotFound,Navbar } from './routes'

function App() {
  

  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
