
import userTypes from "./user.types";

const INTIAL_STATE = {
    currentUser : null,
    signinSuccess: false,
    signUpError : [],
    signUpSuccess: false

}

const userReducer = (state= INTIAL_STATE, action) => {
    switch(action.type){
        case userTypes.SET_CURRENT_USER:
        return{
            ...state,
            currentUser: action.payload
            
        }
        case userTypes.SIGN_IN_SUCCESS: 
        return {
            ...state,
            signInSuccess: action.payload
        }
        case userTypes.SIGN_UP_ERROR:
            return{
                ...state,
                signUpError: action.payload 
            }
            case userTypes.SIGN_UP_SUCCESS: 
            return{
                ...state,
                signUpSuccess: action.payload
            }
        
        default:
         return state
    }
}
export default userReducer