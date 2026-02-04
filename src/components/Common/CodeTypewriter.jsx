import React, { useState, useEffect } from 'react';

const CodeTypewriter = ({ lines, delay = 50, initialDelay = 500 }) => {
    const [displayedLines, setDisplayedLines] = useState([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    // Flatten lines for easier processing or just handle state logic
    // We will render up to the current coordinates

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasStarted(true);
        }, initialDelay);
        return () => clearTimeout(timer);
    }, [initialDelay]);

    useEffect(() => {
        if (!hasStarted) return;

        if (currentLineIndex >= lines.length) return; // Stop typing animation when done

        const currentLine = lines[currentLineIndex];
        // Calculate total length of current line text
        const totalLineLength = currentLine.reduce((acc, token) => acc + token.text.length, 0);

        if (currentCharIndex < totalLineLength) {
            const timeout = setTimeout(() => {
                setCurrentCharIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else {
            // Line finished, move to next
            const timeout = setTimeout(() => {
                setCurrentLineIndex(prev => prev + 1);
                setCurrentCharIndex(0);
            }, delay * 5); // Slight pause at end of line
            return () => clearTimeout(timeout);
        }
    }, [hasStarted, currentLineIndex, currentCharIndex, lines, delay]);

    // Helper to render visible part of a line
    const renderLine = (lineTokens, lineIdx) => {
        if (lineIdx > currentLineIndex) return null; // Future lines

        let charsToRender = (lineIdx === currentLineIndex) ? currentCharIndex : 99999;
        // 如果所有行都完成了，显示最后一行的光标
        const isLastLine = lineIdx === lines.length - 1;
        const showCursor = (lineIdx === currentLineIndex) || (isLastLine && currentLineIndex >= lines.length);

        return (
            <div key={lineIdx} style={{ minHeight: '1.6em', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                {lineTokens.map((token, tokenIdx) => {
                    if (charsToRender <= 0) return null;

                    const text = token.text;
                    const sliceLength = Math.min(text.length, charsToRender);
                    charsToRender -= text.length;

                    if (sliceLength <= 0) return null;

                    const content = text.slice(0, sliceLength);

                    if (token.link) {
                        return (
                            <a
                                key={tokenIdx}
                                href={token.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: token.color,
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid transparent',
                                    transition: 'border-color 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.borderBottom = `1px solid ${token.color}`}
                                onMouseLeave={(e) => e.target.style.borderBottom = '1px solid transparent'}
                            >
                                {content}
                            </a>
                        );
                    }

                    return (
                        <span key={tokenIdx} style={{ color: token.color }}>
                            {content}
                        </span>
                    );
                })}
                {/* Cursor */}
                {showCursor && (
                    <span style={{
                        display: 'inline-block',
                        width: '2px',
                        height: '1.2em',
                        backgroundColor: 'var(--accent-pink)',
                        marginLeft: '2px',
                        animation: 'blink 1s step-end infinite',
                        verticalAlign: 'text-bottom'
                    }}></span>
                )}
            </div>
        );
    };

    return (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', lineHeight: '1.6' }}>
            {lines.map((line, idx) => renderLine(line, idx))}
            <style>
                {`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                `}
            </style>
        </div>
    );
};

export default CodeTypewriter;
