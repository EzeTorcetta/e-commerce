import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home, Detail, Landing } from './views'
import { NavBar } from './components'



function App() {

  const pathname = useLocation().pathname

  return (
    <div>

      {(pathname !== "/") ?
        <NavBar /> : null
      }

      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App
