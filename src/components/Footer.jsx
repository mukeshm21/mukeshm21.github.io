import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: '#020617',
            padding: '40px 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            color: '#94a3b8',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <img src="/AMvertix.png" alt="AMvertix" style={{ height: '30px', opacity: 0.8 }} />
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>AMvertix</span>
                </div>
                <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} AMvertix. All Rights Reserved.</p>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>Designed for India's Clean Energy Future.</p>
            </div>
        </footer>
    );
};

export default Footer;
