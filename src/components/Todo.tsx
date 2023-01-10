import { Circle, CheckCircle, Trash } from 'phosphor-react'

import styles from './Todo.module.css'

export function Todo () {
    return (
        <div className={styles.todo}>
            <a href='#' className={styles.checked}><Circle size={24}/> </a>
            <a href='#' className={styles.checked}><CheckCircle size={24} /> </a>
            
            
            <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <button>
                <Trash size={24} />
            </button>
        </div>
    )
}