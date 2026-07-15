import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'


function ProductDetailRoute() {

  const {id}= useParams()

  return <ProductDetail key={id}/>
}

function App() {



  return (
    <>
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product/:id" element={<ProductDetailRoute/>} />


          </Routes>

        </main>
      
      </BrowserRouter>
    
      
    </>
  )
}

export default App
