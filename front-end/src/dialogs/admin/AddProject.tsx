import React, { useState } from "react";
import styled from "styled-components";
import PostInterface from "../../interface/PostInterface";
import ProjectInterface from "../../interface/ProjectInterface";
// Import interfaces

// Shared styled components (these would be imported from a shared file in a real app)
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;
    background-color: var(--bg-color);
    position: relative;
    overflow: hidden;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.5rem;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--main-color);

    span {
        color: var(--secondary-color);
    }
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    background-color: var(--bg-secondary-color);
    border-radius: 1rem;
    padding: 2rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(30, 30, 34, 0.7);
    color: var(--main-color);
    border: none;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 2px var(--secondary-color);
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    min-height: 8rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(30, 30, 34, 0.7);
    color: var(--main-color);
    border: none;
    resize: vertical;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 2px var(--secondary-color);
    }
`;

const SubmitButton = styled.button`
    align-self: flex-end;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: var(--secondary-color);
    color: white;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #d32f2f;
    }
`;

const Label = styled.label`
    color: var(--main-color);
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 500;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputGroup = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

// const BackgroundEffect = styled.div`
//     position: absolute;
//     inset: 0;
//     pointer-events: none;
//     z-index: 0;

//     &::after {
//         content: "";
//         position: absolute;
//         width: 200%;
//         height: 200%;
//         background: radial-gradient(
//             circle,
//             rgba(0, 255, 240, 0.1) 0%,
//             rgba(0, 128, 255, 0.1) 50%,
//             rgba(0, 0, 255, 0.1) 100%
//         );
//         top: -50%;
//         left: -50%;
//         animation: rotate 60s linear infinite;
//     }

//     @keyframes rotate {
//         from {
//             transform: rotate(0deg);
//         }
//         to {
//             transform: rotate(360deg);
//         }
//     }
// `;

// Custom components for Create Post
const CreatePostSection: React.FC = () => {
    const [postData, setPostData] = useState<Partial<PostInterface>>({
        title: "",
        content: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setPostData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPost: PostInterface = {
            id: Math.floor(Math.random() * 10000), // Generate random ID for demo
            title: postData.title || "",
            createdAt: new Date(),
            content: postData.content,
        };
        console.log("New post created:", newPost);
        alert("Post created successfully!");
        setPostData({ title: "", content: "" });
    };

    return (
        <Container>

            <Header>
                <Title>
                    Create <span>Post</span>
                </Title>
            </Header>

            <ContentWrapper>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="title">Post Title</Label>
                        <Input
                            type="text"
                            id="title"
                            name="title"
                            value={postData.title}
                            onChange={handleChange}
                            placeholder="Enter post title"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="content">Content</Label>
                        <TextArea
                            id="content"
                            name="content"
                            value={postData.content}
                            onChange={handleChange}
                            placeholder="Write your post content here..."
                            rows={12}
                            required
                        />
                    </FormGroup>

                    <SubmitButton type="submit">Publish Post</SubmitButton>
                </Form>
            </ContentWrapper>
        </Container>
    );
};

// Custom components for Create Project
const FileInputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const FileInput = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const FileInputLabel = styled.div`
    padding: 1rem;
    background-color: rgba(30, 30, 34, 0.7);
    color: var(--main-color);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px dashed #444;

    &:hover {
        border-color: var(--secondary-color);
    }
`;

const PreviewImage = styled.div<{ $bgImage?: string }>`
    width: 100%;
    height: 200px;
    border-radius: 0.5rem;
    margin-top: 1rem;
    background-color: #1a1a1f;
    background-image: ${(props) =>
        props.$bgImage ? `url(${props.$bgImage})` : "none"};
    background-size: cover;
    background-position: center;
    display: ${(props) => (props.$bgImage ? "block" : "none")};
`;

const CreateProjectSection: React.FC = () => {
    const [projectData, setProjectData] = useState<Partial<ProjectInterface>>({
        title: "",
        breafDescreption: "",
        descreption: "",
        githubLink: undefined,
        demoLink: undefined,
    });
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setProjectData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
            // In a real app, you'd handle the file upload here
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newProject: ProjectInterface = {
            id: Math.floor(Math.random() * 10000), // Generate random ID for demo
            title: projectData.title || "",
            breafDescreption: projectData.breafDescreption || "",
            descreption: projectData.descreption || "",
            // In a real app, you'd handle the file upload and store the URL
            imagePath: imagePreview ? new URL(imagePreview) : undefined,
            githubLink: projectData.githubLink
                ? new URL(projectData.githubLink.toString())
                : undefined,
            demoLink: projectData.demoLink
                ? new URL(projectData.demoLink.toString())
                : undefined,
        };
        console.log("New project created:", newProject);
        alert("Project created successfully!");
        setProjectData({
            title: "",
            breafDescreption: "",
            descreption: "",
            githubLink: undefined,
            demoLink: undefined,
        });
        setImagePreview(null);
    };

    return (
        <Container>
            {/* <BackgroundEffect /> */}

            <Header>
                <Title>
                    Create <span>Project</span>
                </Title>
            </Header>

            <ContentWrapper>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="title">Project Title</Label>
                        <Input
                            type="text"
                            id="title"
                            name="title"
                            value={projectData.title}
                            onChange={handleChange}
                            placeholder="Enter project title"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="image">Project Image</Label>
                        <FileInputWrapper>
                            <FileInputLabel>
                                {imagePreview ? "Change Image" : "Select Image"}
                            </FileInputLabel>
                            <FileInput
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </FileInputWrapper>
                        <PreviewImage $bgImage={imagePreview || undefined} />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="breafDescreption">
                            Brief Description
                        </Label>
                        <Input
                            type="text"
                            id="breafDescreption"
                            name="breafDescreption"
                            value={projectData.breafDescreption}
                            onChange={handleChange}
                            placeholder="Enter a brief description"
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="descreption">
                            Detailed Description
                        </Label>
                        <TextArea
                            id="descreption"
                            name="descreption"
                            value={projectData.descreption}
                            onChange={handleChange}
                            placeholder="Write detailed project description..."
                            rows={8}
                            required
                        />
                    </FormGroup>

                    <InputGroup>
                        <FormGroup>
                            <Label htmlFor="githubLink">GitHub Link</Label>
                            <Input
                                type="url"
                                id="githubLink"
                                name="githubLink"
                                value={projectData.githubLink?.toString() || ""}
                                onChange={handleChange}
                                placeholder="https://github.com/username/repo"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="demoLink">Demo Link</Label>
                            <Input
                                type="url"
                                id="demoLink"
                                name="demoLink"
                                value={projectData.demoLink?.toString() || ""}
                                onChange={handleChange}
                                placeholder="https://demo-link.com"
                            />
                        </FormGroup>
                    </InputGroup>

                    <SubmitButton type="submit">Create Project</SubmitButton>
                </Form>
            </ContentWrapper>
        </Container>
    );
};

export { CreatePostSection, CreateProjectSection };
