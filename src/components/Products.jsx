import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap, Server } from 'lucide-react';

const Products = () => {
    const products = [
        {
            icon: <Sun size={48} />,
            title: "Hybrid Solar Inverter",
            desc: "Integrates solar, grid, and battery for seamless power management.",
            status: "Prototype Ready"
        },
        {
            icon: <Zap size={48} />,
            title: "Grid-Tied Inverter",
            desc: "Efficient solar-to-grid solution for residential and commercial use.",
            status: "In Development"
        },
        {
            icon: <Battery size={48} />,
            title: "EV Chargers",
            desc: "Fast and reliable charging stations for modern electric vehicles.",
            status: "Coming 2026"
        },
        {
            icon: <Server size={48} />,
            title: "Power Supplies",
            desc: "Reliable auxiliary power units for industrial and consumer needs.",
            status: "Available"
        }
    ];

    return (
        <section id="products" className="section" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Products</h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Cutting-edge power electronics built with SiC and GaN technology.
                    </p>
                </motion.div>

                <div className="grid-cols-2">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '24px',
                                padding: '32px'
                            }}
                        >
                            <div style={{
                                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                                padding: '20px',
                                borderRadius: '16px',
                                color: 'white',
                                boxShadow: '0 10px 20px rgba(14, 165, 233, 0.3)'
                            }}>
                                {product.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{product.title}</h3>
                                <p style={{ color: '#94a3b8', marginBottom: '12px' }}>{product.desc}</p>
                                <span style={{
                                    fontSize: '0.8rem',
                                    padding: '4px 12px',
                                    borderRadius: '999px',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {product.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
