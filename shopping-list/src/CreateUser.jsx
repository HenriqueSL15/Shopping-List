import React, {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [item,setItem] = useState();
  const [quantity,setQuantity] = useState();
  const [day,setDay] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{item, quantity, day})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Item</h2>
          <div className="mb-2">
            <label htmlFor="">Item Name</label>
            <input type="text" placeholder="Enter item name" className="form-control"
            onChange={(e) => setItem(e.target.value)}/>
          </div>

          <div className="mb-2">
            <label htmlFor="">Quantity</label>
            <input type="number" placeholder="Enter item quantity" className="form-control"
            onChange={(e) => setQuantity(e.target.value)}/>
          </div>

          <div className="mb-2">
            <label htmlFor="">Day of the Week</label>
            <input type="text" placeholder="Enter day of the week" className="form-control"
            onChange={(e) => setDay(e.target.value)}/>
          </div>
          <button className="btn btn-success">Add</button>
        </form>
      </div>      
    </div>
  )
}

export default CreateUser