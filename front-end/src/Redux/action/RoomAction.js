import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchrooms = createAsyncThunk('rooms/fetchrooms', async () => {
    const response = await fetch("http://localhost:4000/api/v1/rooms")
    const item = await response.json()
    console.log(item,"saloni")
    return item
    
  })
  
  export const addroom = createAsyncThunk('rooms/addroom', async (rooms) => {
    const response = await fetch("http://localhost:4000/api/v1/rooms/new", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rooms)
    })
    const item = await response.json()
    return item
  })
