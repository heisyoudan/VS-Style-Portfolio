import React from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { useLanguage } from '../context/LanguageContext';
import CommentLink from '../components/Common/CommentLink';
import CodeTypewriter from '../components/Common/CodeTypewriter';

const KEY = 'var(--accent-cyan)';
const STR = 'var(--accent-green)';
const PUNCT = 'var(--text-muted)';

const Home = ({ onNavigate }) => {
    const { t } = useLanguage();

    // Code values stay in English — they read as technical identifiers, not UI copy.
    const str = (value) => ({ text: value, color: STR });

    const profileCode = [
        [
            { text: 'const', color: 'var(--accent-pink)' },
            { text: ' ', color: PUNCT },
            { text: 'profile', color: 'var(--accent-yellow)' },
            { text: ' = ', color: PUNCT },
            { text: '{', color: PUNCT }
        ],
        [
            { text: '  name: ', color: KEY },
            { text: `"${t.home.codeName}"`, color: STR },
            { text: ',', color: PUNCT }
        ],
        [
            { text: '  base: ', color: KEY },
            { text: '"Tokyo, Japan"', color: STR },
            { text: ',', color: PUNCT }
        ],
        [],
        [
            { text: '  work: ', color: KEY },
            { text: '[', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"Enterprise Systems"'),
            { text: ',', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"Indie Products"'),
            { text: ',', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"International Clients"')
        ],
        [
            { text: '  ],', color: PUNCT }
        ],
        [],
        [
            { text: '  focus: ', color: KEY },
            { text: '[', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"Backend"'),
            { text: ',', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"Full Stack"'),
            { text: ',', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"macOS"'),
            { text: ',', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"AI Native Development"')
        ],
        [
            { text: '  ],', color: PUNCT }
        ],
        [],
        [
            { text: '  building: ', color: KEY },
            { text: '[', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"Vortex"'),
            { text: ',', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"Omit"'),
            { text: ',', color: PUNCT }
        ],
        [
            { text: '    ', color: PUNCT },
            str('"Maestro"')
        ],
        [
            { text: '  ],', color: PUNCT }
        ],
        [],
        [
            { text: '  github: ', color: KEY },
            { text: '"github.com/heisyoudan"', color: STR, link: 'https://github.com/heisyoudan' }
        ],
        [
            { text: '};', color: PUNCT }
        ]
    ];

    return (
        <RichContentWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '60px', maxWidth: '760px' }}>
                <h1 style={{
                    fontSize: '56px',
                    margin: '0 0 20px 0',
                    fontWeight: '800',
                    color: 'var(--accent-pink)',
                    lineHeight: '1.2'
                }}>
                    {t.home.name}
                </h1>

                <h2 style={{
                    fontSize: '26px',
                    color: 'var(--text-primary)',
                    fontWeight: '600',
                    margin: '0 0 10px 0',
                    lineHeight: '1.4'
                }}>
                    {t.home.role}
                </h2>

                <h3 style={{
                    marginTop: '4px',
                    marginBottom: '0',
                    fontSize: '15px',
                    color: 'var(--accent-cyan)',
                    fontWeight: '500',
                    lineHeight: '1.6'
                }}>
                    {t.home.subtitle}
                </h3>

                <p style={{
                    marginTop: '20px',
                    marginBottom: '0',
                    fontSize: '15px',
                    lineHeight: '1.8',
                    color: 'var(--text-muted)'
                }}>
                    {t.home.description}
                </p>

                <div style={{ marginTop: '24px' }}>
                    <CommentLink
                        text={t.home.viewWork}
                        onClick={() => onNavigate && onNavigate('Projects.jsx')}
                    />
                    <CommentLink
                        text={t.home.viewPlaybook}
                        onClick={() => window.open('https://github.com/heisyoudan/ai-agent-playbook', '_blank')}
                    />
                </div>

                <div style={{ marginTop: '8px', marginBottom: '40px' }}>
                    <CodeTypewriter lines={profileCode} delay={15} initialDelay={100} />
                </div>
            </div>
        </RichContentWrapper>
    );
};

export default Home;
