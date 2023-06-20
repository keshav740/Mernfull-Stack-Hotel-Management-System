// import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRoom = createAsyncThunk('Room/fetchRoom', async () => {
    const response = await fetch("http://localhost:4000/api/v1/rooms")
    const item = await response.json()
    return item
  })
  
  export const addRoom = createAsyncThunk('sallerys/addRoom', async (sallery) => {
    const response = await fetch("http://localhost:4000/api/v1/rooms", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
    const item = await response.json()
    return item
  })
