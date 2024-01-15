import './App.sass'
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
