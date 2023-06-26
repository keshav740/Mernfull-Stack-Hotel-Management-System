import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchitems, additems, updateitems } from '../action/AddItemAction'



const AddItemSlice = createSlice({
  name: 'items',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchitems.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchitems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchitems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })


      .addCase(additems.pending, state => {
        state.status = 'loading'
      })
      .addCase(additems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item.push(action.payload)
      })
      .addCase(additems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })

      .addCase(updateitems.pending, state => {
        state.status = 'loading'
      })
      .addCase(updateitems.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const index = state.data.findIndex((post) => post.id === action.payload.id)
        state.data[index] = action.payload
        // state.data.push(action.update)
      })
      .addCase(updateitems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default AddItemSlice.reducer