import './App.css'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <div>
      
      <ProductCard name="Product 2" price="Price: LKR. 4495/-" image="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"  />

      <ProductCard name="Product 3" price="Price: LKR. 455555/-" image="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />

      <ProductCard name="Product 4" price="Price: LKR. 3290/-" image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1170&q=80" />

      <ProductCard name="Product 5" price="Price: LKR. 4990/-" image="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1170&q=80" />


    </div>
  )
}

export default App
