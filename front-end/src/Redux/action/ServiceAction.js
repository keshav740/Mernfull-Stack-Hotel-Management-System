import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchservices = createAsyncThunk('services/fetchservices', async () => {
    const response = await fetch("http://localhost:4000/api/v1/room-services")
    const item = await response.json()
    return item
  })
  
  export const addservice = createAsyncThunk('services/addservice', async (service) => {
    const response = await fetch("http://localhost:4000/api/v1/room-service/new", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(service)
    })
    const item = await response.json()
    return item
  })

  export const updateservice = createAsyncThunk('services/updateservice', async (service) => {
   console.log("ser",service)
    const response = await fetch(`http://localhost:4000/api/v1/room-service/${service.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(service)
    })
    const data = await response.json()
    return data
  })


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








 
  




 
  