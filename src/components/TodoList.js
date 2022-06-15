import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
const TodoList = ({todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => { 
    return (
        <div className = "TodoList">
            {todos.map(todo => (
                <TodoItem 
                    todo = {todo} 
                    key = {todo.id} 
                    onCheckToggle = {onCheckToggle} 
                    onInsertToggle = {onInsertToggle}
                    onChangeSelectedTodo = {onChangeSelectedTodo}
                />
            ))}
        </div>
    );
};
export default TodoList;