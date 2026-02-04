import React, { useState } from 'react';
import { VscChevronRight, VscChevronDown, VscJson, VscMarkdown, VscSymbolMethod } from 'react-icons/vsc';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiYaml } from 'react-icons/si';

// 方案A：映射实际文件名 -> 显示名字
const displayNameMap = {
    'Projects.jsx': 'Projects.json',
    'Timeline.jsx': 'Timeline.json'
};

const FileIcon = ({ displayName }) => {
    // 根据显示名字判断图标
    if (displayName.endsWith('.ts')) return <SiTypescript color="#3178c6" />; // TypeScript Blue
    if (displayName.endsWith('.jsx')) return <FaReact color="#61dafb" />; // React Blue
    if (displayName.endsWith('.json')) return <VscJson color="#f1c40f" />; // JSON Yellow
    if (displayName.endsWith('.yaml') || displayName.endsWith('.yml')) return <SiYaml color="#cb171e" />; // YAML Red
    if (displayName.endsWith('.md')) return <VscMarkdown color="#69b3a2" />; // MD Green
    return <VscSymbolMethod />;
};

const Explorer = ({ files, activeFile, onSelectFile }) => {
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);

    return (
        <div style={{
            width: '220px',
            backgroundColor: 'var(--sidebar-bg)',
            display: 'flex',
            flexDirection: 'column',
            borderRight: '1px solid var(--border-color)',
            height: '100%' /* Ensure full height */
        }}>
            <div style={{
                padding: '10px 20px',
                fontSize: '11px',
                fontWeight: 'bold',
                color: 'var(--text-muted)',
                letterSpacing: '1px'
            }}>
                EXPLORER
            </div>

            <div style={{ flex: 1 }}>
                <div
                    onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                    style={{
                        padding: '4px 0',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        color: 'var(--text-primary)'
                    }}
                >
                    <span style={{ margin: '0 5px', color: 'var(--text-muted)' }}>
                        {isPortfolioOpen ? <VscChevronDown /> : <VscChevronRight />}
                    </span>
                    Portfolio
                </div>

                {isPortfolioOpen && (
                    <div style={{ paddingLeft: '0px' }}>
                        {files.map(file => {
                            const displayName = displayNameMap[file.name] || file.name;
                            return (
                                <div
                                    key={file.name}
                                    onClick={() => onSelectFile(file)}
                                    style={{
                                        padding: '5px 10px 5px 25px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        backgroundColor: activeFile && activeFile.name === file.name ? 'var(--border-color)' : 'transparent',
                                        color: activeFile && activeFile.name === file.name ? '#fff' : 'var(--text-muted)',
                                        fontSize: '13px'
                                    }}
                                >
                                    <FileIcon displayName={displayName} />
                                    <span>{displayName}</span>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Explorer;
