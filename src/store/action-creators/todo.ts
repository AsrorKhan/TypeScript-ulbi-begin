import {Dispatch} from "react";
import axios from "axios";
import {TodoAction, TodoActionTypes} from "../../types/todo";


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limits: limit}
            });
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Ошибка при получение список дел'})
        }
    }
}


export function setTodoPage(page: number,): TodoAction{
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}
