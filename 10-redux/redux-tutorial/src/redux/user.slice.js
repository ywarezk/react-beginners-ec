import { createSlice, createSelector } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: 'John',
        lastName: 'Doe'
    },
    reducers: {
        setUser: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }
    }
})


const userSelector = (state) => state.user 

export const firstNameSelector = createSelector(
    userSelector,
    (userState) => {
        return userState.firstName
    }
)