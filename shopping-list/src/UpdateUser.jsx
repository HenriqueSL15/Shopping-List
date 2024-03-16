import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function UpdateUser() {
  const { id } = useParams();
  const [item,setItem] = useState();
  const [quantity,setQuantity] = useState();
  const [day,setDay] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/'+id)
    .then(result => {console.log(result)
      setItem(result.data.item);
      setQuantity(result.data.quantity);
      setDay(result.data.day);
    })
    .catch(err => console.log(err));
  }, [])

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id,{item, quantity, day})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Edit Item</h2>
          <div className="mb-2">
            <label htmlFor="">Item Name</label>
            <input value={item} onChange={(e) => setItem(e.target.value)} type="text" placeholder="Enter item name" className="form-control"/>
          </div>

          <div className="mb-2">
            <label htmlFor="">Quantity</label>
            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="Enter item quantity" className="form-control"/>
          </div>

          <div className="mb-2">
            <label htmlFor="">Day of the Week</label>
            <input value={day} onChange={(e) => setDay(e.target.value)} type="text" placeholder="Enter day of the week" className="form-control"/>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>      
    </div>
  )
}

export default UpdateUser