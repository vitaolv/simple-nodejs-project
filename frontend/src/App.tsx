import './App.sass'
import './styles/deleteButton.sass'
import './styles/primaryButton.sass'
import './styles/secundaryButton.sass'

import { FormComponent } from './components/FormComponent'
import { HeaderComponent } from './components/Header'
import { FooterComponent } from './components/Footer.tsx'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { useEffect } from 'react'

function RootRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, []);

  return null;
}

function App() {
  return (
    <div className='AppBody'>
      <HeaderComponent />

      <Routes>
        <Route path='/' element={<RootRoute />} />
        <Route path='/home' index element={<Home />} />
        <Route path='/cadastro-de-produto' element={<FormComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
