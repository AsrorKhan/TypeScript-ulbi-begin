import React, {FC, useEffect} from "react";
import {useTypedSelector} from "../hooks/userTypedSelector";
import {useActions} from "../hooks/useActions";

export const TodoList: FC = () => {
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} {todo.title}</div>
            )}
            <div style={{display: 'flex'}}>
                {pages.map(p =>
                    <div style={{padding: 10, border: p === page ? '2px solid green' : '2px solid gray'}}
                         onClick={() => setTodoPage(p)}>{p}</div>
                )}
            </div>
        </div>
    )
}
