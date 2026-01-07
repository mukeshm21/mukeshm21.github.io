import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Map, Clock, Layers, Zap, Flag } from 'lucide-react';

const WhyUs = () => {
    const reasons = [
        {
            icon: <TrendingUp size={28} />,
            title: "Better ROI",
            desc: "Longer service life, fewer replacements, and better overall value."
        },
        {
            icon: <Map size={28} />,
            title: "Local Expertise",
            desc: "Indigenous designs and locally sourced components for faster delivery."
        },
        {
            icon: <Clock size={28} />,
            title: "Reduced Downtime",
            desc: "Swap out a board, not an entire inverter. Quick maintenance."
        },
        {
            icon: <Layers size={28} />,
            title: "Future-Ready",
            desc: "Scalable systems built to grow with your energy needs."
        },
        {
            icon: <Zap size={28} />,
            title: "Advanced Tech",
            desc: "Cutting-edge technologies with SiC and GaN switches."
        },
        {
            icon: <Flag size={28} />,
            title: "Made in India",
            desc: "Local R&D and manufacturing aligned with national vision."
        }
    ];

    return (
        <section id="why-us" className="section" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Why Choose AMvertix?</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Delivering value through innovation and indigenous engineering.
                    </p>
                </motion.div>

                <div className="grid-cols-3">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                alignItems: 'center',
                                textAlign: 'center',
                                borderTop: '4px solid var(--primary-color)'
                            }}
                        >
                            <div style={{
                                background: 'rgba(14, 165, 233, 0.1)',
                                padding: '16px',
                                borderRadius: '50%',
                                color: 'var(--primary-color)',
                                marginBottom: '8px'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                            <p style={{ color: '#94a3b8' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
