import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchitems = createAsyncThunk('items/fetchitems', async () => {
    const response = await fetch('http://localhost:5007/items')
    const item = await response.json()
    return item
  })
  
  export const additems = createAsyncThunk('items/additems', async (items) => {
    const response = await fetch('http://localhost:5007/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    })
    const item = await response.json()
    return item
  })

  export const updateitems = createAsyncThunk('posts/updatePost', async (items) => {
   
    const response = await fetch(`http://localhost:5007/items${items.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    })
    const data = await response.json()
    return data
  })







 
  