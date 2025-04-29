import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Create IntersectionObserver to handle animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-animate');
                        // Once the animation is triggered, we can stop observing this element
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 } // 20% of the element must be visible
        );

        // Start observing the section
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Clean up observer on component unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="about" id="about" ref={sectionRef}>
            <h2 className="heading">About <span>Me</span></h2>

            <div className="about-img">
                {/* Fixed: Using a direct placeholder instead of a failing path with fallback */}
                <img 
                    src="/api/placeholder/200/200?text=V" 
                    alt="Vikram Singh" 
                />
                <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                <h3>Frontend Developer</h3>
                <p>
                    I'm Vikram Singh, a Front-End Developer and BCA student at Geeta University passionate about web development and data structures & algorithms.
                    With skills in HTML, CSS, JavaScript, and C++, I combine technical knowledge with strong problem-solving abilities.
                    My experience includes a DSA internship at Coding Blocks where I enhanced my algorithmic thinking and coding practices.
                    I actively practice on LeetCode and have earned certifications including an OWASP Top 10 badge from TryHackMe.
                    I'm eager to apply my technical skills and collaborative mindset to create impactful web solutions while continuing to grow as a developer.
                </p>

                <div className="btn-box btns">
                    <a href="#" className="btn" target="_blank" rel="noreferrer">My Resume</a>
                </div>
            </div>
        </section>
    );
};

export default About;