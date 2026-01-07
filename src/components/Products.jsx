import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Battery, Zap, Server } from 'lucide-react';

const Products = () => {
    const products = [
        {
            icon: <Sun size={48} />,
            title: "Hybrid Solar Inverter",
            desc: "Integrates solar, grid, and battery for seamless power management."
        },
        {
            icon: <Zap size={48} />,
            title: "Grid-Tied Inverter",
            desc: "Efficient solar-to-grid solution for residential and commercial use."
        },
        {
            icon: <Battery size={48} />,
            title: "EV Chargers",
            desc: "Fast and reliable charging stations for modern electric vehicles."
        },
        {
            icon: <Server size={48} />,
            title: "Power Supplies",
            desc: "Reliable auxiliary power units for industrial and consumer needs."
        }
    ];

    return (
        <section id="products" className="section" style={{ background: 'var(--bg-color)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Products</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
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
                                <p style={{ color: 'var(--text-muted)', marginBottom: '0' }}>{product.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
