export const initialState = {
    user: JSON.parse(localStorage.getItem('user'))
}

export const reducer =(action, state) => {
    switch(action.type) {
        case 'ADD_USER': {
            // if(action.user) {
                console.log('serring')
                localStorage.setItem('user', action.user)
            // }
            return {
                ...state, 
                user: action.user
            }
        }
        case 'GET_USER': {
            const user = localStorage.getItem('user');
            console.log(user);
            // if(user) {
            //     return {
            //         ...state, 
            //         user
            //     }
            // } else {
            //     console.log('return')
            //     return state;
            // }
        }
        default:
            return state
    }
        
}
