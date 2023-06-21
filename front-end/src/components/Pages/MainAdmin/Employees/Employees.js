import React from 'react'

const Employees = ({employe}) => {
  return (
   <>
   
   <tbody>
        <tr>

          <td>{employe.Employee_Name}</td>
          <td>{employe.Phone_Number}</td>
          <td>{employe.Address}</td>
          {/* <td>{emp.Gender}</td> */}
          <td>{employe.Dob}</td>
          <td>{employe.Role}</td>
          <td>{employe.Salary}</td>

          {/* <button className="view-btn">View </button> */}
        </tr>
      </tbody>
   
   
   </>
  )
}

export default Employees