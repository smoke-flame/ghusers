import React, {FormEvent, useState, FC} from 'react';
import {useDispatch} from "react-redux";
import UserList from "../../components/UserList";

import {fetchUsers} from "../../redux/action-creators/user";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IUser} from "../../types/user";
import './style.scss'


const Search: FC = () => {
    const users:IUser[] = useTypedSelector(state => state.users.users)
    const [searchValue, setSearchValue] = useState('')
    const onInput = (event: FormEvent<HTMLInputElement>):void => {
        setSearchValue(event.currentTarget.value)
    }
    const dispatch = useDispatch()

    const getUsers = () => {
        if(searchValue.trim()) {
            dispatch(fetchUsers(searchValue))
        } else {
            alert('Please enter name')
        }
    }
    return (
        <div className='container'>
            <div className="header">
                <div className="header__form">
                    <input
                        value={searchValue}
                        onChange={onInput}
                        type='text'
                        className='header__input'
                        placeholder='Search for Users'
                    />
                    <button className='header__button' onClick={getUsers}>Search Users</button>
                </div>

            </div>
            <div className="users">
                <UserList data={users}/>
            </div>
        </div>
    );
};

export default Search;