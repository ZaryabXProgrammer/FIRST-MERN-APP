const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors'); // connect the api to react front end


app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://user123:pakistan8080@cluster0.23y3yoj.mongodb.net/MERN-TUTORIAL?retryWrites=true&w=majority');

app.get('/getUsers', (req, res) => {
    // Use Mongoose to find all documents in the 'Users' collection
    UserModel.find({})
        // Handle the query result using a promise, select all of the data
        .then((result) => {
            // Send the query result back to the client as JSON
            res.json(result);
        })
        // Handle any errors that occur during the query using a promise
        .catch((err) => {
            // Send the error back to the client as JSON
            res.json(err);
        });
});

//post is to add collection to the database,

app.post("/createUser", (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    newUser.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});



app.listen(3001, () => {
    console.log('Server Runs Perfectly');
});
