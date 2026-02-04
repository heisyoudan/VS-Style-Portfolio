import React, { useEffect, useState } from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { useLanguage } from '../context/LanguageContext';

const TerminalBar = ({ name, level, color, totalChars }) => {
    const [displayPerc, setDisplayPerc] = useState(0);
    const targetPerc = parseInt(level);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            if (current < targetPerc) {
                current += 1;
                setDisplayPerc(current);
            } else {
                clearInterval(interval);
            }
        }, 20);
        return () => clearInterval(interval);
    }, [targetPerc]);

    // Parse name to separate title and comment
    // usage: "Java / Spring Boot (Backend / Microservices)" -> ["Java / Spring Boot", "Backend / Microservices"]
    const match = name.match(/^(.*?)\s*\((.*?)\)$/);
    const mainTitle = match ? match[1] : name;
    const comment = match ? match[2] : null;

    const filledChars = Math.floor((displayPerc / 100) * totalChars);
    const emptyChars = totalChars - filledChars;

    const barString = (
        <span>
            <span style={{ color: 'var(--text-muted)' }}>[</span>
            <span style={{ color: color }}>{'#'.repeat(filledChars)}</span>
            <span style={{ color: 'var(--border-color)' }}>{'.'.repeat(emptyChars)}</span>
            <span style={{ color: 'var(--text-muted)' }}>]</span>
        </span>
    );

    return (
        <div style={{ marginBottom: '30px', fontFamily: 'var(--font-mono)' }}>
            <div style={{ marginBottom: '5px', fontSize: '15px', color: 'var(--text-primary)', fontWeight: '500' }}>
                {mainTitle}
            </div>
            {comment && (
                <div style={{ marginBottom: '8px', fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    // {comment}
                </div>
            )}
            <div style={{ fontSize: '14px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                {barString} <span style={{ color: color }}>{displayPerc}%</span>
            </div>
        </div>
    );
};

const Skills = () => {
    const { t } = useLanguage();
    const [totalChars, setTotalChars] = useState(40);

    // Dynamic colors for the list
    const colors = [
        "var(--accent-red)", "var(--accent-cyan)", "var(--accent-green)",
        "var(--accent-orange)", "var(--accent-purple)", "var(--accent-cyan)",
        "var(--accent-yellow)", "var(--accent-pink)"
    ];

    useEffect(() => {
        const handleResize = () => {
            setTotalChars(window.innerWidth < 600 ? 20 : 40);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <RichContentWrapper>
            <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px' }}>
                <span style={{ color: 'var(--accent-pink)' }}>#</span> {t.skills.title}
            </h2>
            <div style={{ maxWidth: '800px' }}>
                <div style={{ padding: '0', marginTop: '20px' }}>
                    <div style={{ color: 'var(--accent-green)', marginBottom: '20px', fontSize: '12px' }}>
                        root@portfolio:~/skills# ./check_proficiency.sh
                    </div>

                    {t.skills.items.map((s, i) => (
                        <TerminalBar
                            key={i}
                            name={s.name}
                            level={s.level}
                            color={colors[i % colors.length]}
                            totalChars={totalChars}
                        />
                    ))}

                    <div style={{ color: 'var(--accent-green)', marginTop: '20px', fontSize: '12px', animation: 'blink 1s infinite' }}>
                        root@portfolio:~/skills# <span style={{ backgroundColor: 'var(--accent-green)', color: '#000' }}>&nbsp;</span>
                    </div>
                    <style>
                        {`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}
                    </style>
                </div>
            </div>
        </RichContentWrapper>
    );
};

export default Skills;
