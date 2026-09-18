import React from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { useLanguage } from '../context/LanguageContext';

// Fixed English camelCase keys — same order as groups
const PROP_KEYS = [
    'backendEnterprise',
    'frontendFullStack',
    'cloudInfra',
    'nativeProductEng',
    'xrRealTime',
    'aiNativeDev',
];

const Skills = () => {
    const { t } = useLanguage();

    return (
        <RichContentWrapper>
            <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px' }}>
                <span style={{ color: 'var(--accent-pink)' }}>#</span> {t.skills.title}
            </h2>

            <div style={{ maxWidth: '860px', fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: '1.9' }}>

                <div style={{ color: 'var(--text-muted)', fontSize: '12px', fontStyle: 'italic', marginBottom: '20px' }}>
                    // skills.ts
                </div>

                {/* type TechnicalCapabilities = { */}
                <div style={{ marginBottom: '20px' }}>
                    <span style={{ color: 'var(--accent-pink)' }}>type </span>
                    <span style={{ color: 'var(--accent-yellow)' }}>TechnicalCapabilities</span>
                    <span style={{ color: 'var(--text-muted)' }}> = {'{'}</span>
                </div>

                {t.skills.groups.map((group, i) => {
                    const propKey = PROP_KEYS[i] ?? `group${i}`;
                    return (
                        <div key={i} style={{ paddingLeft: '28px', marginBottom: '18px' }}>
                            {/* // group comment */}
                            <div style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '13px', marginBottom: '2px' }}>
                                {'// '}{group.name}
                            </div>

                            {/* propKey: 'A' | 'B' | 'C'; */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', rowGap: '2px' }}>
                                <span style={{ color: 'var(--accent-cyan)' }}>{propKey}</span>
                                <span style={{ color: 'var(--text-muted)', margin: '0 6px 0 1px' }}>:</span>
                                {group.items.map((item, j) => (
                                    <span key={j} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
                                        <span style={{ color: 'var(--accent-green)' }}>&#39;{item}&#39;</span>
                                        {j < group.items.length - 1
                                            ? <span style={{ color: 'var(--text-muted)', margin: '0 5px' }}>|</span>
                                            : <span style={{ color: 'var(--text-muted)' }}>;</span>
                                        }
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}

                {/* }; */}
                <div style={{ color: 'var(--text-muted)', marginTop: '4px' }}>{'};'}</div>

                <div style={{ marginTop: '28px', fontSize: '12px', color: 'var(--text-muted)', opacity: 0.45 }}>
                    TypeScript &nbsp;·&nbsp; UTF-8 &nbsp;·&nbsp; Ln {t.skills.groups.length * 3 + 3}, Col 1
                </div>
            </div>
        </RichContentWrapper>
    );
};

export default Skills;
