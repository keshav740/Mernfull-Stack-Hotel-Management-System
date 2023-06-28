import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import { addroom, fetchrooms } from '../action/RoomAction'



const RoomSlice = createSlice({
    name: 'rooms',
    initialState: {
        item: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchrooms.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchrooms.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item = action.payload
            })
            .addCase(fetchrooms.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(addroom.pending, state => {
                state.status = 'loading'
            })
            .addCase(addroom.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item.push(action.payload)
            })
            .addCase(addroom.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

    }
})

export default RoomSlice.reducer