import styles from './Home.module.css'

import { getAllProducts, getProductsByCategory } from '../api/fakeStoreApi'
import {useSearchParams } from 'react-router-dom'
import type { Product } from '../types/product';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductCardSkeleton from '../components/Skeleton/ProductCardSkeleton';
import { useEffect, useState } from 'react';


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

  if (loading) {
  return (
    <div aria-busy="true" aria-live="polite">
      <p className={styles.loadingText}>Caricamento prodotti in corso...</p>
      <div className={styles.grid}>
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
      </div>
    </div>
  );
}

  if(error) return <p>{error}</p>
  if (products.length === 0) return <p>Nessun prodotto trovato per questa categoria.</p>


  return (


    <div className={styles.grid}>
      {products.map(
        (product) => (
          <ProductCard key={product.id} product={product} />
        )
      )}
    </div>
  )
}

export default Home