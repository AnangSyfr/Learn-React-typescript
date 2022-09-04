import React, { FC, useContext } from 'react'
import Todo from '../models/Todo'
import { TodosContext } from '../store/todo-context'

const Todos: FC = props => {
    const todoCtx = useContext(TodosContext)

    return (
        <ul className='todo-list'>
            {todoCtx.items.map((val, index) => (
                <li key={val.id} onClick={todoCtx.removeTodo.bind(null, val.id)}>
                    {val.text}
                </li>
            ))}
        </ul>
    )
}

export default Todos
