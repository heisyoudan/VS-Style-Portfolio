import React, { useState } from 'react';

const CommentLink = ({ text, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '16px',
                color: isHovered ? 'var(--accent-green)' : 'var(--text-muted)', // Green or bright color on hover
                cursor: 'pointer',
                marginTop: '8px',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s'
            }}
        >
            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
            `}</style>
            <span style={{ marginRight: '10px', opacity: 0.7 }}>//</span>
            <span style={{
                textDecoration: 'none', // Removed underline as user asked for "input effect" not link style
                color: 'inherit'
            }}>
                {text}
            </span>
            {isHovered && (
                <span style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '18px',
                    backgroundColor: 'var(--accent-green)', // Cursor color
                    marginLeft: '5px',
                    animation: 'blink 1s step-end infinite',
                    verticalAlign: 'text-bottom'
                }}></span>
            )}
        </div>
    );
};

export default CommentLink;
