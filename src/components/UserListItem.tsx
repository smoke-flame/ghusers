import React, {FC} from 'react';
import {IUser} from "../types/user";
import {Link } from "react-router-dom";

interface UserListItemProps {
    user:IUser
}

const UserListItem:FC<UserListItemProps> = (props: UserListItemProps) => {

    return (
        <Link to={'profile/'+props.user.id} state={props.user}  className='users__item'>
           <img className='users__image' src={props.user.avatar_url} alt='' />
            <h4 className='users__name'>{props.user.login}</h4>
            <div className='users__repos'>
                Repo: {
                    props.user.isRepoLoaded
                    ? props.user.repoCount === 100 ? '100+': props.user.repoCount
                    : <div className="lds-ripple"><div></div><div></div></div>
                }
            </div>
        </Link>
    );
};

export default UserListItem;