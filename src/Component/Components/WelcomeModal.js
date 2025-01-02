import React, { useState } from "react";
import { Modal } from "react-bootstrap"; // Importing Bootstrap Modal
import "../CSS/WelcomeModal.css";
import WelcomeImg from "../Images/WelcomeImg.png";

function WelcomeModal({ show, onClose }) {

    const handleClose = () => {
        onClose(); // Close the modal
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                className="Welcome" // Custom class for further styling
            >
                <Modal.Body className="modal-container">
                    <img src={WelcomeImg} className="mb-3"/>
                    <h1 className="m-0">Welcome!</h1>
                    <p className="WelcomeName">Thank you for visiting. Take a look at my projects and let's connect!</p>
                    <button type="button" className="btn btn-outline-primary" onClick={handleClose}>Interesting!</button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default WelcomeModal;