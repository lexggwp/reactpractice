import React from "react";

type UsersListPropsType = {
    users: { id: string, name: string }[];
    setUsers: (name: string) => void;
}
const UsersList = (props: UsersListPropsType) => {
    console.log('render users')
    return (
        <div>
            {props.users.map(el => {
                return (
                    <div key={el.id}>{el.name}</div>
                )
            })}
            <button onClick={()=>props.setUsers('Senya')}>Add user</button>
        </div>
    )

}

export const UserListMemo = React.memo(UsersList)
