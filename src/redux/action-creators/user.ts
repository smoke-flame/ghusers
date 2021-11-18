import axios from 'axios'
import {Dispatch} from "redux";
import {IUser, userAction, userTypes} from "../../types/user";
const { REACT_APP_GITHUB_TOKEN } = process.env;

const APIURL = 'https://api.github.com/'

export const fetchUsers = (name: string) => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type:userTypes.FETCH_USERS})
            const response =  await axios.get(`${APIURL}search/users?q=${name}`, {
                headers: {
                    Authorization: 'token '+ REACT_APP_GITHUB_TOKEN
                }
            })
            const users: IUser[] = response.data.items.map((user:any) => {
                return  {...user, isRepoLoaded:false}
            })
            if (!users.length) {
                dispatch({
                    type:userTypes.FETCH_USERS_ERROR,
                    payload: 'No user with this name was found.'
                })
                return;
            }
            dispatch({type:userTypes.FETCH_USERS_SUCCESS, payload: users })

            for(let user of users) {
                const res:any =  await axios.get(user.url, {
                    headers: {
                        Authorization: 'token '+ REACT_APP_GITHUB_TOKEN
                    }
                });
                dispatch({
                    type:userTypes.FETCH_INFO_SUCCESS,
                    payload: {
                        id:user.id,
                        repoCount: res.data.public_repos,
                        email: res.data.email,
                        created_at: res.data.created_at,
                        bio:  res.data.bio,
                        location: res.data.location,
                        followers:res.data.followers,
                        following:res.data.following,
                    }
                })
            }

        }catch (e) {
            dispatch({
                type:userTypes.FETCH_USERS_ERROR,
                payload: 'Аn error occured while getting users'
            })
        }
    }
}

// (async () => {
//     if(searchValue) {
//         const res:any =  await axios.get(url + 'search/users?q=' + searchValue );
//         const users: IUser[] = res.data.items;
//         for(let user of users) {
//             const repos:any =  await axios.get(user.repos_url);
//             console.log(repos)
//         }
//     }
// })();

