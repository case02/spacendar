const mongoose = require("mongoose");
 
const commentSchema = new mongoose.Schema(
    {
        date: String,
        comment: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }, 
    }, 
    {timestamps: true}
);
 
const Comment = mongoose.model("Comment", commentSchema);
 
module.exports = Comment