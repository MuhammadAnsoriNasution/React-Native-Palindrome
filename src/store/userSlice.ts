import { createSlice } from '@reduxjs/toolkit'
import { typeDatauser } from '../hook/UserHook'


type state = {
    profile: typeDatauser | null
}
const initialState: state = {
    profile: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload
        },
    }
})

export const { setProfile } = profileSlice.actions
export default profileSlice.reducer