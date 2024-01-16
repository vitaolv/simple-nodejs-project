import './App.sass'
import './styles/deleteButton.sass'
import './styles/primaryButton.sass'
import './styles/secundaryButton.sass'


import { ProductsListComponent } from './components/ProductsListComponent'
import { FormComponent } from './components/FormComponent'
import { HeaderComponent } from './components/Header'

function App() {
  return (
    <div className='AppBody'>
      <HeaderComponent />
      <FormComponent />
      <ProductsListComponent />
    </div>
  )
}

export default App
