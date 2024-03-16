import React from "react";

function UpdateUser() {
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Edit Item</h2>
          <div className="mb-2">
            <label htmlFor="">Item Name</label>
            <input type="text" placeholder="Enter item name" className="form-control"/>
          </div>

          <div className="mb-2">
            <label htmlFor="">Quantity</label>
            <input type="number" placeholder="Enter item quantity" className="form-control"/>
          </div>

          <div className="mb-2">
            <label htmlFor="">Day of the Week</label>
            <input type="text" placeholder="Enter day of the week" className="form-control"/>
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>      
    </div>
  )
}

export default UpdateUser