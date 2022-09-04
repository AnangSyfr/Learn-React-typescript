import React from "react";
import Todo from "../models/Todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((val, index) => (
                <li key={val.id}>{val.text}</li>
            ))}
        </ul>
    );
};

export default Todos;
