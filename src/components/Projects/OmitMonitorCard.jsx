import React, { useEffect, useState } from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { FaYoutube } from 'react-icons/fa';

const OmitMonitorCard = ({ title, tech, desc, imgSrc, link, github, industry, t }) => {
    const [downloadSpeed, setDownloadSpeed] = useState(28.5);
    const [ping, setPing] = useState(30);

    // 模拟实时数据更新
    useEffect(() => {
        const interval = setInterval(() => {
            setDownloadSpeed(prev => Math.max(5, prev + (Math.random() - 0.5) * 8));
            setPing(prev => Math.max(10, prev + (Math.random() - 0.5) * 5));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            backgroundColor: 'var(--sidebar-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px', overflow: 'hidden',
            transition: 'all 0.3s ease',
            display: 'flex', flexDirection: 'column',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
                e.currentTarget.style.boxShadow = 'var(--glow-shadow)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div style={{ aspectRatio: '16/9', width: '100%', overflow: 'hidden', backgroundColor: '#000', position: 'relative' }}>
                <img
                    src={imgSrc}
                    alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                />
                {/* 监控数据 - 左上角overlay */}
                <div style={{
                    position: 'absolute', top: '10px', left: '10px', 
                    background: 'rgba(0,0,0,0.75)', 
                    padding: '12px 16px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: '1.6',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#888' }}>Download:</span>
                        <span style={{ color: '#fff', marginLeft: '4px' }}>{downloadSpeed.toFixed(1)} Mbps</span>
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: '#888' }}>Ping:</span>
                        <span style={{ color: '#fff', marginLeft: '4px' }}>{Math.round(ping)} ms</span>
                    </div>
                    <div>
                        <span style={{ color: '#888' }}>Network:</span>
                        <span style={{ color: '#fff', marginLeft: '4px' }}>5G / WiFi</span>
                    </div>
                </div>
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, padding: '5px 10px',
                    background: 'rgba(0,0,0,0.8)', fontSize: '11px', color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)'
                }}>
                    {industry}
                </div>
            </div>
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '16px', color: 'var(--text-primary)' }}>{title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '15px' }}>
                    {tech && tech.map(tech_item => (
                        <span key={tech_item} style={{
                            fontSize: '10px', padding: '2px 8px', borderRadius: '4px',
                            backgroundColor: 'var(--bg-color)', color: 'var(--accent-pink)',
                            border: '1px solid var(--border-color)'
                        }}>{tech_item}</span>
                    ))}
                </div>
                <div
                    style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: desc }}
                />
                <div style={{ display: 'flex', gap: '15px', marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
                            <VscGithubAlt /> <span style={{ color: 'var(--accent-green)' }}>{t.code}</span>
                        </a>
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
                            <FaYoutube /> <span style={{ color: 'var(--accent-cyan)' }}>{t.demo}</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OmitMonitorCard;
