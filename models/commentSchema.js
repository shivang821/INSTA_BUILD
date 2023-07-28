const mongoose=require("mongoose")
const commentSchema=mongoose.Schema({
    postId:{
        type:mongoose.Schema.ObjectId,
        ref:"Post",
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    submitedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }
})

module.exports=new mongoose.model("Comment",commentSchema)