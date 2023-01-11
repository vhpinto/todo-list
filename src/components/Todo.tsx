import { Circle, CheckCircle, Trash } from 'phosphor-react'

import styles from './Todo.module.css'

export interface TodoProps {
    id: string;
    description: string;
    isDone: boolean;
    onToggleIsDone: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function Todo ({ 
                        id,
                        description,
                        isDone,
                        onToggleIsDone,
                        onDeleteTask,
                      }:TodoProps) {

    function handlesToggleDone()
    {
        onToggleIsDone(id)
    };

    function handlesDeleteTask() {
        onDeleteTask(id)
    }

    return (
        <div className={styles.todo}>
            {
                isDone && 
                <a 
                    href='#' 
                    className={styles.done}
                    onClick={handlesToggleDone}
                >
                    <CheckCircle size={24} weight='fill' />
                </a>
            }
            {
                !isDone && 
                <a 
                    href='#'
                    className={styles.notDone}
                    onClick={handlesToggleDone}
                >
                    <Circle size={24}/>
                </a>
            }
            <span className={isDone ? styles.doneText : styles.notDoneText}>{description}</span>
            <button onClick={handlesDeleteTask}>
                <Trash size={24} />
            </button>
        </div>
    )
}