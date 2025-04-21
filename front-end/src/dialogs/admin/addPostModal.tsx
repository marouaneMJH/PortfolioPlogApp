import React, { useState } from "react";
import Modal from "./../ModalDialog";
import { CreatePostSection } from "./AddProject";

const ProjectsPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="Edit Project"
            size="full"
        >
            <CreatePostSection />
        </Modal>
    );
};

export default ProjectsPage;
