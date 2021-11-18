export interface IUser {
    id:number,
    login: string,
    repoCount: number,
    repos_url: string,
    isRepoLoaded: boolean,
    avatar_url: string,
    url:string,
    email: string | null,
    bio: string,
    location: string,
    created_at: string,
    followers:number,
    following:number
}

export interface userState {
    users: IUser[],
    isLoading: boolean,
    error: string | null,
}
export enum userTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    FETCH_INFO_SUCCESS =  'FETCH_INFO_SUCCESS',

}

interface FetchUsersAction {
    type: userTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: userTypes.FETCH_USERS_SUCCESS;
    payload: IUser[];
}
interface FetchUsersErrorAction {
    type: userTypes.FETCH_USERS_ERROR;
    payload: string;
}


interface FetchInfoSuccessAction {
    type: userTypes.FETCH_INFO_SUCCESS;
    payload: {
        id:number,
        repoCount:number,
        email: string | null,
        bio: string,
        location: string,
        created_at: string,
        followers:number,
        following:number
    }
}





export type  userAction =
      FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction
    | FetchInfoSuccessAction
