/**
 * Create the redux store that holds the redux state
 */

import { configureStore } from '@reduxjs/toolkit'

// store holds the state
// preloadedState => initialState
export const store = configureStore({
    reducer: (prviousValue) => prviousValue,
    preloadedState: {
        user: { firstName: 'Yariv', lastName: 'Katz'}
    }
})