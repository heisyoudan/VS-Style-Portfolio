import React from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { useLanguage } from '../context/LanguageContext';
import CommentLink from '../components/Common/CommentLink';
import CodeTypewriter from '../components/Common/CodeTypewriter';

const Home = ({ onNavigate }) => {
    const { t } = useLanguage();

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
            { text: `"${t.home.codeName}"`, color: 'var(--accent-green)' },
            { text: ',', color: 'var(--text-primary)' }
        ],
        [
            { text: '    Base: ', color: 'var(--text-primary)' },
            { text: '"Tokyo, Japan"', color: 'var(--accent-green)' },
            { text: ',', color: 'var(--text-primary)' }
        ],
        [
            { text: '    Focus: ', color: 'var(--text-primary)' },
            { text: '[', color: 'var(--text-primary)' },
            { text: '"Backend"', color: 'var(--accent-green)' },
            { text: ', ', color: 'var(--text-primary)' },
            { text: '"macOS"', color: 'var(--accent-green)' },
            { text: ', ', color: 'var(--text-primary)' },
            { text: '"XR"', color: 'var(--accent-green)' },
            { text: ', ', color: 'var(--text-primary)' },
            { text: '"AI-Assisted Dev"', color: 'var(--accent-green)' },
            { text: ']', color: 'var(--text-primary)' },
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
                        {t.home.role}
                    </h2>

                    <h3 style={{
                        marginTop: '8px',
                        fontSize: '15px',
                        color: 'var(--accent-cyan)',
                        fontWeight: '500'
                    }}>
                        {t.home.subtitle}
                    </h3>

                    <p style={{
                        marginTop: '16px',
                        marginBottom: '0',
                        maxWidth: '680px',
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: 'var(--text-muted)'
                    }}>
                        {t.home.description}
                    </p>

                    <div style={{ marginTop: '20px', marginBottom: '0' }}>
                        <CommentLink
                            text={t.home.viewWork}
                            onClick={() => onNavigate && onNavigate('Projects.jsx')}
                        />
                        <CommentLink
                            text={t.home.viewPlaybook}
                            onClick={() => window.open('https://github.com/heisyoudan/ai-agent-playbook', '_blank')}
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
