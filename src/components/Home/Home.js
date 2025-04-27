import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import './Home.css'; // Importing CSS

const Home = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add('show-animate');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="home" id="home" ref={sectionRef}>
            <div className="home-content">
                <h1>Hi, I'm <span>Vikram Singh</span></h1>
                <div className="text-animate">
                    <h3>Front End Developer</h3>
                </div>
                <p>
                    Motivated BCA student with a strong interest in Data Structures & Algorithms and Front-End Development.
                    Proficient in HTML, CSS, JavaScript, and eager to apply problem-solving and coding skills in real-world projects.
                </p>
                <div className="btn-box">
                    <a href="mailto:vikramsingh022004@gmail.com" className="btn">Hire Me</a>
                    <a href="https://wa.me/918950899252?text=Hello%2C%20I%20have%20visited%20your%20Portfolio.%20And%20I%20%20want%20to%20talk%20to%20you." className="btn">Let's Talk</a>
                </div>
            </div>

            <div className="home-sci">
                <a href="https://www.instagram.com/vikramm.001/"><FaInstagram /></a>
                <a href="https://leetcode.com/u/V1KR4M0001/"><BiCodeAlt /></a>
                <a href="https://www.linkedin.com/in/vikram-singh-b415512ab/"><FaLinkedin /></a>
                <a href="https://github.com/V1KR4M0001"><FaGithub /></a>
            </div>
        </section>
    );
};

export default Home;
