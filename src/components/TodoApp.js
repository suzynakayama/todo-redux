import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const TodoApp = () => {
    return (
        <div>
            <h2 className="center pink-text" style={{ marginTop: "80px" }}>
                My Todo List
            </h2>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
};

export default TodoApp;
