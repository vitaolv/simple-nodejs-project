import './App.sass'
import { ProductsListComponent } from './components/ProductsListComponent'
import { FormComponent } from './components/FormComponent'
function App() {

  return (
    <div className='AppBody'>
      <FormComponent />
      <ProductsListComponent />
    </div>
  )
}

export default App
