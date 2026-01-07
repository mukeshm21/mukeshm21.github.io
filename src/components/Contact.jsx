import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd send this data to a backend.
        // Since this is a static site, we'll simulate success and use mailto as fallback.
        setFormStatus('success');

        // Optional: Open mail client
        const formData = new FormData(e.target);
        const subject = `Contact from ${formData.get('name')}`;
        const body = `${formData.get('message')} \n\nFrom: ${formData.get('email')}`;
        window.location.href = `mailto:office.amvertix@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="section" style={{ background: 'var(--card-bg)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Get in Touch</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Ready to power your future? Contact us today.
                    </p>
                </motion.div>

                <div className="grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card"
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contact Information</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ background: 'rgba(14, 165, 233, 0.1)', padding: '12px', borderRadius: '12px', color: 'var(--primary-color)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Us</p>
                                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>office.amvertix@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ background: 'rgba(14, 165, 233, 0.1)', padding: '12px', borderRadius: '12px', color: 'var(--primary-color)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Visit Us</p>
                                    <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card"
                    >
                        {formStatus === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Message Sent!</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Opening your email client to send the message...</p>
                                <button
                                    onClick={() => setFormStatus(null)}
                                    className="btn-primary"
                                    style={{ marginTop: '20px' }}
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Your Name"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--card-border)',
                                            background: 'rgba(0,0,0,0.1)',
                                            color: 'var(--text-color)',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--card-border)',
                                            background: 'rgba(0,0,0,0.1)',
                                            color: 'var(--text-color)',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Your Message"
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--card-border)',
                                            background: 'rgba(0,0,0,0.1)',
                                            color: 'var(--text-color)',
                                            outline: 'none',
                                            resize: 'vertical'
                                        }}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
