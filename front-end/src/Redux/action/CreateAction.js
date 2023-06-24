// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// //create action
// export const createUser = createAsyncThunk(
//   "createUser",
//   async (data, { rejectWithValue }) => {
//     console.log("data", data);
//     const response = await fetch(
//       "http://localhost:4000/api/v1/room/new",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     try {
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// //read action
// export const showUser = createAsyncThunk(
//   "showUser",
//   async (args, { rejectWithValue }) => {
//     const response = await fetch(
//       "http://localhost:4000/api/v1/rooms"
//     );

//     try {
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
// //delete action
// export const deleteUser = createAsyncThunk(
//   "deleteUser",
//   async (id, { rejectWithValue }) => {
//     const response = await fetch(
//       `http://localhost:4000/api/v1/rooms${id}`,
//       { method: "DELETE" }
//     );

//     try {
//       const result = await response.json();
//       console.log(result);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// //update action
// export const updateUser = createAsyncThunk(
//   "updateUser",
//   async (data, { rejectWithValue }) => {
//     console.log("updated data", data);
//     const response = await fetch(
//       `http://localhost:4000/api/v1/rooms/${data.id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     try {
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );