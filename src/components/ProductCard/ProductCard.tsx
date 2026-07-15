import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';

type ProductCardProps = {
  product: Product;
}

const ProductCard = ( 
  
  {product}:ProductCardProps) => {

  return (

    <Link to={`/product/${product.id}`}>

      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <span>{product.price}</span>
    </Link>

  )

}

export default ProductCard