import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "./Project"; // Adjust import path as needed
import ProjectInterface from "../../interface/ProjectInterface";
import PageTitle from "../basic/PageTitle";
import axios from "axios";

// const projects: ProjectInterface[] = [
//     {
//         id: 1,
//         title: "E-Commerce Website",
//         imagePath: new URL(
//             "https://images.unsplash.com/photo-1520188740392-665a13f453fc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         ),
//         breafDescreption:
//             "A full-stack e-commerce platform with product listings, cart, and checkout.",
//         descreption:
//             "This project is a complete e-commerce solution built with React for the frontend and Node.js for the backend. It features user authentication, product search and filtering, a shopping cart, and Stripe payment integration. The admin dashboard allows for product and order management.",
//         githubLink: new URL("https://github.com/soumyajit4419/Portfolio"),
//     },
//     {
//         id: 2,
//         title: "Weather App",
//         imagePath: new URL(
//             "https://images.unsplash.com/photo-1627882278101-88cac371b54f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         ),
//         breafDescreption:
//             "Real-time weather forecasting application using API data.",
//         descreption:
//             "A responsive weather application that fetches data from the OpenWeatherMap API. Users can search for locations, view current weather conditions, and see 5-day forecasts. Built with vanilla JavaScript and CSS Grid for layout.",
//         githubLink: new URL("https://github.com/username/weather-app"),
//         demoLink: new URL("https://github.com/username/weather-app"),
//     },
//     {
//         id: 3,
//         title: "Task Management System",
//         imagePath: new URL(
//             "https://images.unsplash.com/photo-1741850820591-f6954a90c7ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
//         ),
//         breafDescreption:
//             "Collaborative task management tool with team features.",
//         descreption:
//             "This Kanban-style task manager allows teams to create, assign, and track tasks through different stages. Features include drag-and-drop functionality, due date reminders, and team chat. Built with Vue.js and Firebase for real-time updates.",
//         githubLink: new URL(
//             "https://github.com/username/task-management-system"
//         ),
//     },
//     {
//         id: 4,
//         title: "Recipe Finder",
//         imagePath: new URL(
//             "https://images.unsplash.com/photo-1742647230803-f70a2525bd37?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         ),
//         breafDescreption:
//             "Search and save cooking recipes with dietary filters.",
//         descreption:
//             "Using the Spoonacular API, this application lets users search for recipes by ingredients, dietary restrictions, or cuisine type. Includes features for saving favorite recipes and creating shopping lists. Developed with React Native for cross-platform mobile use.",
//         githubLink: new URL("https://github.com/username/recipe-finder"),
//     },
// ];

const StyledProjectsContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;

    @media (min-width: 480px) {
        /* Mobile landscape & small tablets */
        grid-template-columns: 1fr;
    }

    @media (min-width: 768px) {
        /* Tablets */
        grid-template-columns: repeat(2, auto);
        justify-content: center;
        gap: 2.5rem;
    }

    @media (min-width: 992px) {
        /* Small laptops */
        grid-template-columns: repeat(2, auto);
        gap: 3rem;
    }

    @media (min-width: 1200px) {
        /* Desktop */
        grid-template-columns: repeat(3, auto);
        gap: 2rem;
    }

    @media (min-width: 1440px) {
        /* Large desktop */
        grid-template-columns: repeat(3, auto);
        gap: 4rem;
    }

    @media (min-width: 1920px) {
        /* 4K screens */
        grid-template-columns: repeat(4, auto);
        gap: 4.5rem;
    }
`;

const ProjectsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    padding: 4rem 0;
`;

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<ProjectInterface[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/project")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch projects:", error);
            });
    }, []);

    return (
        <ProjectsSection>
            <PageTitle>My Projects</PageTitle>
            <StyledProjectsContainer>
                {projects.length == 0 ? (
                    <div>Problem in fetching data</div>
                ) : (
                    projects.map((project, index) => (
                        <ProjectCard
                            key={project.id || index}
                            project={project}
                        />
                    ))
                )}
            </StyledProjectsContainer>
        </ProjectsSection>
    );
};

export default Projects;
