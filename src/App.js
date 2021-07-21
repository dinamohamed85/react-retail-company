import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import About from './components/About'
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()

    return data
  }

  return (
    <Router>
      <div className='container'>
        <Header />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              <div className="search">
                <input 
                  type="text"
                  placeholder={"Search.."}
                  value={searchTerm}
                  onChange={(e) => { setsearchTerm(e.target.value); }}
                /></div>

              {products.length > 0 ? (
                <Products
                  products={products} searchTerm={searchTerm}
                />

              ) : (
                'No Products To Show'
              )}
            </>
          )}
        />       
        <Route path='/about' component={About} />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
