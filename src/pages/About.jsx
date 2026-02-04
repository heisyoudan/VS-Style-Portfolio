import React from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <RichContentWrapper>
            <div style={{ fontFamily: 'var(--font-mono)', lineHeight: '1.8' }}>
                <div style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                    /** <br />
                    * <span style={{ color: 'var(--accent-pink)' }}>@file</span> About.js <br />
                    * <span style={{ color: 'var(--accent-pink)' }}>@author</span> He Xiaodan <br />
                    * <span style={{ color: 'var(--accent-pink)' }}>@description</span> {t.about.title} <br />
                    */
                </div>

                <div
                    style={{ color: 'var(--text-primary)', fontSize: '16px' }}
                    dangerouslySetInnerHTML={{ __html: t.about.content }}
                />
            </div>
        </RichContentWrapper>
    );
};

export default About;
