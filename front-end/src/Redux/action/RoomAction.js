import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRoom = createAsyncThunk('Rooms/fetchRoom', async () => {
   
    const response = await fetch("http://localhost:4000/api/v1/rooms")
    const item = await response.json()
    console.log(item)
    return item
    
  })
  
  export const addRoom = createAsyncThunk('Rooms/addRoom', async (Rooms) => {
    const response = await fetch("http://localhost:4000/api/v1/rooms/new", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Rooms)
    })
    const item = await response.json()
    return item
  })
