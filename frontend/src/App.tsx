import './App.sass'
import './components/DeleteButtonComponent/styles/deleteButton.sass'
import './components/PrimaryButton/styles/primaryButton.sass'
import './components/SecondaryButton/styles/secondaryButton.sass'

import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'

import { ProductFormPage } from './pages/ProductFormPage.tsx/ProductFormPage.tsx'
import { HeaderComponent } from './components/parcialComponents/HeaderComponent/Header.tsx'
import { FooterComponent } from './components/parcialComponents/FooterComponent/Footer.tsx'
import { DescriptionProductPage } from './pages/DescriptionPage/DescriptionProductPage.tsx'
import { ModalConfirmToDeleteComponent } from './components/ModalComponent/ModalConfirmToDeleteComponent.tsx'

import { Home } from './pages/HomePage/Home.tsx'
import { LoginPage } from './pages/LoginPage/LoginPage.tsx'
import { UpdateProductPage } from './pages/UpdatePage/UpdateProductPage.tsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPages.tsx'

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
  const showModal = useSelector((state: RootState) => state.modalConfirm.modalIsOpen);
  const productId = useSelector((state: RootState) => state.productToDelete?.id);
  const productName = useSelector((state: RootState) => state.productToDelete?.productName);

  return (
    <div className='AppBody'>
      <HeaderComponent />
      {showModal && productId && productName &&
        (
          <ModalConfirmToDeleteComponent
            textHeader={`Deletar o produto ${productName}`}
            textAlert="Deseja mesmo excluir este produto da lista?"
            productId={productId}
          />)}
      <Routes>
        <Route path='/' element={<RootRoute />} />
        <Route path='/home' index element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cadastro-de-produto' element={<ProductFormPage />} />
        <Route path='/descrição-de-produto/:id' element={<DescriptionProductPage />} />
        <Route path='/editar-o-produto/:name' element={<UpdateProductPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
