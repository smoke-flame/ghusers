import React, {FC} from 'react';
import {IUser} from "../types/user";
import UserListItem from "./UserListItem";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface UserListProps {
    data:IUser[]
}


const UserList:FC<UserListProps> = (props:UserListProps) => {

    const isLoading:boolean = useTypedSelector(state => state.users.isLoading)
    const error: string | null  = useTypedSelector(state=> state.users.error)
    if(isLoading) {
        return (
            <div className='loader'>
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
    if(error) {
        return <h1 className='users__title'>{error}</h1>
    }

    return (
        <>
            {props.data.length
                ?  props.data.map(user => <UserListItem key={user.id} user={user} />)
                : <h2 className='users__title'>Enter the correct name and upload users</h2>
            }
        </>
    );
};

export default UserList;