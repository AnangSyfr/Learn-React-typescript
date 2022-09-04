class Todo {
    id: string
    text: string

    constructor(textItem: string) {
        this.text = textItem
        this.id = Math.random().toString()
    }
}

export default Todo
