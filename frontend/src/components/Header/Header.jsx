import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/logo.svg" alt="La Orden Suprema" className={styles.logoImage} />
      </Link>
      
      <nav className={styles.nav}>
        <button className={styles.navButton} aria-label="Inicio" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </button>
        <button className={styles.navButton} aria-label="AboutUs" onClick={() => navigate('/aboutus')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        </button>
        <button className={styles.navButton} aria-label="Reseñas" onClick={() => navigate('/reviews')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </button>
        <button className={styles.navButton} aria-label="Clasificación" onClick={() => navigate('/leaderboard')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 3h10c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v14h10V5H7zm2 2h6v2H9V7zm0 4h6v2H9v-2z"/>
          </svg>
        </button>
      </nav>

      <div className={styles.authSection}>
        <img src="/spain-flag.svg" alt="Español" className={styles.flag} />
        <button className={styles.loginButton}>
          INICIAR SESIÓN
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
