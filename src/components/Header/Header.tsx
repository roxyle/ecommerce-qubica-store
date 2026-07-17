import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../api/fakeStoreApi';
import styles from './Header.module.css'


type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};


const Header = ({ theme, onToggleTheme }: HeaderProps) => {
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
        <span className={styles.logoMark} aria-hidden="true">QS</span>
        <h1>Qubica Store</h1>
      </Link>

      <button
        type="button"
        className={styles.themeToggle}
        onClick={onToggleTheme}
        aria-label="Cambia tema visivo"
      >
        {theme === 'light' ? '🌛 Dark mode' : '🌞 Light mode'}
      </button>

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