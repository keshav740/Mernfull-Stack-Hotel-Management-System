import {  createAsyncThunk } from '@reduxjs/toolkit'

export const fetchguests = createAsyncThunk('guests/fetchguests', async () => {
    const response = await fetch("http://localhost:4000/api/v1/guests")
    const item = await response.json()
    console.log(item)
    return item
  })

  
  
  export const addguest = createAsyncThunk('guests/addguest', async (guest) => {
    const response = await fetch("http://localhost:4000/api/v1/guest/new", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(guest)
    })
    const item = await response.json()
    return item
  })

//   export const updateguest = createAsyncThunk('guests/updateguest', async (guest) => {
   
//     const response = await fetch(`http://localhost:4000/api/v1/room-service/${guest.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(service)
//     })
//     const data = await response.json()
//     return data
//   })


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








 
  




 
  