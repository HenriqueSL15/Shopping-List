const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/users')

const app = express();
app.use(cors(  
  {
    origin: ["https://shopping-list-alpha-eosin.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }));

app.use(express.json());

mongoose.connect("mongodb+srv://myAtlasDBUser:135790@myatlasclusteredu.ufhaxua.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU")

app.get('/', (req, res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err));
})

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err));
})

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err));
})

app.put('/updateUser/:id',(req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id},{
    item: req.body.item, 
    quantity:req.body.quantity, 
    day:req.body.day
  })
  .then(users => res.json(users))
  .catch(err => res.json(err));
})

app.delete('/deleteUser/:id',(req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is running!")
})
