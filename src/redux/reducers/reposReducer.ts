import {repoAction, repoState, repoTypes} from "../../types/repo";


const initialState:repoState = {
    repos: [],
    isLoading: false,
    error: null,
}

export  const reposReducer = (state:repoState = initialState, action:repoAction): repoState => {
    switch (action.type) {
        case repoTypes.FETCH_REPOS:
            return {...state, isLoading:true}
        case repoTypes.FETCH_REPOS_SUCCESS:
            return {...state, repos: action.payload, isLoading:false}
        case repoTypes.FETCH_REPOS_ERROR:
            return {repos: [], isLoading:false, error:action.payload}
        case repoTypes.CLEAR_REPOS:
            return {repos: [], isLoading:false, error:null}

        default:
            return state
    }

}

