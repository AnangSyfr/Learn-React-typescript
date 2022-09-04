import React, { createContext, FC, ReactNode, useState } from 'react'
import Todo from '../models/Todo'

type TodoContextObj = {
    items: Todo[]
    addTodo: (text: string) => void
    removeTodo: (id: string) => void
}

export const TodosContext = createContext<TodoContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
})

const TodosContextProvider: FC<{ children: ReactNode }> = props => {
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = (text: string) => {
        const newTodo = new Todo(text)
        setTodos(prev => prev.concat(newTodo))
    }

    const handleRemoveTodo = (id: string) => {
        setTodos(prev => prev.filter(item => item.id !== id))
    }

    const contextValue: TodoContextObj = {
        items: todos,
        addTodo: handleAddTodo,
        removeTodo: handleRemoveTodo,
    }

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider