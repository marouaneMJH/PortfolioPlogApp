import React from "react";
import PostInterface from "./../../interface/PostInterface";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    return (
        <StyledPostRow>
            <StyledPostRowTitle to={`/posts/${post.id}`}>
                {post.title}
            </StyledPostRowTitle>
            <StyledPostRowTitle to={`/posts/${post.id}`}>
                {post.createdAt.toDateString()}
            </StyledPostRowTitle>
        </StyledPostRow>
    );
};

export default PostRow;
