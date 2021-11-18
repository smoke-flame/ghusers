export interface IRepo {
    id:number,
    html_url: string,
    name: string,
    forks_count:number,
    stargazers_count: number
}

export interface repoState {
    repos:IRepo[],
    isLoading:boolean,
    error: string | null
}

export enum repoTypes {
    FETCH_REPOS = 'FETCH_REPOS',
    FETCH_REPOS_SUCCESS ='FETCH_REPOS_SUCCESS',
    FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR',
    CLEAR_REPOS = 'CLEAR_REPOS'
}

interface fetchReposAction {
    type:repoTypes.FETCH_REPOS
}
interface clearReposAction {
    type:repoTypes.CLEAR_REPOS
}

interface fetchReposSuccessAction {
    type:repoTypes.FETCH_REPOS_SUCCESS,
    payload: IRepo[]
}

interface fetchReposErrorAction {
    type:repoTypes.FETCH_REPOS_ERROR,
    payload: string
}

export type repoAction =
      fetchReposAction
    | fetchReposSuccessAction
    | fetchReposErrorAction
    | clearReposAction