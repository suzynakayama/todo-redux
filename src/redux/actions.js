// Actions Types
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// Other Constants
export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETE: "SHOW_COMPLETE",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

// Action Creators

let nextTodoId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});
