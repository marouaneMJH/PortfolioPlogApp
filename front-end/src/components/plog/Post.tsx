import React, { useEffect, useState } from "react";
import PostInterface from "../../interface/PostInterface";
import { useParams } from "react-router-dom";
import axios from "axios";
// this component will fech the data from the posts/:title
// and fit it here like this example\

// const post: PostInterface = {
//     id: 1,
//     title: "Understanding TypeScript Interfaces",
//     createdAt: new Date("2024-03-01T10:30:00Z"),
//     content:
//         "TypeScript interfaces are powerful tools for defining object shapes, enforcing type safety, and improving code maintainability. In this post, we'll dive into advanced patterns like extending interfaces, optional properties, and using interfaces with classes. We'll also compare `type` vs `interface` and discuss when to use each.<br />Yes Marouane El moujahid is a good persone that work hard for her carier so much as hell, yes like u said that just what in her mind but in reality he lazy and no work that hard,  mb somme tymes but not always",
// };

const P: React.FC<{ text: string }> = ({ text }) => {
    // Handle empty or undefined text
    if (!text) return null;

    // Split the input string by new lines
    const paragraphs = text.split("\n").filter((para) => para.trim() !== "");

    // Create a paragraph element for each non-empty line
    return (
        <>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </>
    );
};
const Post = () => {
    // Extract the postId parameter from URL
    const { postId } = useParams<{ postId: string }>();

    const [post, setPost] = useState<PostInterface | undefined>(undefined);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use postId from params to fetch the specific post
                const response = await axios.get(
                    `http://localhost:3000/post/${postId}`
                );
                const postData = response.data;
                setPost({
                    ...postData,
                    createdAt: new Date(postData.createdAt),
                });
            } catch (err) {
                console.error("Error fetching post:", err);
                setError(true);
            }
        };

        if (postId) {
            fetchData();
        }
    }, [postId]); // Add postId as a dependency

    if (error) {
        return (
            <>
                <h1>Problem in fetching data</h1>
            </>
        );
    }

    if (post === undefined) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <h4>{post.createdAt.toDateString()}</h4>
            {post.content && <P text={post.content} />}
        </div>
    );
};

export default Post;
