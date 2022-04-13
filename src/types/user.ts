export interface IUserState {
    users: any[];
    loading: boolean;
    error: null | string;
}



export enum IUserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUserAction {
    type: IUserActionTypes.FETCH_USERS
}

interface FetchUserActionSuccess {
    type: IUserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchUserActionError {
    type: IUserActionTypes.FETCH_USERS_ERROR
    payload: string
}


export type UserAction = FetchUserAction | FetchUserActionSuccess | FetchUserActionError
