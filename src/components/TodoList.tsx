import { ClipboardText } from 'phosphor-react'
import { useState } from 'react';
import { Todo } from './Todo';

import styles from './TodoList.module.css'

interface Todo {
    id: string,
    description: string;
    isDone: boolean;
}

export function TodoList () {
    const [ todoList, setTodoList ] = useState([
        { 
            id: '1',
            description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isDone: false
        },
        { 
            id: '2',
            description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer 2.',
            isDone: true
        },
    ]);

    function toggleIsDone (id:string) {
        const todoListWithTaskToggled = todoList.map((todo) => {
            if (todo.id === id){
                todo.isDone = !todo.isDone;
            }
            return todo;
        });

        setTodoList(todoListWithTaskToggled);
    }

    function deleteTask(id: string) {
        const todoListWithoutDeletedOne = todoList.filter(todo =>{
            return todo.id !== id;
        });

        setTodoList(todoListWithoutDeletedOne);
    }

    function arrayCount<T>(arr: T[], predicate: (elem: T, idx: number) => boolean) {
        return arr.reduce((prev, curr, idx) => prev + (predicate(curr, idx) ? 1 : 0), 0)
    }

    const completedTasks = arrayCount(todoList, todo => todo.isDone);

    const tasksCount = todoList.length;

    const isTodoListEmpty = todoList.length === 0 ? true : false;

    return (
        <div className={styles.todoList}>
            <header>
                <p className={styles.tarefasCriadas}>Tarefas criadas <span> {tasksCount} </span></p>
                <p className={styles.tarefasConcluidas}>Concluídas <span> {completedTasks} de {tasksCount} </span></p>
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
                            <Todo 
                                key={todo.id}
                                id={todo.id}
                                description={todo.description}
                                isDone={todo.isDone}
                                onToggleIsDone={toggleIsDone}
                                onDeleteTask={deleteTask}
                            />
                        )

                    })
                }
        </div>
    )
}