import './App.sass'
import './components/DeleteButtonComponent/styles/deleteButton.sass'
import './components/PrimaryButton/styles/primaryButton.sass'
import './components/SecondaryButton/styles/secondaryButton.sass'

import { PostFormComponent } from './components/PostFormComponent/PostFormComponent.tsx'
import { HeaderComponent } from './components/parcialComponents/HeaderComponent/Header.tsx'
import { FooterComponent } from './components/parcialComponents/FooterComponent/Footer.tsx'
import { DescriptionProductPage } from './pages/DescriptionPage/DescriptionProductPage.tsx'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home } from './pages/HomePage/Home.tsx'
import { useEffect } from 'react'
import { UpdateProductPage } from './pages/UpdatePage/UpdateProductPage.tsx'
import { useSelector } from 'react-redux'
import { RootState } from './store/index.tsx'

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
        <Route path='/cadastro-de-produto' element={<PostFormComponent />} />
        <Route path='/descrição-de-produto/:id' element={<DescriptionProductPage />} />
        <Route path='/editar-o-produto/:name' element={<UpdateProductPage />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
