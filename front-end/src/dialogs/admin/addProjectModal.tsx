import React, { useState } from "react";
import Modal from "./../ModalDialog"; // Import the Modal component
import { CreateProjectSection } from "./../admin/AddProject";

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
            // title="Edit Project"
            size="full"
        >
            
            <CreateProjectSection />
        </Modal>
    );
};

export default ProjectsPage;
