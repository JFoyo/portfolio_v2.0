import react from "react";
import "../CSS/Contact.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Contact() {
    return (
        <div className="container pb-5 pt-5">
            <div className="row pb-5">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                    {/* <DotLottieReact
                        src="https://lottie.host/506d0d6b-e96d-445d-832e-326f8a2d60c1/5CpnLPpNJ6.lottie"
                        loop
                        autoplay
                    /> */}
                    <DotLottieReact
                        src="https://lottie.host/e56ebcd3-d2b4-4e50-8635-ca05f7585ca7/NSQQZK6gro.lottie"
                        loop
                        autoplay
                    />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <form className="Contact-Form">
                        <div className="">
                            <label for="Name" className="form-label text-white">Name</label>
                            <input type="text" className="form-control" placeholder="Juan dela Cruz...." />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="Email" className="form-label text-white">Email address</label>
                            <input type="email" className="form-control" id="" aria-describedby="emailHelp" placeholder="username@example.com" />
                            <div id="emailHelp" className="form-text  text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-4">
                            <label for="Message" className="form-label text-white">Message</label>
                            <textarea type="Message" className="form-control" id="exampleInputPassword1" placeholder="I would like to ask you...." />
                        </div>
                        <button type="submit" className="btn btn-outline-success btn-send">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;