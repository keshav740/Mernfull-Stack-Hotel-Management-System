import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchemployees,addemployees } from '../action/EmployeeAction'



const EmployeeSlice = createSlice({
  name: 'employees',
  initialState: {
    item: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchemployees.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchemployees.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.item = action.payload
      })
      .addCase(fetchemployees.rejected, (state, action) => {state.status = 'failed'
      state.error = action.error.message
      })


      .addCase(addemployees.pending, state => {
      state.status = 'loading'
      })
      .addCase(addemployees.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.item.push(action.payload)
      })
      .addCase(addemployees.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
      })



      
    

      }
      })
      
      export default EmployeeSlice.reducer