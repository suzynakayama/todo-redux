import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <ul
            className="container col s6 center"
            style={{ marginTop: "20px", marginBottom: "20px" }}
        >
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => toggleTodo(todo.id)}
                />
            ))}
        </ul>
    );
};

export default TodoList;
