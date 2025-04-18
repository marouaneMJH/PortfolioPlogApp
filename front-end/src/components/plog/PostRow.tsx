import React, { useEffect, useState } from "react";
import PostInterface from "./../../interface/PostInterface";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Edit, Trash } from "lucide-react";
import axios from "axios";

const StyledPostRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 0.01px solid var(--main-color); */
`;

const StyledPostRowTitle = styled(Link)`
    padding-top: 0.4rem;
    text-decoration: none;
    /* font-weight: bold; */
`;

const PostRow = (post: PostInterface) => {
    const [deleted, setDeleted] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const handleDelete = () => {
        setDeleted(true);
    };
    useEffect(() => {
        if (deleted)
            axios
                .delete(`http://localhost:3000/post/${post.id}`)
                .then((val) => alert(`Done, ${val}`))
                .catch((val) => alert(`Problem, ${val}`));
    }, [deleted]);

    if (deleted) {
        return <></>;
    }

    return (
        <StyledPostRow
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <StyledPostRowTitle to={`/posts/${post.id}`}>
                {post.title}
            </StyledPostRowTitle>
            <StyledPostRowTitle to={`/posts/${post.id}`}>
                {post.createdAt.toDateString()}
            </StyledPostRowTitle>
            {hovered ? (
                <div>
                    <Trash onClick={handleDelete} />
                    <Edit onClick={() => alert("hello")} />
                </div>
            ) : (
                ""
            )}
        </StyledPostRow>
    );
};

export default PostRow;
