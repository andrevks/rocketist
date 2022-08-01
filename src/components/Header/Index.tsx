import styles from './Header.module.css';
import todologo from '../../assets/todo-logo.svg'

export function Header(){

  return (
    <header className={styles.header}>
      <img src={todologo} alt='Logo Todo' />
      <div>
        <span className={styles.prefix}>to</span>
        <span className={styles.suffix}>do</span>
      </div>
    </header>
  )
}