import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addguest, fetchguests } from '../action/GuestAction'




const GuestsSlice = createSlice({
  name: 'guests',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchguests.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchguests.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchguests.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })




      .addCase(addguest.pending, state => {
      state.status = 'loading'
      })
      .addCase(addguest.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.item.push(action.payload)
      })
      .addCase(addguest.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })




    //   .addCase(updateservice.pending, state => {
    //     state.status = 'loading'
    //     })
    //     .addCase(updateservice.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     const index = state.data.findIndex((service) => service.id === action.payload.id)
    //     state.data[index] = action.payload
    //     // state.data.push(action.update)
    //     })
    //     .addCase(updateservice.rejected, (state, action) => {
    //     state.status = 'failed'
    //     state.error = action.error.message
    //     })



      
      // .addCase(updatePost.pending, state => {
      //   state.status = 'loading'

      //   })
      //   .addCase(updatePost.fulfilled, (state, action) => {
      //   state.status = 'succeeded'
      //   state.data.put(action.payload)
      //   })
      //   .addCase(updatePost.rejected, (state, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message
      //   })
  







    





      }
      })
      
      export default GuestsSlice.reducer