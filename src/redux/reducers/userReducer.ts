import {IUser, userAction, userState, userTypes} from "../../types/user";


const initialState = {
        users: [],
        isLoading: false,
        error: null,
}

export  const userReducer = (state:userState = initialState, action:userAction): userState => {
        switch (action.type) {
                case userTypes.FETCH_USERS:
                        return {...state, isLoading: true, error:null}
                case userTypes.FETCH_USERS_SUCCESS:
                        return {...state, users:action.payload, isLoading:false}
                case userTypes.FETCH_USERS_ERROR:
                        return {...state, users: [], error: action.payload, isLoading:false}
                case userTypes.FETCH_INFO_SUCCESS:
                        const updatedUsers:IUser[] = state.users.map(user=> {
                               return  user.id === action.payload.id
                                    ? {...user, isRepoLoaded:true, ...action.payload} : user
                        })
                        return {...state, users:updatedUsers}
                default:
                        return state
        }

}