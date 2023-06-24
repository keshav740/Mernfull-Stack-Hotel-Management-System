// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { createUser,showUser,deleteUser,updateUser } from '../action/CreateAction';



// const CreateSlice = createSlice({
//   name: 'rooms',
//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//     searchData: [],
//   },
//   reducers: {
//     searchUser: (state, action) => {
//       console.log(action.payload);
//       state.searchData = action.payload;
//     },
//   },

//   extraReducers: {
//     [createUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [createUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users.push(action.payload);
//     },
//     [createUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//       // state.error = action.error.message
//       // state.error = action.payload;
      
//     },
//     [showUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [showUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//     },
//     [showUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     [deleteUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [deleteUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       const { id } = action.payload;
//       if (id) {
//         state.users = state.users.filter((ele) => ele.id !== id);
//       }
//     },
//     [deleteUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     [updateUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [updateUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users = state.users.map((ele) =>
//         ele.id === action.payload.id ? action.payload : ele
//       );
//     },
//     [updateUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     // state.error = action.error.message
//     // state.error = action.payload;
//     },
//   },
// });
      
//       export default CreateSlice.reducer
//     //   export const { searchUser } = rooms.actions;