import { useEffect, useState } from 'react'
import styles from './ProductDetail.module.css'
import { getProduct } from '../api/fakeStoreApi'
import { useParams } from 'react-router-dom'
import type { Product } from '../types/product';
import { formatPrice } from '../utils/formatPrice';

const ProductDetail = () => {

  const {id}= useParams();
  const [product, setProduct]= useState<Product|null>(null);
  const [loading, setLoading]= useState(true);
  const [error, setError]=useState<string|null>(null);


  useEffect(
    ()=> {
      if (!id) return;

      getProduct(Number(id))
        .then(
          (data)=>{
            setProduct(data);
            setLoading(false)
          })
        .catch(
          (err: Error)=>{
            setError(err.message)
            setLoading(false)
          }
      );
    }, [id]
  ); //fine UseEffect

  if(loading) return <p>Attendere...</p>
  if(error) return <p>{error}</p>
  if(!product) return <p>Prodotto non trovato</p>

  return (
    <div className={styles.detail}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <p className={styles.description}>{product.description}</p>
      </div>
    </div>
  );
  
}

export default ProductDetail