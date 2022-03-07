import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from '../App'
import MainPage from '../pages/home'
import Login from '../pages/login'

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate />} />
                <Route path='/login' element={<Login />} />
                <Route path='/mainpage' />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers