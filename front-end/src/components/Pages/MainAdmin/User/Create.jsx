import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../../Redux/action/CreateAction";
// import { createUser } from "../features/userDetailSlice";



const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");
  };

  
  return (
    <div>
      <h2 className="my-2" style={{textAlign:"center"}}>Fill the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Room_Number</label>
          <input
            type="text"
            name="Room_Number"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>


        <div class="mb-3">
          <label class="form-label">Price</label>
          <input
            type="texy"
            name="Price"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>


        <div class="mb-3">
          <label class="form-label">Room_Type</label>
          <input
            type="text"
            name="Room_Type"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Available_Not</label>
          <input
            type="text"
            name="Available_Not"
            class="form-control"
            onChange={getUserData}
            required
          />
        </div>

        
        {/* <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
            required
          />
          <label class="form-check-label">Male</label>
        </div> */}
        {/* <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label class="form-check-label">Female</label>
        </div> */}

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
