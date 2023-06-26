import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchemployees = createAsyncThunk('employees/fetchemployees', async () => {
    const response = await fetch("http://localhost:4000/api/v1/employees")
    const item = await response.json()
    // console.log("saloni")
    return item
  })
  
  export const addemployees = createAsyncThunk('employees/addemployees', async (employees) => {
    const response = await fetch("http://localhost:4000/api/v1/employee/new", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employees)
    })
    const item = await response.json()
    return item
  })









 
  