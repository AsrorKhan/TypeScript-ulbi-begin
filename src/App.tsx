import React from 'react';
import UsersList from "./components/UsersList";
import {TodoList} from "./components/TodoList";

function App() {
    return (
        <div className="App">
            Users
            <UsersList/>
            <hr/>
            Todos
            <TodoList/>
        </div>
    );
}

export default App;
