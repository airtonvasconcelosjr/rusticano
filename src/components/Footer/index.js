import styles from './Footer.module.scss';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const iconeProps = {
  color: 'white',
  size: 24,
}

const currentYear = new Date().getFullYear(); 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://www.instagram.com/rusticano.b">
          <FaInstagram {...iconeProps} />
        </a>
        <a href="https://www.whatsapp.com">
          <FaWhatsapp {...iconeProps} />
        </a>
      </div>
      <span>
        Todos os direitos reservados &copy; 2019-{currentYear} 
      </span>
    </footer>
  )
}
