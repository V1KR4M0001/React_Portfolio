import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        
        try {
            // Here you would typically handle form submission, like sending to a backend
            console.log('Form submitted:', formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Reset form after submission
            setFormData({
                fullName: '',
                email: '',
                mobile: '',
                subject: '',
                message: ''
            });
            
            // Show success message to user
            setSubmitMessage('Message sent successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitMessage('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <h2 className="heading">Contact <span>Me!</span></h2>

            {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('Failed') ? 'error' : 'success'}`}>
                    {submitMessage}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <div className="input-field">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                        />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                        />
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="input-box">
                    <div className="input-field">
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                            required
                        />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Email Subject"
                            required
                        />
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="textarea-field">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <span className="focus"></span>
                </div>

                <div className="btn-box btns">
                    <button 
                        type="submit" 
                        className="btn" 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;