class Todo {
    id: string;
    text: string;

    constructor(textItem: string) {
        this.text = textItem;
        this.id = new Date().toISOString();
    }
}

export default Todo;
