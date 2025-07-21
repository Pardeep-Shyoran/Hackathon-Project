import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        subject: '',
        orderNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send to API or email)
        alert('Form submitted!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.getInTouch}>GET IN <br />TOUCH <span className={styles.fokusLogo}>FOKUS</span></h1>
                <p className={styles.infoText}>
                    We love to hear from you. Reach out with comments, questions and feedback. Our lovely team will reply as quickly as we can.
                </p>
                <p className={styles.emailText}>
                    Feel free to shoot us an email <span className={styles.email}>contact@FOKUS.com</span>
                </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.heading}>DON’T BE SHY.<br />HIT US UP AND WE’LL GET BACK TO YOU!</h2>
                <div className={styles.formRow}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full name"
                        value={form.fullName}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formRow}>
                    <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={styles.input}
                        required
                    >
                        <option value="">Subject</option>
                        <option value="General inquiry">General inquiry</option>
                        <option value="Order issue">Order issue</option>
                        <option value="Product feedback">Product feedback</option>
                    </select>
                    <input
                        type="text"
                        name="orderNumber"
                        placeholder="Order number (optional)"
                        value={form.orderNumber}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={4}
                    required
                />
                <div className={styles.actions}>
                    <button type="submit" className={styles.submitBtn}>SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
