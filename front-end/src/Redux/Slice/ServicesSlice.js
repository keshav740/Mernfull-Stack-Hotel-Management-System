import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addservice, fetchservices } from '../action/ServiceAction'




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