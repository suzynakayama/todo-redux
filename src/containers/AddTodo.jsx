import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ dispatch }) => {
    let input;

    const handleSubmit = evt => {
        evt.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addTodo(input.value));
        input.value = "";
    };

    return (
        <div className="container col s6 center">
            <form onSubmit={handleSubmit} className="input-field inline">
                <input ref={node => (input = node)} />
                <button className="btn waves-effect waves-light" type="submit">
                    Add
                </button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
