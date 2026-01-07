import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, ShieldAlert, Wrench, BatteryCharging } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            icon: <AlertTriangle size={32} className="text-secondary" />,
            title: "High Import Dependency",
            desc: "67%+ of inverters & components are imported, leading to supply chain risks."
        },
        {
            icon: <TrendingDown size={32} className="text-secondary" />,
            title: "Market Pressure",
            desc: "Cheap imports create price volatility and local market instability."
        },
        {
            icon: <ShieldAlert size={32} className="text-secondary" />,
            title: "Reliability Issues",
            desc: "Limited warranty confidence and weak after-sales support in Tier 2/3 cities."
        },
        {
            icon: <Wrench size={32} className="text-secondary" />,
            title: "Maintenance Challenges",
            desc: "Replacing entire inverters instead of components increases downtime and cost."
        },
        {
            icon: <BatteryCharging size={32} className="text-secondary" />,
            title: "Growing Demand",
            desc: "Urgent need for reliable EV charging and power supplies for India's infrastructure."
        }
    ];

    return (
        <section id="problem" className="section" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>The Challenge</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        India's energy sector faces critical hurdles that hinder sustainable growth and independence.
                    </p>
                </motion.div>

                <div className="grid-cols-3">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}
                        >
                            <div style={{
                                background: 'rgba(234, 179, 8, 0.1)',
                                padding: '12px',
                                borderRadius: '12px',
                                color: 'var(--secondary-color)'
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

export default Problem;
