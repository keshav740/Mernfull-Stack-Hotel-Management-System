import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addservice, fetchservices, updateservice } from '../action/ServiceAction'




const ServicesSlice = createSlice({
  name: 'services',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchservices.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchservices.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchservices.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })




      .addCase(addservice.pending, state => {
      state.status = 'loading'
      })
      .addCase(addservice.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.item.push(action.payload)
      })
      .addCase(addservice.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })




      .addCase(updateservice.pending, state => {
        state.status = 'loading'
        })
        .addCase(updateservice.fulfilled, (state, action) => {
        state.status = 'succeeded'
        console.log(action.payload)
        const index = state.data.findIndex((service) => service._id === action.payload._id)

        state.data[index] = action.payload

        
        // state.data.push(action.update)
        })
        .addCase(updateservice.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
        })



      
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
      
      export default ServicesSlice.reducer