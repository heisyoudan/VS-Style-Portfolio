import React from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { useLanguage } from '../context/LanguageContext';
import { VscLinkExternal } from 'react-icons/vsc';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <RichContentWrapper>
            <div style={{ fontFamily: 'var(--font-mono)', lineHeight: '1.6' }}>
                <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px' }}>
                    <span style={{ color: 'var(--accent-pink)' }}>#</span> {t.contact.title}
                </h2>

                <p style={{ color: 'var(--text-primary)', marginBottom: '30px', fontSize: '16px' }}>
                    {t.contact.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {t.contact.items.map((item, index) => (
                        <div key={index} style={{ fontSize: '15px' }}>
                            <span style={{ color: 'var(--accent-pink)' }}>[{item.label}]</span>
                            {' '}
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}
                                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                            >
                                ({item.value})
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </RichContentWrapper>
    );
};

export default Contact;
