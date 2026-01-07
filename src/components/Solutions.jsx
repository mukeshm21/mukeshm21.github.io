import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Cpu, Wifi, MapPin, CheckCircle } from 'lucide-react';

const Solutions = () => {
    const solutions = [
        {
            icon: <Settings size={32} />,
            title: "Local Manufacturing",
            desc: "Indigenous production of inverters, EV chargers & power supplies aligned with 'Made in India'."
        },
        {
            icon: <Cpu size={32} />,
            title: "Modular Design",
            desc: "Scalable architecture allowing board-level upgrades and quick maintenance."
        },
        {
            icon: <Wifi size={32} />,
            title: "Smart IoT Enabled",
            desc: "Real-time monitoring and smart energy management for optimized performance."
        },
        {
            icon: <MapPin size={32} />,
            title: "Wide Network",
            desc: "Strong after-sales network ensuring coverage in Tier 2 and Tier 3 cities."
        },
        {
            icon: <CheckCircle size={32} />,
            title: "Government Aligned",
            desc: "Designed for schemes like PM Surya Ghar and PM-KUSUM."
        }
    ];

    return (
        <section id="solutions" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Solutions</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Innovative, locally-engineered technologies solving today's energy problems.
                    </p>
                </motion.div>

                <div className="grid-cols-3">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                alignItems: 'flex-start',
                                border: '1px solid rgba(34, 197, 94, 0.2)'
                            }}
                        >
                            <div style={{
                                background: 'rgba(34, 197, 94, 0.1)',
                                padding: '12px',
                                borderRadius: '12px',
                                color: 'var(--accent-color)'
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

export default Solutions;
