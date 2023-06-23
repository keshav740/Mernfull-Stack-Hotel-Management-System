import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchroom = createAsyncThunk('rooms/fetchroom', async () => {
   
    const response = await fetch("http://localhost:4000/api/v1/rooms")
    const item = await response.json()
    return item
    
  })
  
  export const addroom = createAsyncThunk('rooms/addroom', async (rooms) => {
    const response = await fetch("http://localhost:4000/api/v1/room/new", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rooms)
    })
    const item = await response.json()
    return item
  })

  export const updatroom = createAsyncThunk('rooms/updatroom', async (rooms) => {
    const response = await fetch(`http://localhost:4000/api/v1/rooms//${rooms.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rooms)
    })
    const data = await response.json()
    return data
  })



  // export const updatroom = createAsyncThunk("rooms/updatroom",async (rooms, { rejectWithValue }) => {
  //     console.log("updated data", rooms);
  //     const response = await fetch(
  //       `http://localhost:4000/api/v1/rooms/${rooms.id}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(rooms),
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


  // export const deleteroom = createAsyncThunk(
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