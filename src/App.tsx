import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import { useEffect, useState } from 'react'


function ProductDetailRoute() {

  const {id}= useParams()

  return <ProductDetail key={id}/>
}

function App() {

  const [theme, setTheme] =useState<'light'|'dark'>('light');

  const toggleTheme= ()=>{
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
}, [theme]);



  return (
    <>
      <BrowserRouter>
        <Header onToggleTheme={toggleTheme} theme={theme} />
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
