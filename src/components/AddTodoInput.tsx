import { PlusCircle } from "phosphor-react"

import styles from './AddTodoInput.module.css'

export function AddTodoInput() {
    return (
        <div className={styles.addTodo}>
            <input 
                type='text'
                placeholder='Acicione uma nova tarefa'
            >

            </input>
            <button>
                <span>Criar</span> 
                <PlusCircle size={24} />
            </button>
        </div>
    )
}