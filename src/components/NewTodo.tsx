import React, { FC, FormEvent, useContext, useRef } from 'react'
import { TodosContext } from '../store/todo-context'

const NewTodo: FC = () => {
    const todoCtx = useContext(TodosContext)
    const todoText = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const formData = todoText.current!.value
        if (formData?.trim().length === 0) {
            return
        }

        todoCtx.addTodo(formData)
        todoText.current!.value = ''
    }

    return (
        <form onSubmit={handleSubmit} className='form-input'>
            <label htmlFor='' className='form-label'>
                Todo
            </label>
            <input
                type='text'
                name='todo_text'
                id='todo_text'
                ref={todoText}
                className='form-control'
            />
            <button className='form-button'>Add Todo </button>
        </form>
    )
}

export default NewTodo
