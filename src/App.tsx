import Todos from "./components/Todos";
import Todo from "./models/Todo";

const App: React.FC = () => {
    const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
    return (
        <div>
            <h1>Hello World</h1>
            <Todos items={todos} />
        </div>
    );
};

export default App;
