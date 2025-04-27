import React from "react";
import "./Education.css";

const Education = () => {
    return (
        <section className="education" id="education">
            <h2 className="heading">
                My <span>Journey</span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </h2>
            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">
                        Education
                        <span className="animate scroll" style={{ "--i": 2 }}></span>
                    </h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bx-calendar"></i> 2023 – 2026
                                </div>
                                <h3>BCA - Geeta University</h3>
                                <p>
                                    Pursuing Bachelor's in Computer Applications with a focus on
                                    Data Structures & Algorithms and Front-End Development.
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bx-calendar"></i> 2022 – 2023
                                </div>
                                <h3>12th - Unique Public School</h3>
                                <p>
                                    Completed higher secondary education with a focus on science
                                    and mathematics.
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bx-calendar"></i> 2020 – 2021
                                </div>
                                <h3>10th - Unique Public School</h3>
                                <p>Completed secondary education.</p>
                            </div>
                        </div>

                        <span className="animate scroll" style={{ "--i": 3 }}></span>
                    </div>
                </div>

                <div className="education-column">
                    <h3 className="title">
                        Experience
                        <span className="animate scroll" style={{ "--i": 5 }}></span>
                    </h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bx-calendar"></i> June 2024 – August 2024
                                </div>
                                <h3>DSA Intern - Coding Blocks</h3>
                                <p>
                                    Learned core data structures and algorithms in C++.
                                    Strengthened problem-solving skills and built an interactive
                                    LeetCode profile.
                                </p>
                            </div>
                        </div>

                        <span className="animate scroll" style={{ "--i": 6 }}></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
