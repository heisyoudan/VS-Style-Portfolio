import React from 'react';
import { VscSourceControl, VscError, VscWarning, VscBell, VscFeedback } from 'react-icons/vsc';

import { useLanguage } from '../../context/LanguageContext';

const StatusBar = () => {
    const { language, setLanguage } = useLanguage();
    const [showLangMenu, setShowLangMenu] = React.useState(false);

    return (
        <div style={{
            height: '24px',
            backgroundColor: '#191a21', // Dark mode (VS Code Activity Bar color)
            // backgroundImage: 'linear-gradient(to right, #bd93f9, #8be9fd)', 
            color: 'var(--text-muted)', // Muted text for dark bar
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 10px',
            fontSize: '12px',
            fontWeight: '600',
            userSelect: 'none',
            position: 'relative' // For absolute positioning of menu
        }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    <VscSourceControl />
                    <span>main*</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    <VscError /> 0 <VscWarning /> 0
                </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <span className="hide-on-mobile">Ln 8, Col 1</span>
                <span className="hide-on-mobile">UTF-8</span>

                {/* Language Switcher Dropdown */}
                <div style={{ position: 'relative' }}>
                    <div
                        onClick={() => setShowLangMenu(!showLangMenu)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            padding: '2px 8px',
                            borderRadius: '3px',
                            minWidth: '40px',
                            justifyContent: 'center'
                        }}
                        title="Select Language"
                    >
                        <span>{language === 'ja' ? 'JA' : language === 'zh' ? 'ZH' : 'EN'}</span>
                    </div>

                    {/* Popup Menu */}
                    {showLangMenu && (
                        <>
                            {/* Backdrop to close on click outside */}
                            <div
                                style={{ fixed: true, top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}
                                onClick={() => setShowLangMenu(false)}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '100%',
                                right: 0,
                                marginBottom: '5px',
                                backgroundColor: 'var(--sidebar-bg)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '4px',
                                boxShadow: '0 -4px 10px rgba(0,0,0,0.3)',
                                zIndex: 1000,
                                minWidth: 'auto', // Allowed to shrink
                                whiteSpace: 'nowrap' // Prevent wrapping
                            }}>
                                {['ja', 'zh'].map(lang => (
                                    <div
                                        key={lang}
                                        onClick={() => {
                                            setLanguage(lang);
                                            setShowLangMenu(false);
                                        }}
                                        style={{
                                            padding: '4px 10px', // Compact padding
                                            cursor: 'pointer',
                                            color: language === lang ? 'var(--accent-pink)' : 'var(--text-primary)',
                                            backgroundColor: language === lang ? 'var(--bg-color)' : 'transparent',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px', // Space between text and check
                                            justifyContent: 'space-between',
                                            fontSize: '12px', // Smaller font like VS Code
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-color)'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = language === lang ? 'var(--bg-color)' : 'transparent'}
                                    >
                                        <span>{lang === 'ja' ? 'Japanese' : 'Chinese'}</span>
                                        {language === lang && <span>✓</span>}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <span className="hide-on-mobile">JavaScript React</span>
                <span className="hide-on-mobile"><VscFeedback style={{ cursor: 'pointer' }} /></span>
                <VscBell style={{ cursor: 'pointer' }} />
            </div>
        </div>
    );
};

export default StatusBar;
