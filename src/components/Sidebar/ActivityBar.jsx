import React from 'react';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { useLanguage } from '../../context/LanguageContext';

const Icon = ({ children, active, onClick, title }) => (
    <div
        onClick={onClick}
        title={title}
        style={{
            padding: '12px',
            cursor: 'pointer',
            color: active ? '#fff' : 'var(--text-muted)',
            borderLeft: active ? '2px solid var(--accent-pink)' : '2px solid transparent',
            display: 'flex',
            justifyContent: 'center'
        }}
    >
        {React.cloneElement(children, { size: 24 })}
    </div>
);

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const languages = [
        { code: 'ja', label: 'JP' },
        { code: 'zh', label: 'CN' }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            {languages.map(lang => (
                <div
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    title={`Switch to ${lang.label === 'JP' ? 'Japanese' : 'Chinese'}`}
                    style={{
                        padding: '12px',
                        cursor: 'pointer',
                        color: language === lang.code ? '#fff' : 'var(--text-muted)',
                        borderLeft: language === lang.code ? '2px solid var(--accent-pink)' : '2px solid transparent',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        minWidth: '46px',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {lang.label}
                </div>
            ))}
        </div>
    );
};

const ActivityBar = ({ onClickExplorer }) => {
    const { language, setLanguage } = useLanguage();

    return (
        <div style={{
            width: '50px',
            backgroundColor: 'var(--activity-bar-bg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: '10px',
            borderRight: '1px solid var(--border-color)',
            zIndex: 20 /* ensure above explorer on mobile */
        }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Icon onClick={onClickExplorer} active><VscFiles /></Icon>
                <Icon><VscSearch /></Icon>
                <Icon><VscSourceControl /></Icon>
                <Icon><VscDebugAlt /></Icon>
                <Icon><VscExtensions /></Icon>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <div style={{ borderTop: '1px solid var(--border-color)', width: '30px', margin: '5px 0' }}></div>
                
                <LanguageSwitcher />
                
                <div style={{ borderTop: '1px solid var(--border-color)', width: '30px', margin: '5px 0' }}></div>

                <Icon><VscAccount /></Icon>
                <Icon><VscSettingsGear /></Icon>
            </div>
        </div>
    );
};

export default ActivityBar;
