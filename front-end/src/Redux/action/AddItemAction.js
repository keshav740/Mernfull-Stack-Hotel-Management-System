import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchItems = createAsyncThunk('Items/fetchItems', async () => {
    const response = await fetch('http://localhost:4000/api/v1/items')
    const item = await response.json()
    // console.log(item ,"Pooja")
    return item
  })
  
  export const addItems = createAsyncThunk('Items/addItems', async (Items) => {
    const response = await fetch('http://localhost:4000/api/v1/item/new', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(Items)
    })
    const item = await response.json()
    return item
  })
  

  // export const updateitems = createAsyncThunk('posts/updatePost', async (items) => {
   
  //   const response = await fetch(`http://localhost:5007/items${items.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(items)
  //   })
  //   const data = await response.json()
  //   return data
  // })







 
  