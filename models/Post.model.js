const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    title: String,
    content: String,
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
  },
  {
    timestamps: true
  }
);

const Post = model("Post", postSchema); // Here is where we create a new collection in MongoDB

module.exports = Post;
