import React from "react";
import "../CSS/About.css";
import Self from "../Images/Self.png";
import PLMUN from "../Images/PLMUN.png";
import Mets from "../Images/Mets.png";
import Infoman from "../Images/Infoman.png";
import CSharf from "../Images/C#.png";
import JS from "../Images/js.png";
import PHP from "../Images/php.png";
import Python from "../Images/python.png"
import ReactJs from "../Images/ReactJs.png";
import NodeJs from "../Images/NodeJs.png";
import JQuery from "../Images/JQuery.png"
import ASPX from "../Images/aspx.png";
import DevExpress from "../Images/DevExpress.png";
import MsSql from "../Images/MsSql.png";
import MySql from "../Images/MySql.png";
import HTML from "../Images/html.png";
import CSS from "../Images/css-3.png";
import Bootstrap from "../Images/bootstrap.png";
import Github from "../Images/github.png";

function About() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {/* Self Container */}
                <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img src={Self} alt="Self" className="Self mt-3 rounded-circle" />
                                        <h1 className="text-white mt-4 Name">Jayson Antonio Foyo</h1>
                                        <h4 className="text-white mb-2 Title">Software Developer</h4>
                                        <p className="text-success">EMPLOYED</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img src={PLMUN} alt="PLMUN" className="Self mt-3 rounded-circle" />
                                        <h1 className="text-white mt-3 Name">PLMUN</h1>
                                        <h5 className="text-white Title">Information Technology</h5>
                                        <p className="text-white">2019-2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mets Container */}
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img src={Mets} alt="Mets" className="Company rounded-circle mt-3" />
                                        <h3 className="text-white mt-3 Name">Mets Logistics Inc.</h3>
                                        <h5 className="text-white Title">Junior Programmer</h5>
                                        <p className="text-white">2023-Present</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h1 className="text-white mt-3 mb-3 Name">Projects</h1>
                                        <h5 className="text-white Title">GEARS WMS (Enhancement)</h5>
                                        <h5 className="text-white Title">IMS Barcoding (Enhancement)</h5>
                                        <h5 className="text-white Title">Portal (Enhancement)</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Infoman Container */}
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <img src={Infoman} alt="Infoman" className="Company rounded-circle mt-3" />
                                        <h3 className="text-white mt-3 Name">Information Managers Inc.</h3>
                                        <h5 className="text-white Title">Web Developer (OJT)</h5>
                                        <p className="text-white">2023-2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h1 className="text-white mt-3 Name">Projects</h1>
                                        <h5 className="text-white Title">CheckPloyee (Build)</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4 Skills">
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={CSharf} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "40%", backgroundColor: "#800080" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={JS} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "75%", backgroundColor: "#FFC72C" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={PHP} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "10%", backgroundColor: "#5072A7" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={Python} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "10%", backgroundColor: "#F0E68C" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={ReactJs} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "60%", backgroundColor: "#00FFFF" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={NodeJs} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "20%", backgroundColor: "#7FFF00" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={JQuery} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "50%", backgroundColor: "#000000" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={ASPX} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "65%", backgroundColor: "#7CB9E8" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={DevExpress} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "60%", backgroundColor: "#F28C28" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={MsSql} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "80%", backgroundColor: "#6CB4EE" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={MySql} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "70%", backgroundColor: "#007791" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={HTML} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "90%", backgroundColor: "#F08000" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={CSS} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "80%", backgroundColor: "#1E90FF" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={Bootstrap} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "80%", backgroundColor: "#452c63" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="skill-card">
                        <div className="row ">
                            <div className="col-2 d-flex justify-content-center">
                                <img src={Github} className="skill-icon" alt="CSharf"></img>
                            </div>
                            <div className="col-10 ProgBar">
                                <div className="progress bar">
                                    <div className="progress-bar" style={{ width: "50%", backgroundColor: "#000000" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;