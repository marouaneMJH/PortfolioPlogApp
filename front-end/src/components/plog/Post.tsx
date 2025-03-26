import React from "react";

interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

const Posts: Post[] = [];

const Post = () => {
    return <div>Post{Posts.length}</div>;
};

export default Post;
