import React, { useEffect, useState } from 'react'

import { getProduct } from '../api/fakeStoreApi'
import { useParams } from 'react-router-dom'
import type { Product } from '../types/product';

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
    <>
    <div>
      <h2>{product.title}</h2>
      <p>€ {product.price}</p>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <p>{product.description}</p>




    </div>

    </>
  )
}

export default ProductDetail