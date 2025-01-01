import "../CSS/Home.css";
import Hi from "../Images/Hi.gif";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
    
    const handleOpenLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    
    return (
        <div className="container">
            <div className="row d-flex flex-wrap-reverse">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <DotLottieReact
                        src="https://lottie.host/13348316-a477-4665-b0ba-391cd098aa56/U9RiUI65Zd.lottie"
                        loop
                        autoplay
                        style={{ width: "100%", maxWidth: "100%" }}
                    />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column align-items-center Greetings mb-4">
                    <img src={Hi} alt="Hi" className="Hi mb-3"/>
                    <h1 className="mb-4 text-white">Welcome to my Portfolio</h1>
                    <p className="text-white"> 
                        I’m a web developer and software engineer with a passion for creating solutions that make life easier, more enjoyable, or more efficient. Whether it’s designing sleek, responsive websites or developing software to solve real-world challenges, I love turning ideas into reality through code.
                    </p>
                    <p className="text-white">
                        Over the years, I’ve honed my skills in building user-friendly interfaces, writing clean and efficient code, and approaching problems creatively. Beyond the technical side, I truly enjoy collaborating with people to bring their visions to life.
                    </p>
                    <p className="text-white">
                        Feel free to explore my work, learn more about what I do, and reach out if you’d like to discuss a project or idea. Let’s create something amazing together!
                    </p>

                    <div className="Buttons d-flex justify-content-center flex-wrap">
                        <button className="btn btn-outline-light custom-button m-4" onClick={() => handleOpenLink("https://github.com/JFoyo")}>Github  <FontAwesomeIcon icon={faGithub} /></button>
                        <button className="btn btn-outline-success custom-button m-4" onClick={() => (window.location.hash = "#contact")}>Hire Me <FontAwesomeIcon icon={faEnvelope} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;