const SET_ALL = "SET_ALL"

const defaultState = {
    currentUser: [],
    
}

export default function attractionReduser(state = defaultState, action){
    switch (action.type) {
        case SET_ALL:
            return{
                ...state,
                currentUser: action.payload.user,
                isAuth: true
            }
        default:
            return state

    }
}

export const setUser = user => ({type: SET_ALL, payload: user})
