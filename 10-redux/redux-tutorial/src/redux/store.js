/**
 * Create the redux store that holds the redux state
 */

import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user.slice'

// store holds the state
// preloadedState => initialState
export const store = configureStore({
    // reducer: (state, action) => {
    //     debugger;
    //     if (action.type === 'LOGIN') {
    //         return {
    //             ...state,
    //             user: action.payload
    //         }
    //     } else {
    //         return state;
    //     }
        
    // },
    // preloadedState: {
    //     user: { firstName: 'John', lastName: 'Doe'}
    // }

    reducer: {
        user: userSlice.reducer,        
    }
})