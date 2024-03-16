import React, {useState} from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([{
    Item: 'Banana',
    Quantity: 5,
    Day: 'Wednesday'
  }]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Day</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return (
                <tr>
                  <td>{user.Item}</td>
                  <td>{user.Quantity}</td>
                  <td>{user.Day}</td>
                  <td>
                    <Link to="/update">
                      <button className="btn btn-primary me-2">Edit</button>
                    </Link>
                    <Link to="/delete">
                      <button className="btn btn-danger">Delete</button>
                    </Link>
                    </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users