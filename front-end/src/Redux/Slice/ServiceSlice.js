import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addsallery, fetchsallerys } from '../action/salleryAction'


const sallerysSlice = createSlice({
  name: 'details',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchsallerys.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchsallerys.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchsallerys.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })


      .addCase(addsallery.pending, state => {
      state.status = 'loading'
      })
      .addCase(addsallery.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.item.push(action.payload)
      })
      .addCase(addsallery.rejected, (state, action) => {
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
      
      export default sallerysSlice.reducer