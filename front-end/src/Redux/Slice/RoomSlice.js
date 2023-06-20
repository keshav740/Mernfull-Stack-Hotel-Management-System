import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import { fetchRoom,addRoom } from '../action/RoomAction'

const RoomSlice = createSlice({
    name: 'Rooms',
    initialState: {
        item: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchRoom.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchRoom.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item = action.payload
            })
            .addCase(fetchRoom.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

            .addCase(addRoom.pending, state => {
                state.status = 'loading'
            })
            .addCase(addRoom.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item.push(action.payload)
            })
            .addCase(addRoom.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

    }
})

export default RoomSlice.reducer