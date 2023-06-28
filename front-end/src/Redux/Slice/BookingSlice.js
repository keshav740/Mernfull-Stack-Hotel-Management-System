import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { addbook, fetchbooks } from '../action/BookingAction'





const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchbooks.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchbooks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchbooks.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })




      .addCase(addbook.pending, state => {
      state.status = 'loading'
      })
      .addCase(addbook.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.item.push(action.payload)
      })
      .addCase(addbook.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })




      // .addCase(updateservice.pending, state => {
      //   state.status = 'loading'
      //   })
      //   .addCase(updateservice.fulfilled, (state, action) => {
      //   state.status = 'succeeded'
      //   console.log(action.payload)
      //   const index = state.data.findIndex((service) => service._id === action.payload._id)
      //   state.data[index] = action.payload
      //   // state.data.push(action.update)
      //   })
      //   .addCase(updateservice.rejected, (state, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message
      //   })



      
      // .addCase(updatebook.pending, state => {
      //   state.status = 'loading'

      //   })
      //   .addCase(updatebook.fulfilled, (state, action) => {
      //   state.status = 'succeeded'
      //   state.data.put(action.payload._id)
      //   })
      //   .addCase(updatebook.rejected, (state, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message
      //   })



        // .addCase(updateservice.pending, (state) => {
        //   state.status = 'loading';
        // })
        // .addCase(updateservice.fulfilled, (state, action) => {
        //   state.status = 'succeeded';
        //   // Update the data state with the updated service information
        //   // Modify this line according to your state structure
        //   state.data = action.payload.id;
        // })
        // .addCase(updateservice.rejected, (state, action) => {
        //   state.status = 'failed';
        //   state.error = action.payload.error.message;
        // });
        
  







    





      }
      })
      
      export default BooksSlice.reducer