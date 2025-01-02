import react, { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import GroceryComponent from "../Components/GroceryComponent";
import "../CSS/Project.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faListCheck } from "@fortawesome/free-solid-svg-icons";

function Project() {

    // const [open, setOpen] = useState(false);

    const handleOpenLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleDownload = () => {
        const fileUrl = "/QR Generator.zip"; // Path to the file in the public folder
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'QR Generator.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (
        <div className="container">
            {/* <div className="row">
                <button data-toggle="collapse"
                    className="btn btn-outline-primary btnProj"
                    data-target="#demo"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}>
                    Grocery Buddy <FontAwesomeIcon icon={faListCheck} />
                </button>
                {open && <GroceryComponent />}
            </div> */}
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <DotLottieReact
                                src="https://lottie.host/5fe99d5d-a709-4387-b905-878a59c6a280/X6OM1LASrY.lottie"
                                loop
                                autoplay
                            />
                            <h1 className="text-white mb-4 Name">Grocery Buddy</h1>
                            <button className="btn btn-outline-success" onClick={() => handleOpenLink("https://jfoyo.github.io/Grocery-Buddy/")}>Open</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <DotLottieReact
                                src="https://lottie.host/a2f54102-619e-4359-b429-f3ebd03de349/N9jyldXlQn.lottie"
                                loop
                                autoplay
                            />
                            <h1 className="text-white mb-4 Name">Calculator</h1>
                            <button className="btn btn-outline-success" onClick={() => handleOpenLink("https://jfoyo.github.io/calculator/")}>Open</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <DotLottieReact
                                src="https://lottie.host/0ade6b51-6260-41c0-9882-731a5859bcdb/3VDTmTM62I.lottie"
                                loop
                                autoplay
                            />
                            <h1 className="text-white mb-4 Name">Beshify</h1>
                            <button className="btn btn-outline-success" onClick={() => handleOpenLink("https://jfoyo.github.io/beshify/")}>Open</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <DotLottieReact
                                src="https://lottie.host/91cfe78e-ecae-4096-9208-0cefc5523fb5/mRGRYbZdKH.lottie"
                                loop
                                autoplay
                            />
                            <h1 className="text-white mb-4 Name">Login/Register</h1>
                            <button className="btn btn-outline-success" onClick={() => handleOpenLink("https://jfoyo.github.io/Login-Register/")}>Open</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <DotLottieReact
                                src="https://lottie.host/80dc0036-3f9c-4074-811b-23b56a111eca/2hWywz0fBk.lottie"
                                loop
                                autoplay
                            />
                            <h1 className="text-white mb-4 Name">Calendar</h1>
                            <button className="btn btn-outline-success" onClick={() => handleOpenLink("")} disabled>Open</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <DotLottieReact
                                src="https://lottie.host/cbb22cba-fe52-42d8-84c7-82b96475d282/d4EhX5N3Gr.lottie"
                                loop
                                autoplay
                            />
                            <h1 className="text-white mb-4 Name">QR Generator</h1>
                            <button className="btn btn-outline-success" onClick={handleDownload}>Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;