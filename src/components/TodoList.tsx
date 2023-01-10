import { ClipboardText } from 'phosphor-react'

import styles from './TodoList.module.css'

export function TodoList () {
    return (
        <div className={styles.todoList}>
            <header>
                <p className={styles.tarefasCriadas}>Tarefas criadas <span> 0 </span></p>
                <p className={styles.tarefasConcluidas}>Concluídas <span> 0 </span></p>
            </header>
            <div>
                <ClipboardText size={24} />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}