import React from "react";
import PostInterface from "../../interface/PostInterface";
// this component will fech the data from the posts/:title
// and fit it here like this example\

const post: PostInterface = {
    id: 1,
    title: "Understanding TypeScript Interfaces",
    createdAt: new Date("2024-03-01T10:30:00Z"),
    content:
        "TypeScript interfaces are powerful tools for defining object shapes, enforcing type safety, and improving code maintainability. In this post, we'll dive into advanced patterns like extending interfaces, optional properties, and using interfaces with classes. We'll also compare `type` vs `interface` and discuss when to use each.<br />Yes Marouane El moujahid is a good persone that work hard for her carier so much as hell, yes like u said that just what in her mind but in reality he lazy and no work that hard,  mb somme tymes but not always",
};
const Post = () => {
    return (
        <div>
            <h1>{post.title}</h1>
            <h4>{post.createdAt.toDateString()}</h4>
            <p>{post.content}</p>
            <p>{post.content}</p>
            <p>{post.content}</p>
        </div>
    );
};

export default Post;
