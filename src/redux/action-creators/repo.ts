import axios from 'axios'
import {Dispatch} from "redux";
import {IRepo, repoAction, repoTypes} from "../../types/repo";

const { REACT_APP_GITHUB_TOKEN } = process.env;

export  const fetchRepos = (url:string) => {
    return async (dispatch:Dispatch<repoAction>) => {
        try {
            dispatch({type:repoTypes.FETCH_REPOS})
            const response = await axios.get<IRepo[]>(url+'?per_page=100', {
                headers: {
                    Authorization: 'token '+ REACT_APP_GITHUB_TOKEN
                }
            })
            dispatch({type:repoTypes.FETCH_REPOS_SUCCESS, payload:response.data})

        }catch (e) {
            dispatch({
                type:repoTypes.FETCH_REPOS_ERROR,
                payload: 'Аn error occured while getting repositories'
            })

        }
    }
}

export const clearRepos = ():repoAction => ({
    type: repoTypes.CLEAR_REPOS
})

