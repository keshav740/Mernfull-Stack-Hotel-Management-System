import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchbooks = createAsyncThunk('books/fetchbooks', async () => {
    const response = await fetch("http://localhost:4000/api/v1/room-bookings")
    const item = await response.json()
    console.log(item)
    return item
  })
  
  export const addbook = createAsyncThunk('books/addbook', async (book) => {
    const response = await fetch("http://localhost:4000/api/v1/room-booking/new", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    const item = await response.json()
    return item
  })

  // export const updatebook = createAsyncThunk('books/updatebook', async (book) => {
  //  console.log("ser",service)
  //   const response = await fetch(`http://localhost:4000/api/v1/room-booking/${book.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(book)
  //   })
  //   const data = await response.json()
  //   return data
  // })


  //   export const updatePost = createAsyncThunk('posts/updatePost', async (post) => {
   
  //   const response = await fetch(`http://localhost:5000/posts/${post.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(post)
  //   })
  //   const data = await response.json()
  //   return data
  // })








 
  




 
  