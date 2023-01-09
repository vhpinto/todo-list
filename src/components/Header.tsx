import styles from './Header.module.css';
import todoLogo from '../assets/todo-logo.svg'

export function Header() {
    return (
        <header  className={styles.header}>
            <div> todo </div>
            {/* <img src={todoLogo} alt="Logotipo do todo"></img> */}
        </header>
    );
}