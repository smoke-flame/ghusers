import React, {FC, FormEvent, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {IUser} from "../../types/user";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IRepo} from "../../types/repo";
import {clearRepos, fetchRepos} from "../../redux/action-creators/repo";
import {useDispatch} from "react-redux";
import './style.scss'
import RepoList from "../../components/RepoList";

interface ILocation {
    state:IUser,
    pathname:string,
    search:string,
    hash:string
}

const Profile:FC = () => {
    const location:ILocation = useLocation()
    const dispatch = useDispatch();
    const user:IUser = location.state;
    const repos:IRepo[] = useTypedSelector(state => state.repos.repos)
    const [filterValue, setFilterValue] = useState('')
    const navigate = useNavigate();


    const onInput = (event: FormEvent<HTMLInputElement>):void => {
        setFilterValue(event.currentTarget.value)
    }
    const filteredRepos:IRepo[] = repos.filter(repo => repo.name.includes(filterValue))
    const onClick = () => {
        clearRepos()
        navigate('/')
    }

    useEffect(()=> {
        dispatch(fetchRepos(user.repos_url))
    },[user])

    if(!user) {
        return <div>An unknown error has occurred</div>
    }
    return (
        <div className='container'>
            <div className="user">
                <div onClick={onClick} className="user__back"> <span className='user__reverse'>&#10142;</span> Back to search results</div>
                <div className="user__row">
                    <img src={user.avatar_url} className='user__image' alt=''/>
                    <div className="user__info">
                        <p className='user__data'>Login - {user.login}</p>
                        <p className='user__data'> {user.email ? 'Email - ' + user.email : user.login + ' didn\'t specify email' }</p>
                        <p className='user__data'>{user.location ? 'Location - ' + user.location : user.login + ' didn\'t specify location' }</p>
                        <p className='user__data'>{user.followers} Followers</p>
                        <p className='user__data'>{user.following} Following</p>
                    </div>
                </div>
                <p className='user__data bio'>{user.bio ? user.bio : user.login + ' hasn\'t added a profile bio yet' }</p>

                <div className="form">
                    <input
                        value={filterValue}
                        onChange={onInput}
                        type='text'
                        className='form__input'
                        placeholder={`Search for ${user.login}'s Repositories`}
                    />
                </div>

                <RepoList data={filteredRepos}/>
            </div>
        </div>
    );
};

export default Profile;