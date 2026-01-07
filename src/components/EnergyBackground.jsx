import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EnergyBackground = ({ theme }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationFrameId;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                // Adjust particle color based on theme
                const isDark = theme === 'dark';
                const color1 = isDark ? '14, 165, 233' : '234, 179, 8'; // Blue vs Yellow
                const color2 = isDark ? '34, 197, 94' : '14, 165, 233'; // Green vs Blue

                this.color = `rgba(${Math.random() > 0.5 ? color1 : color2}, ${Math.random() * 0.5 + 0.1})`;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        // Connection color based on theme
                        const strokeColor = theme === 'dark' ? '14, 165, 233' : '234, 179, 8';
                        ctx.strokeStyle = `rgba(${strokeColor}, ${0.1 - distance / 1500})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run when theme changes

    return (
        <>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    pointerEvents: 'none',
                    opacity: 0.6
                }}
            />

            {/* Sun Rising Animation */}
            <motion.div
                initial={{ y: '100vh', opacity: 0 }}
                animate={{
                    y: theme === 'light' ? '10vh' : '100vh',
                    opacity: theme === 'light' ? 1 : 0
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    position: 'fixed',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: -2,
                    pointerEvents: 'none'
                }}
            />

            {/* Core Sun */}
            <motion.div
                initial={{ y: '100vh', opacity: 0 }}
                animate={{
                    y: theme === 'light' ? '20vh' : '100vh',
                    opacity: theme === 'light' ? 0.8 : 0
                }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                style={{
                    position: 'fixed',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, #fbbf24 0%, rgba(245, 158, 11, 0.5) 100%)',
                    borderRadius: '50%',
                    boxShadow: '0 0 100px rgba(251, 191, 36, 0.6)',
                    zIndex: -2,
                    pointerEvents: 'none'
                }}
            />
        </>
    );
};

export default EnergyBackground;
