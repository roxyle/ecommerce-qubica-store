import React, { useEffect, useState } from 'react'

import { getAllProducts, getProductsByCategory } from '../api/fakeStoreApi'
import {useSearchParams } from 'react-router-dom'
import type { Product } from '../types/product';
import ProductCard from '../components/ProductCard/ProductCard';


const Home = () => {
  const [products, setProducts]= useState<Product[]>([]);
  const [loading, setLoading]= useState(true);
  const [error, setError]=useState<string|null>(null);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");



  useEffect(
    ()=>{
      const request = category? getProductsByCategory(category) : getAllProducts()

      request.then(
        (data)=>{
          setProducts(data)
          setLoading(false)
        }
      )
      .catch(err => {
        setError(err.message);
        setLoading(false);
        }
      )

    }, [category]
  )

  if(loading) return <p>Attendere...</p>
  if(error) return <p>{error}</p>
  if (products.length === 0) return <p>Nessun prodotto trovato per questa categoria.</p>


  return (

    <div>
      {
        products.map(
          (product) => (
            <ProductCard key={product.id} product={product} />
          )
        )
      }
    </div>
  )
}

export default Home