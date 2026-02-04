import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { VscClose } from 'react-icons/vsc';

const TabBar = ({ activeFile, openFiles, onCloseFile, onSelectFile }) => {
    return (
        <div style={{ display: 'flex', backgroundColor: 'var(--bg-color)', overflowX: 'auto', borderBottom: '1px solid var(--border-color)' }}>
            {openFiles.map(file => (
                <div
                    key={file.name}
                    onClick={() => onSelectFile(file)}
                    style={{
                        padding: '10px 15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        backgroundColor: activeFile.name === file.name ? 'var(--bg-color)' : 'var(--sidebar-bg)',
                        color: activeFile.name === file.name ? 'var(--text-primary)' : 'var(--text-muted)',
                        borderTop: activeFile.name === file.name ? '2px solid var(--accent-pink)' : '2px solid transparent',
                        borderRight: '1px solid var(--border-color)',
                        minWidth: '120px',
                        fontSize: '13px'
                    }}
                >
                    <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name}</span>
                    <span
                        onClick={(e) => { e.stopPropagation(); onCloseFile(file); }}
                        style={{ display: 'flex', alignItems: 'center', borderRadius: '4px', opacity: 0.7 }}
                    >
                        <VscClose size={14} />
                    </span>
                </div>
            ))}
        </div>
    );
};

const LineNumbers = ({ count }) => (
    <div className="hide-on-mobile" style={{
        padding: '20px 0',
        textAlign: 'right',
        color: 'var(--border-color)', /* Dimmer line numbers */
        backgroundColor: 'var(--bg-color)',
        width: '50px',
        userSelect: 'none',
        fontSize: '14px',
        lineHeight: '1.6',
        marginRight: '15px',
        fontFamily: 'var(--font-mono)'
    }}>
        {Array.from({ length: count }, (_, i) => (
            <div key={i}>{i + 1}</div>
        ))}
    </div>
);

const EditorArea = ({ activeFile, openFiles, onCloseFile, onSelectFile, onNavigate }) => {
    const { language } = useLanguage();

    if (!activeFile) return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-color)' }}>
            <div style={{ color: '#ffffff', textAlign: 'center', lineHeight: 1.6, fontSize: '14px' }}>
                {language === 'ja' ? (
                    <>
                        <div>　ようこそ。左側からページを選んでください。</div>
                    </>
                ) : (
                    <>
                        <div>　欢迎来到我的工作台，从左侧选择一个页面开始。</div>
                    </>
                )}
            </div>
        </div>
    );

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-color)', overflow: 'hidden' }}>
            <TabBar activeFile={activeFile} openFiles={openFiles} onCloseFile={onCloseFile} onSelectFile={onSelectFile} />

            <div style={{ flex: 1, display: 'flex', position: 'relative', overflow: 'auto' }}>
                <LineNumbers count={activeFile.lineCount || 40} />
                <div style={{
                    padding: '20px 20px 20px 0',
                    flex: 1,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-primary)'
                }}>
                    <activeFile.component onNavigate={onNavigate} />
                </div>
            </div>
        </div>
    );
};

export default EditorArea;
