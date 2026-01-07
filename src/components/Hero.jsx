import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Zap, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Dynamic Background - Removed hardcoded dark gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 50% 50%, var(--bg-gradient-1) 0%, transparent 70%)',
                zIndex: -2
            }} />

            {/* Animated Glow Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, var(--accent-color) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    opacity: 0.2,
                    zIndex: -1
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, var(--primary-color) 0%, rgba(0,0,0,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(50px)',
                    opacity: 0.2,
                    zIndex: -1
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            color: 'var(--primary-color)',
                            padding: '10px 20px',
                            borderRadius: '999px',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            marginBottom: '32px',
                            backdropFilter: 'blur(4px)'
                        }}>
                            <Globe size={16} />
                            Powering India's Clean Energy Revolution
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                            fontWeight: '900',
                            lineHeight: 1.1,
                            marginBottom: '24px',
                            letterSpacing: '-0.02em',
                            color: 'var(--text-color)'
                        }}
                    >
                        Future-Ready <br />
                        <span className="text-gradient" style={{
                            filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))'
                        }}>Energy Solutions</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            fontSize: '1.35rem',
                            color: 'var(--text-muted)',
                            marginBottom: '48px',
                            maxWidth: '700px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            lineHeight: 1.6
                        }}
                    >
                        We engineer modular, high-efficiency solar inverters and power electronics using advanced SiC & GaN technology. Designed in India, for the world.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <Link to="products" smooth={true} duration={500}>
                            <button className="btn-primary" style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '1.2rem',
                                padding: '16px 40px',
                                boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)'
                            }}>
                                Explore Innovation <ArrowRight size={22} />
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <button style={{
                                background: 'var(--card-bg)',
                                color: 'var(--text-color)',
                                padding: '16px 40px',
                                borderRadius: '8px',
                                border: '1px solid var(--card-border)',
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                backdropFilter: 'blur(4px)',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => e.target.style.background = 'var(--card-hover-bg)'}
                                onMouseLeave={(e) => e.target.style.background = 'var(--card-bg)'}
                            >
                                Partner With Us
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'var(--text-muted)'
                }}
            >
                <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, transparent, currentColor, transparent)' }} />
            </motion.div>
        </section>
    );
};

export default Hero;
