import React, { useState } from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { useLanguage } from '../context/LanguageContext';
import CommentLink from '../components/Common/CommentLink';
import CodeTypewriter from '../components/Common/CodeTypewriter';

const Home = ({ onNavigate }) => {
    const { t, language } = useLanguage();

    // Data for typewriter effect
    const infoCode = [
        [
            { text: 'const', color: 'var(--accent-pink)' },
            { text: ' ', color: 'var(--text-primary)' },
            { text: 'info', color: 'var(--accent-yellow)' },
            { text: ' = ', color: 'var(--text-primary)' },
            { text: '{', color: 'var(--text-primary)' }
        ],
        [
            { text: '    Name: ', color: 'var(--text-primary)' },
            { text: language === 'zh' ? '"He Xiaodan"' : '"Heisyoudan"', color: 'var(--accent-green)' },
            { text: ',', color: 'var(--text-primary)' }
        ],
        [
            { text: '    CurrentLocation: ', color: 'var(--text-primary)' },
            { text: '"Tokyo, Japan"', color: 'var(--accent-green)' },
            { text: ',', color: 'var(--text-primary)' }
        ],
        [
            { text: '    Interests: ', color: 'var(--text-primary)' },
            { text: '[', color: 'var(--text-primary)' },
            { text: '"AI-Driven Workflow"', color: 'var(--accent-green)' },
            { text: ', ', color: 'var(--text-primary)' },
            { text: '"macOS/Web/Unity"', color: 'var(--accent-green)' },
            { text: ', ', color: 'var(--text-primary)' },
            { text: '"Product Design"', color: 'var(--accent-green)' },
            { text: ']', color: 'var(--text-primary)' },
            { text: ',', color: 'var(--text-primary)' }
        ],
        [
            { text: '    Email: ', color: 'var(--text-primary)' },
            { text: '"heisyoudan@yahoo.com"', color: 'var(--accent-green)' },
            { text: ',', color: 'var(--text-primary)' }
        ],
        [
            { text: '    GitHub: ', color: 'var(--text-primary)' },
            { text: '"https://github.com/heisyoudan"', color: 'var(--accent-green)', link: 'https://github.com/heisyoudan' },
            { text: ',', color: 'var(--text-primary)' }
        ],
        [
            { text: '};', color: 'var(--text-primary)' }
        ]
    ];

    return (
        <RichContentWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '60px' }}>
                <div>
                    <h2 style={{
                        margin: 0,
                        fontSize: '28px',
                        color: 'var(--text-primary)',
                        fontWeight: '600'
                    }}>
                        {t.home.intro}
                    </h2>

                    <h1 style={{
                        fontSize: '64px',
                        margin: '10px 0',
                        fontWeight: '800',
                        color: 'var(--accent-pink)',
                        lineHeight: '1.2'
                    }}>
                        {t.home.name}
                    </h1>

                    <h2 style={{
                        marginTop: '10px',
                        fontSize: '24px',
                        color: 'var(--text-secondary)',
                        fontWeight: '500'
                    }}>
                        "Software Engineer"
                    </h2>

                    <div style={{ marginTop: '15px', marginBottom: '0' }}>
                        <CommentLink
                            text="Go to Projects"
                            onClick={() => onNavigate && onNavigate('Projects.jsx')}
                        />
                        <CommentLink
                            text="Go to About Me"
                            onClick={() => onNavigate && onNavigate('About.jsx')}
                        />
                    </div>

                    <div style={{
                        marginTop: '0',
                        marginBottom: '40px',
                    }}>
                        <CodeTypewriter lines={infoCode} delay={30} initialDelay={100} />
                    </div>


                </div>
            </div>
        </RichContentWrapper>
    );
};

export default Home;
