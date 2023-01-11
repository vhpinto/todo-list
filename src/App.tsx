import { Header } from './components/Header'
import styles from './App.module.css'

import './global.css'
import { AddTodoInput } from './components/AddTodoInput'
import { TodoList } from './components/TodoList'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <TodoList />
        </main>
      </div>
    </div>
  )
}
