import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../api/fakeStoreApi';
import styles from './Header.module.css'

const Header = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(
    () => {
      getAllCategories()
      .then(setCategories)
      .catch(
        () => setCategories([])
      )
    }, []
  );

  return (

    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <h1>Qubica Store</h1>
      </Link>

      <nav className={styles.nav}>
        <ul>
          {
            categories.map(
              (category) => (
                <li key={category}>
                  <Link to={`/?category=${encodeURIComponent(category)}`}>

                    {category}
                  
                  </Link>
                </li>
              )
            )
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;