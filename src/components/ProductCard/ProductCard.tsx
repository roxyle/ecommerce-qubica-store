import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';
import styles from './ProductCard.module.css'
import { formatPrice } from '../../utils/formatPrice';

type ProductCardProps = {
  product: Product;
}

const ProductCard = ( 
  
  {product}:ProductCardProps) => {

  return (

    <Link className={styles.card} to={`/product/${product.id}`}>

      <img className={styles.image} src={product.image} alt={product.title} />
      <div className={styles.info}>
        <h3>{product.title}</h3>
        <span>{formatPrice(product.price)}</span>
      </div>
    </Link>

  )

}

export default ProductCard