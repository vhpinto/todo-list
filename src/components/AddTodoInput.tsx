import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoProps {
    onAddTodo: (description: string) => void;
}

import styles from './AddTodoInput.module.css'

export function AddTodoInput({ onAddTodo }:AddTodoProps) {
    const [ todoDescriptionValue, setTodoDescriptionValue ] = useState('');

    function handleDescriptionValueChange(event: ChangeEvent<HTMLInputElement>) {
        setTodoDescriptionValue(event.target.value)
    }

    function handlesAddTask(event: FormEvent){
        event.preventDefault();

        onAddTodo(todoDescriptionValue);
        setTodoDescriptionValue('');
    }

    return (
        <div >
            <form onSubmit={handlesAddTask} className={styles.addTodo}>
                <input 
                    name='description'
                    type='text'
                    placeholder='Adicione uma nova tarefa'
                    value={todoDescriptionValue}
                    onChange={handleDescriptionValueChange}
                    required
                >

                </input>
                <button type='submit'>
                    <span>Criar</span> 
                    <PlusCircle size={24} />
                </button>
            </form>
        </div>
    )
}