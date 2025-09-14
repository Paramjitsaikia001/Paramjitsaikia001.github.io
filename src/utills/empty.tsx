import React from 'react';

const NotFoundPage: React.FC = () => (
    <div
        style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #ece9f7 0%, #f5f7fa 100%)',
            color: '#333',
            fontFamily: 'Inter, sans-serif',
        }}
    >
        <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginBottom: 32 }}
        >
            <circle cx="60" cy="60" r="60" fill="#f3f4f6" />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fontSize="48"
                fontWeight="bold"
                fill="#6366f1"
            >
                404
            </text>
        </svg>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 8 }}>
            Page Not Found
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: 24 }}>
            Sorry, the page you are looking for does not exist.
        </p>
        <a
            href="/"
            style={{
                padding: '12px 32px',
                background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
                color: '#fff',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(99,102,241,0.1)',
                transition: 'background 0.2s',
            }}
        >
            Go Home
        </a>
    </div>
);

export default NotFoundPage;