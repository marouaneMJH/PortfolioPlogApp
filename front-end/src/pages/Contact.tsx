import React, { useState } from "react";
import styled from "styled-components";
import Container from "./../components/basic/Container";





// todo dependacy
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
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const InfoColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

const InfoItem = styled.div`
    background-color: var(--bg-secondary-color);
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
`;

const IconWrapper = styled.div`
    color: var(--secondary-color);
    margin-right: 1rem;
`;

const InfoText = styled.span`
    color: var(--main-color);
`;

const FormColumn = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const InputRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--bg-secondary-color);
    color: var(--main-color);
    border: none;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 2px var(--secondary-color);
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 8rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--bg-secondary-color);
    color: var(--main-color);
    border: none;
    resize: none;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 2px var(--secondary-color);
    }
`;

const SubmitButton = styled.button`
    align-self: center;
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

    @media (min-width: 768px) {
        align-self: flex-end;
    }
`;

// const BackgroundEffect = styled.div`
//   position: absolute;
//   inset: 0;
//   pointer-events: none;
//   z-index: 0;

//   &::after {
//     content: '';
//     position: absolute;
//     width: 200%;
//     height: 200%;
//     background: radial-gradient(circle, rgba(0,255,240,0.1) 0%, rgba(0,128,255,0.1) 50%, rgba(0,0,255,0.1) 100%);
//     top: -50%;
//     left: -50%;
//     animation: rotate 60s linear infinite;
//   }

//   @keyframes rotate {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//   }
// `;

// Icons components
const LocationIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const PhoneIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const EmailIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

const FacebookIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

// Component
const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Message sent! Thank you for contacting us.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        //     const Container = styled.div`
        //   width: 100%;
        //   min-height: 100vh;
        //   display: flex;
        //   flex-direction: column;
        //   align-items: center;
        //   justify-content: center;
        //   padding: 3rem 1rem;
        //   background-color: var(--bg-color);
        //   position: relative;
        //   overflow: hidden;
        // `;
        <Container
            $padding="3rem 1rem"
            $flex
            $notMain
            $alignItems="center"
            $flexDirection="column"
            $justifyContent="center"
            // $maxWidth="100%"
            $margin="0"
            style={{
                // minHeight: "100vh",

                backgroundColor: "var(--bg-color)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* work on background  */}
            {/* <BackgroundEffect /> */}

            <Header>
                <Title>
                    Get in <span>Touch</span>
                </Title>
            </Header>

            <ContentWrapper>
                <InfoColumn>
                    <InfoItem>
                        <IconWrapper>
                            <LocationIcon />
                        </IconWrapper>
                        <InfoText>Riyad Salam, Mohamadia, MOROCCO</InfoText>
                    </InfoItem>

                    <InfoItem>
                        <IconWrapper>
                            <PhoneIcon />
                        </IconWrapper>
                        <InfoText>+212 6 10 20 40</InfoText>
                    </InfoItem>

                    <InfoItem>
                        <IconWrapper>
                            <EmailIcon />
                        </IconWrapper>
                        <InfoText>example@gmail.com</InfoText>
                    </InfoItem>

                    <InfoItem>
                        <IconWrapper>
                            <FacebookIcon />
                        </IconWrapper>
                        <InfoText>@facebookNick</InfoText>
                    </InfoItem>
                </InfoColumn>

                <FormColumn>
                    <Form onSubmit={handleSubmit}>
                        <InputRow>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </InputRow>

                        <TextArea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <SubmitButton type="submit">Send Message</SubmitButton>
                    </Form>
                </FormColumn>
            </ContentWrapper>
        </Container>
    );
};

export default ContactPage;
