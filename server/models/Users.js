// Import the Mongoose library
const mongoose = require('mongoose')

// Define a new Mongoose schema for the 'Users' collection
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
})

// Create a Mongoose model for the 'Users' collection, based on the UserSchema
const UserModel = mongoose.model('users', UserSchema)
//The first argument to mongoose.model() is the name of the collection, which is users in this case. The second argument is the Mongoose schema that defines the structure of the documents in the collection.

//The result of calling mongoose.model() is a constructor function that can be used to create new documents for the collection, and to query and modify existing documents in the collection. This constructor function is stored in the UserModel variable, which is then exported from the module using module.exports.

// Export the UserModel so that it can be used in other parts of the application
module.exports = UserModel
