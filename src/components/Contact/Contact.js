import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, like sending to a backend
        console.log('Form submitted:', formData);

        // Reset form after submission
        setFormData({
            fullName: '',
            email: '',
            mobile: '',
            subject: '',
            message: ''
        });

        // Show success message to user
        alert('Message sent successfully!');
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span><span className="animate scroll" style={{ "--i": 1 }}></span></h2>

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
                    <span className="animate scroll" style={{ "--i": 3 }}></span>
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
                    <span className="animate scroll" style={{ "--i": 5 }}></span>
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
                    <span className="animate scroll" style={{ "--i": 7 }}></span>
                </div>

                <div className="btn-box btns">
                    <button type="submit" className="btn">Submit</button>
                    <span className="animate scroll" style={{ "--i": 9 }}></span>
                </div>
            </form>
        </section>
    );
};

export default Contact;