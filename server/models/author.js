require("../config/mongoose")();

const mongoose = require("mongoose");
module.exports = () =>{
    const AuthorSchema = new mongoose.Schema({
        name: {type: String, required:[true, "Title Required"], minlength:[3, "Name must have at least 3 characters"]},
    }, {timestamps: true})
    Author = mongoose.model('Author', AuthorSchema);
}