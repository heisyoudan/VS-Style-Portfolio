import React, { useState } from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { useLanguage } from '../context/LanguageContext';
import CommentLink from '../components/Common/CommentLink';

const Home = ({ onNavigate }) => {
    const { t } = useLanguage();

    // Mapping old translation keys to new style if needed, or just using them directly
    // {t.home.contact} was "Contact Me" -> About
    // {t.home.viewWork} was "View Projects" -> Projects

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

                    <div style={{
                        marginTop: '40px',
                        marginBottom: '40px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: 'var(--text-primary)'
                    }}>
                        <div>
                            <span style={{ color: 'var(--accent-pink)' }}>const</span> <span style={{ color: 'var(--accent-yellow)' }}>info</span> = <span style={{ color: 'var(--text-primary)' }}>{'{'}</span>
                        </div>
                        <div style={{ paddingLeft: '20px' }}>
                            <div>
                                <span style={{ color: 'var(--text-primary)' }}>CurrentLocation:</span> <span style={{ color: 'var(--accent-green)' }}>"Tokyo, Japan"</span>,
                            </div>
                            <div>
                                <span style={{ color: 'var(--text-primary)' }}>Interests:</span> <span style={{ color: 'var(--text-primary)' }}>[</span><span style={{ color: 'var(--accent-green)' }}>"Java"</span>, <span style={{ color: 'var(--accent-green)' }}>"Unity XR"</span>, <span style={{ color: 'var(--accent-green)' }}>"AI-Native"</span>, <span style={{ color: 'var(--accent-green)' }}>"macOS"</span><span style={{ color: 'var(--text-primary)' }}>]</span>
                            </div>
                        </div>
                        <div>
                            <span style={{ color: 'var(--text-primary)' }}>{'}'}</span>;
                        </div>
                    </div>

                    <div style={{ marginTop: '0px' }}>
                        <div style={{ marginTop: '20px' }}>
                            <CommentLink
                                text="Go to Projects"
                                onClick={() => onNavigate && onNavigate('Projects.jsx')}
                            />
                            <CommentLink
                                text="Go to About Me"
                                onClick={() => onNavigate && onNavigate('About.jsx')}
                            />
                        </div>

                        <div style={{ marginTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '16px', lineHeight: '1.6' }}>
                            <span style={{ color: 'var(--accent-pink)' }}>function</span> <span style={{ color: 'var(--accent-yellow)' }}>main</span><span style={{ color: 'var(--text-primary)' }}>() {'{'}</span>
                            <div style={{ paddingLeft: '20px' }}>
                                <span style={{ color: 'var(--text-primary)' }}>portfolio.</span><span style={{ color: 'var(--accent-yellow)' }}>start</span><span style={{ color: 'var(--text-primary)' }}>();</span>
                            </div>
                            <span style={{ color: 'var(--text-primary)' }}>{'}'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </RichContentWrapper>
    );
};

export default Home;
