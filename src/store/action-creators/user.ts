import {Dispatch} from "react";
import {IUserActionTypes, UserAction} from "../../types/user";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: IUserActionTypes.FETCH_USERS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(()=>{
                dispatch({type: IUserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({type: IUserActionTypes.FETCH_USERS_ERROR, payload: 'Ошибка при получение список пользователей'})
        }
    }
}
