import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUser } from '../../api/auth'

const userSlicer = createSlice({
    name: 'user',
    initialState: {
        account: null,
        error: null,
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getUser.fulfilled, (state, action) => {
                delete action.payload.password
                state.account = action.payload
                state.error = null
            })
            .addCase(getUser.rejected, (state, action) => {
                state.error = action.payload
            })
    },
})

const userReducer = userSlicer.reducer

const getUser = createAsyncThunk('user/getUser', async ({ email, password }, { rejectWithValue }) => {
    const response = await fetchUser(email, password)
    if (response === null) return rejectWithValue('Mohon periksa kembali email atau password')
    return response
})

export {
    userReducer,
    getUser,
}