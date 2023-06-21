import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import { fetchroom,addroom,updatroom } from '../action/RoomAction'

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
            .addCase(fetchroom.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchroom.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.item = action.payload
            })
            .addCase(fetchroom.rejected, (state, action) => {
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

            .addCase(updatroom.pending, state => {
                state.status = 'loading'
            })
            .addCase(updatroom.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // state.item.push(action.payload)
                state.loading = false;
                state.rooms = state.rooms.map((room) =>
                  room.id === action.payload.id ? action.payload : room
                );
            })
            .addCase(updatroom.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })

    }
})

export default RoomSlice.reducer