import React from "react";
import PostsInterface from "../interface/PostsInterface";
import PostRow from "../components/plog/PostRow";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import PageTitle from "../components/basic/PageTitle";

// the interface should have year then
const postsByYear: PostsInterface[] = [
    {
        year: 2023,
        posts: [
            {
                id: 1,
                title: "Understanding TypeScript Interfaces",
                createdAt: new Date("2024-03-01T10:30:00Z"),
                content:
                    "TypeScript interfaces are powerful tools for defining object shapes, enforcing type safety, and improving code maintainability. In this post, we'll dive into advanced patterns like extending interfaces, optional properties, and using interfaces with classes. We'll also compare `type` vs `interface` and discuss when to use each.",
            },
            {
                id: 2,
                title: "Why Use NestJS for Backend Development?",
                createdAt: new Date("2024-03-05T14:20:00Z"),
                content:
                    "NestJS combines the best of Node.js, TypeScript, and enterprise-grade architecture patterns like Dependency Injection and Modular design. This post explores how NestJS simplifies building scalable APIs with built-in support for WebSockets, GraphQL, and microservices. We'll also benchmark NestJS against Express and Fastify.",
            },
            {
                id: 3,
                title: "React Best Practices",
                createdAt: new Date("2024-03-10T08:45:00Z"),
                content:
                    "Writing React applications that scale requires following best practices. This guide covers performance optimization (memoization, lazy loading), state management (Context vs Redux vs Zustand), and modern hooks patterns. We'll also discuss folder structure, testing strategies, and avoiding common anti-patterns.",
            },
            {
                id: 4,
                title: "Optimizing SQL Queries in a Scalable App",
                createdAt: new Date("2024-03-15T12:10:00Z"),
                content:
                    "Slow SQL queries can cripple performance. In this deep dive, we explore indexing strategies (B-tree, Hash, Partial), query execution plans, and advanced techniques like materialized views and read replicas. Real-world case studies show how optimizing a single query reduced response times by 95% in a high-traffic app.",
            },
            {
                id: 5,
                title: "How to Structure a Large-Scale NestJS Application",
                createdAt: new Date("2024-03-18T16:00:00Z"),
                content:
                    "As NestJS applications grow, maintaining a clean architecture becomes critical. This post introduces Domain-Driven Design (DDD), modular separation (feature vs shared modules), and layered architecture (controllers, services, repositories). We'll also cover dependency injection best practices and testing strategies for enterprise apps.",
            },
        ],
    },
    {
        year: 2024,
        posts: [
            {
                id: 1,
                title: "Understanding TypeScript Interfaces",
                createdAt: new Date("2024-03-01T10:30:00Z"),
                content:
                    "TypeScript interfaces are powerful tools for defining object shapes, enforcing type safety, and improving code maintainability. In this post, we'll dive into advanced patterns like extending interfaces, optional properties, and using interfaces with classes. We'll also compare `type` vs `interface` and discuss when to use each.",
            },
            {
                id: 2,
                title: "Why Use NestJS for Backend Development?",
                createdAt: new Date("2024-03-05T14:20:00Z"),
                content:
                    "NestJS combines the best of Node.js, TypeScript, and enterprise-grade architecture patterns like Dependency Injection and Modular design. This post explores how NestJS simplifies building scalable APIs with built-in support for WebSockets, GraphQL, and microservices. We'll also benchmark NestJS against Express and Fastify.",
            },
            {
                id: 3,
                title: "React Best Practices",
                createdAt: new Date("2024-03-10T08:45:00Z"),
                content:
                    "Writing React applications that scale requires following best practices. This guide covers performance optimization (memoization, lazy loading), state management (Context vs Redux vs Zustand), and modern hooks patterns. We'll also discuss folder structure, testing strategies, and avoiding common anti-patterns.",
            },
            {
                id: 4,
                title: "Optimizing SQL Queries in a Scalable App",
                createdAt: new Date("2024-03-15T12:10:00Z"),
                content:
                    "Slow SQL queries can cripple performance. In this deep dive, we explore indexing strategies (B-tree, Hash, Partial), query execution plans, and advanced techniques like materialized views and read replicas. Real-world case studies show how optimizing a single query reduced response times by 95% in a high-traffic app.",
            },
            {
                id: 5,
                title: "How to Structure a Large-Scale NestJS Application",
                createdAt: new Date("2024-03-18T16:00:00Z"),
                content:
                    "As NestJS applications grow, maintaining a clean architecture becomes critical. This post introduces Domain-Driven Design (DDD), modular separation (feature vs shared modules), and layered architecture (controllers, services, repositories). We'll also cover dependency injection best practices and testing strategies for enterprise apps.",
            },
        ],
    },
];

const StyledPostsContainer = styled.div``;

// todo just just the most viewed post with maximum rate
const StyledYearPosts = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: red; */
`;

const StyledYear = styled.h2`
    border-bottom: 1px solid var(--main-color);
    padding-left: 0.3rem;
`;

const Posts = () => {
    return (
        <StyledPostsContainer>
            <PageTitle>Posts</PageTitle>
            {postsByYear
                .sort((a, b) => b.year - a.year)
                .map((postYear) => (
                    <StyledYearPosts key={postYear.year}>
                        <StyledYear>{postYear.year}</StyledYear>
                        <div>
                            {postYear.posts.map((post) => (
                                <PostRow key={post.id} {...post} />
                            ))}
                        </div>
                    </StyledYearPosts>
                ))}
            <Outlet />
        </StyledPostsContainer>
    );
};

export default Posts;
