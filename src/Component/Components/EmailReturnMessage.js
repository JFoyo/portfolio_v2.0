import React from "react";
import { Modal } from "react-bootstrap"; // Importing Bootstrap Modal
import SuccessImage from "../Images/success.png"; // Example path for success image
import FailedImage from "../Images/failed.png"; // Example path for failed image
import "../CSS/EmailReturnMessage.css";

function EmailReturnMessage({ show, type, onClose }) {
    return (
        <Modal show={show} onHide={onClose} centered className="Welcome">
            <Modal.Body className="modal-container"> 
                {/* Show different content based on the modal type */}
                {type === "success" ? (
                    <>
                        <img src={SuccessImage} className="mb-3" alt="Success" />
                        <h1 className="mb-3">Success!</h1>
                        <p className="mb-0">Your Message has been sent successfully.</p>
                        <p className="m-0">I will respond to you as soon as possible.</p>
                        <p className="mt-0">Thank you for reaching out!</p>
                    </>
                ) : (
                    <>
                        <img src={FailedImage} className="mb-3" alt="Failed" />
                        <h1 className="mb-3">Oops!</h1>
                        <p>Something went wrong. Please try again later.</p>
                    </>
                )}
                <button type="button" className="btn btn-outline-primary" onClick={onClose}>
                    Close
                </button>
            </Modal.Body>
        </Modal>
    );
}

export default EmailReturnMessage;