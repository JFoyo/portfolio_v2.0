import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../CSS/Contact.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import EmailReturnMessage from '../Components/EmailReturnMessage';

function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(""); // State for modal type (success or failed)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_augqbkk', 'template_wf14v4s', form.current, 'Tfo6crGdZn0D88k5g')
            .then(
                () => {
                    setModalType("success"); // Set modal type to success
                    setShowModal(true); // Show modal
                },
                () => {
                    setModalType("failed"); // Set modal type to failed
                    setShowModal(true); // Show modal
                }
            );
    };

    return (
        <div className="container pb-5 pt-5">
            <div className="row pb-5">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                    <DotLottieReact
                        src="https://lottie.host/e56ebcd3-d2b4-4e50-8635-ca05f7585ca7/NSQQZK6gro.lottie"
                        loop
                        autoplay
                    />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <form className="Contact-Form" ref={form} onSubmit={sendEmail}>
                        <h1 className="text-white Name text-center">Write me a Message</h1>
                        <div>
                            <label htmlFor="Name" className="form-label text-white">Name</label>
                            <input type="text" className="form-control" placeholder="Juan dela Cruz...." name='user_name' />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label text-white">Email address</label>
                            <input type="email" className="form-control" placeholder="username@example.com" name='user_email' />
                            <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Message" className="form-label text-white">Message</label>
                            <textarea className="form-control" placeholder="I would like to ask you...." name='message' />
                        </div>
                        <button type="submit" className="btn btn-outline-success btn-send">Send</button>
                    </form>
                </div>
            </div>

            {/* Conditional rendering of the modal */}
            <EmailReturnMessage
                show={showModal}
                type={modalType}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
}

export default Contact;