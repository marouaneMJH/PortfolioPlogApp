import React from "react";
import ProjectInterface from "../../interface/ProjectInterface";
import Project from "./Project";
const projects: ProjectInterface[] = [
    {
        title: "E-Commerce Website",
        imagePath: new URL(
            "https://example.com/images/ecommerce-screenshot.jpg"
        ),
        breafDescreption:
            "A full-stack e-commerce platform with product listings, cart, and checkout.",
        descreption:
            "This project is a complete e-commerce solution built with React for the frontend and Node.js for the backend. It features user authentication, product search and filtering, a shopping cart, and Stripe payment integration. The admin dashboard allows for product and order management.",
        githubLink: new URL("https://github.com/username/ecommerce-project"),
    },
    {
        title: "Weather App",
        imagePath: new URL(
            "https://example.com/images/weather-app-screenshot.jpg"
        ),
        breafDescreption:
            "Real-time weather forecasting application using API data.",
        descreption:
            "A responsive weather application that fetches data from the OpenWeatherMap API. Users can search for locations, view current weather conditions, and see 5-day forecasts. Built with vanilla JavaScript and CSS Grid for layout.",
        githubLink: new URL("https://github.com/username/weather-app"),
    },
    {
        title: "Task Management System",
        imagePath: new URL(
            "https://example.com/images/task-manager-screenshot.jpg"
        ),
        breafDescreption:
            "Collaborative task management tool with team features.",
        descreption:
            "This Kanban-style task manager allows teams to create, assign, and track tasks through different stages. Features include drag-and-drop functionality, due date reminders, and team chat. Built with Vue.js and Firebase for real-time updates.",
        githubLink: new URL(
            "https://github.com/username/task-management-system"
        ),
    },
    {
        title: "Recipe Finder",
        imagePath: new URL(
            "https://example.com/images/recipe-finder-screenshot.jpg"
        ),
        breafDescreption:
            "Search and save cooking recipes with dietary filters.",
        descreption:
            "Using the Spoonacular API, this application lets users search for recipes by ingredients, dietary restrictions, or cuisine type. Includes features for saving favorite recipes and creating shopping lists. Developed with React Native for cross-platform mobile use.",
        githubLink: new URL("https://github.com/username/recipe-finder"),
    },
];

const Projects = () => {
    return (
        <div>
            {projects.map((project: ProjectInterface, index: number) => (
                <Project key={index} project={project} />
            ))}
        </div>
    );
};

export default Projects;
