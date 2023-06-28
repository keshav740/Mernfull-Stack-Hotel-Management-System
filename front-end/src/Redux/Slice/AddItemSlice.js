import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchItems, addItems,  } from '../action/AddItemAction'



const AddItemSlice = createSlice({
  name: 'Items',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchItems.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })


      .addCase(addItems.pending, state => {
        state.status = 'loading'
      })
      .addCase(addItems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item.push(action.payload)
      })
      .addCase(addItems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })

      // .addCase(updateitems.pending, state => {
      //   state.status = 'loading'
      // })
      // .addCase(updateitems.fulfilled, (state, action) => {
      //   state.status = 'succeeded'
      //   const index = state.data.findIndex((item) => item.id === action.payload.id)
      //   state.data[index] = action.payload
      //   state.data.push(action.update)
      // })
      // .addCase(updateitems.rejected, (state, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message
      // })
  }
})

export default AddItemSlice.reducer