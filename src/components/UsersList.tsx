import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/userTypedSelector";
import {useActions} from "../hooks/useActions";

const UsersList: FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
     const {fetchUsers} = useActions()
    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {users.map(user => (
                <div>{user.name}</div>
            ))}
        </div>
    );
};

export default UsersList;
