import React, { useState } from "react";
import {
    SkillBarProps,
    ModalProps,
    ServiceItemData,
    TimelineItemData,
} from "./../interface/About.ts";

// import {
//     AboutContent,
//     AboutText,
//     ActionButton,
//     CategoryTitle,
//     CloseButton,
//     ContactIcon,
//     ContactInfo,
//     ContactItem,
//     ContentWrapper,
//     Divider,
//     DownloadButton,
//     FirstName,
//     HighlightText,
//     InfoSection,
//     LastName,
//     ModalContainer,
//     ModalContent,
//     ModalName,
//     ModalOverlay,
//     ModalSidebar,
//     ModalTitle,
//     Name,
//     PageContainer,
//     ProfileImage,
//     ProfileSection,
//     SectionTitle,
//     ServiceIcon,
//     ServiceItem,
//     ServicesList,
//     SkillBarContainer,
//     SkillBarFill,
//     SkillBarLabel,
//     SkillBarPercentage,
//     SkillBarWrapper,
//     SkillCategory,
//     SkillCircle,
//     SkillItem,
//     SkillName,
//     SkillPercentage,
//     SkillsContainer,
//     SkillsGrid,
//     TabButton,
//     TabContent,
//     TabNav,
//     TimelineContainer,
//     TimelineContent,
//     TimelineDate,
//     TimelineDot,
//     TimelineItem,
//     TimelineSubtitle,
//     TimelineTitle,
//     Title,
//     TitleHighlight,
// } from "./../styled/AboutStyled.ts";

// Main About Page Component

import {
    AboutContent,
    AboutText,
    ActionButton,
    CategoryTitle,
    CloseButton,
    ContactIcon,
    ContactInfo,
    ContactItem,
    ContentWrapper,
    Divider,
    DownloadButton,
    FirstName,
    HighlightText,
    InfoSection,
    LastName,
    ModalContainer,
    ModalContent,
    ModalName,
    ModalOverlay,
    ModalSidebar,
    ModalTitle,
    Name,
    PageContainer,
    ProfileImage,
    ProfileSection,
    SectionTitle,
    ServiceIcon,
    ServiceItem,
    ServicesList,
    SkillBarContainer,
    SkillBarFill,
    SkillBarLabel,
    SkillBarPercentage,
    SkillBarWrapper,
    SkillCategory,
    SkillCircle,
    SkillItem,
    SkillName,
    SkillPercentage,
    SkillsContainer,
    SkillsGrid,
    TabButton,
    TabContent,
    TabNav,
    TimelineContainer,
    TimelineContent,
    TimelineDate,
    TimelineDot,
    TimelineItem,
    TimelineSubtitle,
    TimelineTitle,
    Title,
    TitleHighlight,
} from "./../styled/AboutStyled.ts";

const AboutPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("about"); // 'about', 'timeline', 'education'

    const openModal = (tab: string): void => {
        setActiveTab(tab);
        setIsModalOpen(true);
    };

    return (
        <PageContainer>
            <ContentWrapper>
                <ProfileSection>
                    <ProfileImage
                        src="/path-to-your-image.jpg"
                        alt="Marouane El Moujahid"
                    />
                </ProfileSection>

                <InfoSection>
                    <Name>
                        <FirstName>MAROUANE</FirstName>{" "}
                        <LastName>EL MOUJAHID</LastName>
                    </Name>
                    <Title>
                        Software <TitleHighlight>Engineer</TitleHighlight>
                    </Title>

                    <Divider />

                    <AboutText>
                        My name is <strong>Marouane El Moujahid</strong>. I am a
                        first-year software engineering student passionate about
                        creating robust and optimized software solutions. With a
                        pragmatic approach to development, I focus on designing
                        modular systems, automating processes, and ensuring
                        maintainable code. Currently seeking a 2-month
                        internship starting April 14, 2025.
                    </AboutText>

                    <ActionButton onClick={() => openModal("about")}>
                        Learn More
                    </ActionButton>
                </InfoSection>
            </ContentWrapper>

            {isModalOpen && (
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            )}
        </PageContainer>
    );
};

// Modal Component
const Modal: React.FC<ModalProps> = ({ onClose, activeTab, setActiveTab }) => {
    const educationTimeline: TimelineItemData[] = [
        {
            period: "2024 - Present",
            title: "Faculté des Sciences et Techniques (FST) Mohammedia",
            subtitle: "Software Engineering",
        },
        {
            period: "2022 - 2024",
            title: "Faculté des Sciences et Techniques (FST) Errachidia",
            subtitle: "DEUST in Mathematics, Computer Science and Physics",
        },
        {
            period: "2022",
            title: "High School Diploma",
            subtitle:
                "Experimental Sciences - Physics and Chemistry, With Honors",
        },
    ];

    const services: ServiceItemData[] = [
        { icon: "▶", text: "Full-Stack Web Development" },
        { icon: "▶", text: "Software Architecture" },
        { icon: "▶", text: "API Development" },
    ];

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalSidebar>
                    {/* <ProfileImage
                        src="/path-to-your-image.jpg"
                        alt="Marouane El Moujahid"
                    /> */}
                    <ModalName>
                        <FirstName>MAROUANE</FirstName>{" "}
                        <LastName>EL MOUJAHID</LastName>
                    </ModalName>
                    <ModalTitle>
                        Software{" "}
                        <TitleHighlight>Engineer Student</TitleHighlight>
                    </ModalTitle>

                    <ContactInfo>
                        <ContactItem>
                            <ContactIcon>👤</ContactIcon>
                            <span>Marouane El Moujahid</span>
                        </ContactItem>
                        <ContactItem>
                            <ContactIcon>📅</ContactIcon>
                            <span>Available from 14.04.2025</span>
                        </ContactItem>
                        <ContactItem>
                            <ContactIcon>📍</ContactIcon>
                            <span>Morocco</span>
                        </ContactItem>
                        <ContactItem>
                            <ContactIcon>📞</ContactIcon>
                            <span>+212 6 64 43 05 82</span>
                        </ContactItem>
                        <ContactItem>
                            <ContactIcon>✉️</ContactIcon>
                            <span>marwanmoujahid008@gmail.com</span>
                        </ContactItem>
                    </ContactInfo>

                    <DownloadButton>Download CV</DownloadButton>
                </ModalSidebar>

                <ModalContent>
                    <CloseButton onClick={onClose}>✕</CloseButton>

                    <TabNav>
                        <TabButton
                            active={activeTab === "about"}
                            onClick={() => setActiveTab("about")}
                        >
                            About Me
                        </TabButton>
                        <TabButton
                            active={activeTab === "education"}
                            onClick={() => setActiveTab("education")}
                        >
                            Education Timeline
                        </TabButton>
                        <TabButton
                            active={activeTab === "skills"}
                            onClick={() => setActiveTab("skills")}
                        >
                            Technical Skills
                        </TabButton>
                    </TabNav>

                    {activeTab === "about" && (
                        <TabContent>
                            <SectionTitle>
                                About <HighlightText>Me</HighlightText>
                            </SectionTitle>
                            <Divider />
                            <AboutContent>
                                Hello everybody! My name is{" "}
                                <strong>Marouane El Moujahid</strong>. I am a
                                first-year software engineering student at FST
                                Mohammedia, passionate about creating robust and
                                optimized software solutions. With a pragmatic
                                approach to development, I focus on designing
                                modular systems, automating processes, and
                                ensuring maintainable code. Self-taught and
                                curious, I constantly push the boundaries of the
                                technologies I use.
                                <br />
                                <br />I have experience working on concrete
                                projects ranging from web development to
                                software infrastructure. Currently seeking a
                                2-month internship starting April 14, 2025.
                            </AboutContent>

                            <SectionTitle>
                                Quality <HighlightText>Services</HighlightText>
                            </SectionTitle>
                            <Divider />
                            <ServicesList>
                                {services.map((service, index) => (
                                    <ServiceItem key={index}>
                                        <ServiceIcon>
                                            {service.icon}
                                        </ServiceIcon>
                                        {service.text}
                                    </ServiceItem>
                                ))}
                            </ServicesList>
                        </TabContent>
                    )}

                    {activeTab === "education" && (
                        <TabContent>
                            <SectionTitle>
                                Education{" "}
                                <HighlightText>Timeline</HighlightText>
                            </SectionTitle>
                            <Divider />

                            <TimelineContainer>
                                {educationTimeline.map((item, index) => (
                                    <TimelineItem key={index}>
                                        <TimelineDot />
                                        <TimelineDate>
                                            {item.period}
                                        </TimelineDate>
                                        <TimelineContent>
                                            <TimelineTitle>
                                                {item.title}
                                            </TimelineTitle>
                                            <TimelineSubtitle>
                                                {item.subtitle}
                                            </TimelineSubtitle>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </TimelineContainer>

                            <SectionTitle>
                                Language <HighlightText>Skills</HighlightText>
                            </SectionTitle>
                            <Divider />

                            <SkillsContainer>
                                <SkillItem>
                                    <SkillCircle percentage={95}>
                                        <SkillPercentage>95%</SkillPercentage>
                                    </SkillCircle>
                                    <SkillName>Arabic</SkillName>
                                </SkillItem>

                                <SkillItem>
                                    <SkillCircle percentage={75}>
                                        <SkillPercentage>75%</SkillPercentage>
                                    </SkillCircle>
                                    <SkillName>French</SkillName>
                                </SkillItem>

                                <SkillItem>
                                    <SkillCircle percentage={70}>
                                        <SkillPercentage>70%</SkillPercentage>
                                    </SkillCircle>
                                    <SkillName>English</SkillName>
                                </SkillItem>
                            </SkillsContainer>
                        </TabContent>
                    )}

                    {activeTab === "skills" && (
                        <TabContent>
                            <SectionTitle>
                                Technical <HighlightText>Skills</HighlightText>
                            </SectionTitle>
                            <Divider />

                            <SkillCategory>
                                <CategoryTitle>
                                    Programming Languages
                                </CategoryTitle>
                                <SkillsGrid>
                                    <SkillBar name="C/C++" percentage={85} />
                                    <SkillBar name="Python" percentage={80} />
                                    <SkillBar name="Java" percentage={75} />
                                    <SkillBar
                                        name="JavaScript/TypeScript"
                                        percentage={85}
                                    />
                                    <SkillBar name="PHP" percentage={70} />
                                    <SkillBar name="SQL" percentage={75} />
                                    <SkillBar name="Bash" percentage={65} />
                                </SkillsGrid>
                            </SkillCategory>

                            <SkillCategory>
                                <CategoryTitle>Web & Frameworks</CategoryTitle>
                                <SkillsGrid>
                                    <SkillBar name="HTML/CSS" percentage={90} />
                                    <SkillBar name="React" percentage={85} />
                                    <SkillBar name="Node.js" percentage={80} />
                                    <SkillBar
                                        name="Express.js"
                                        percentage={75}
                                    />
                                    <SkillBar name="NestJS" percentage={70} />
                                    <SkillBar name="GTK" percentage={65} />
                                </SkillsGrid>
                            </SkillCategory>

                            <SkillCategory>
                                <CategoryTitle>
                                    Tools & Technologies
                                </CategoryTitle>
                                <SkillsGrid>
                                    <SkillBar
                                        name="Git/GitHub"
                                        percentage={90}
                                    />
                                    <SkillBar name="Docker" percentage={75} />
                                    <SkillBar name="Linux" percentage={85} />
                                    <SkillBar
                                        name="MySQL/PostgreSQL"
                                        percentage={80}
                                    />
                                    <SkillBar name="LaTeX" percentage={70} />
                                    <SkillBar name="UML" percentage={75} />
                                </SkillsGrid>
                            </SkillCategory>
                        </TabContent>
                    )}
                </ModalContent>
            </ModalContainer>
        </ModalOverlay>
    );
};

// Skill Bar Component
const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => (
    <SkillBarContainer>
        <SkillBarLabel>{name}</SkillBarLabel>
        <SkillBarWrapper>
            <SkillBarFill percentage={percentage} />
        </SkillBarWrapper>
        <SkillBarPercentage>{percentage}%</SkillBarPercentage>
    </SkillBarContainer>
);

export default AboutPage;
