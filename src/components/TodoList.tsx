import { ClipboardText } from 'phosphor-react'
import { Todo } from './Todo';

import styles from './TodoList.module.css'

interface Todo {
    description: string;
}

const todoList: Todo[] = [{description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'}];

export function TodoList () {
    const isTodoListEmpty = todoList.length === 0 ? true : false;

    return (
        <div className={styles.todoList}>
            <header>
                <p className={styles.tarefasCriadas}>Tarefas criadas <span> 0 </span></p>
                <p className={styles.tarefasConcluidas}>Concluídas <span> 0 </span></p>
            </header>
                { 
                    isTodoListEmpty && 
                
                    <div className={styles.emptyList}>
                        <ClipboardText size={56} />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                }
                { 
                    !isTodoListEmpty && 
                
                    todoList.map((todo) => {
                        return (
                            <Todo />
                        )

                    })
                }
        </div>
    )
}