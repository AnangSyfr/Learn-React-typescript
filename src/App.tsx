import { FC, useState } from 'react'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/Todo'
import TodosContextProvider from './store/todo-context'

const App: FC = () => {
    return (
        <div className='form-container'>
            <h1>Todo List</h1>
            <TodosContextProvider>
                <NewTodo />
                <Todos />
            </TodosContextProvider>
        </div>
    )
}

export default App
