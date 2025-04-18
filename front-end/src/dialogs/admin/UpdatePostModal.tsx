import React, { useState } from "react";
import Modal from "../ModalDialog"; // Import the Modal component
import { UpdatePostSection } from "./AddProject";
import PostInterface from "../../interface/PostInterface";

interface name {
    post: PostInterface;
    onClick: boolean;
}
const PostModal: React.FC<name> = ({ post, onClick }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(onClick || false);

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            // title="Edit Project"
            size="full" // You can adjust size as needed: 'small', 'medium', 'large', or 'full'
        >
            <UpdatePostSection postId={post.id} />
        </Modal>
    );
};

export default PostModal;
