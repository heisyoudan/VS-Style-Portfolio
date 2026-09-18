import React, { useState, useEffect, useCallback } from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import OmitMonitorCard from '../components/Projects/OmitMonitorCard';
import { VscGithubAlt } from 'react-icons/vsc';
import { FaYoutube } from 'react-icons/fa';
import { SiAppstore } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

// ─── Lightbox ────────────────────────────────────────────────────────────────
const Lightbox = ({ src, alt, onClose }) => {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose]);

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                backgroundColor: 'rgba(0,0,0,0.88)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'zoom-out',
                animation: 'lbFadeIn 0.18s ease',
            }}
        >
            <img
                src={src}
                alt={alt}
                onClick={(e) => e.stopPropagation()}
                style={{
                    maxWidth: '90vw', maxHeight: '88vh',
                    objectFit: 'contain',
                    borderRadius: '6px',
                    boxShadow: '0 8px 48px rgba(0,0,0,0.7)',
                    cursor: 'default',
                }}
            />
            {/* ESC hint */}
            <span style={{
                position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                color: 'rgba(255,255,255,0.35)', pointerEvents: 'none',
            }}>
                ESC / click to close
            </span>
            <style>{`@keyframes lbFadeIn { from { opacity:0 } to { opacity:1 } }`}</style>
        </div>
    );
};

// ─── ProjectCard ──────────────────────────────────────────────────────────────
const ProjectCard = ({ title, tech, role, whatIBuilt, imgSrc, link, github, industry, proprietary, privateLabel, t, onImageClick }) => (
    <div style={{
        backgroundColor: 'var(--sidebar-bg)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px', overflow: 'hidden',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-purple)';
            e.currentTarget.style.boxShadow = 'var(--glow-shadow)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        {/* Image area — click to enlarge */}
        <div
            onClick={() => onImageClick(imgSrc, title)}
            style={{
                aspectRatio: '16/9', width: '100%', overflow: 'hidden',
                backgroundColor: '#000', position: 'relative',
                cursor: 'zoom-in',
            }}
        >
            <img
                src={imgSrc}
                alt={title}
                style={{
                    width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9,
                    transition: 'transform 0.25s ease, opacity 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '0.9'; }}
            />
            {/* zoom affordance lives in the cursor + hover scale only — no badge overlap */}
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
                {tech && tech.map(item => (
                    <span key={item} style={{
                        fontSize: '10px', padding: '2px 8px', borderRadius: '4px',
                        backgroundColor: 'var(--bg-color)', color: 'var(--accent-pink)',
                        border: '1px solid var(--border-color)'
                    }}>{item}</span>
                ))}
            </div>
            <div style={{ marginBottom: '12px', fontSize: '13px', color: 'var(--text-primary)' }}>
                <span style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>{t.roleLabel}:</span> {role}
            </div>
            <div style={{ marginBottom: '8px', fontSize: '12px', color: 'var(--accent-green)' }}>
                // {t.whatIBuiltLabel}
            </div>
            <div
                style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', flex: 1, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: whatIBuilt }}
            />
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
                        <VscGithubAlt /> <span style={{ color: 'var(--accent-green)' }}>{t.code}</span>
                    </a>
                )}
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
                        {link.includes('apps.apple.com') ? <SiAppstore /> : <FaYoutube />} <span style={{ color: 'var(--accent-cyan)' }}>{link.includes('apps.apple.com') ? t.store : t.demo}</span>
                    </a>
                )}
                {(proprietary || privateLabel) && !github && !link && (
                    <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontStyle: 'italic' }}>
                        {privateLabel || t.proprietary}
                    </span>
                )}
            </div>
        </div>
    </div>
);

// ─── Projects page ────────────────────────────────────────────────────────────
const Projects = () => {
    const { t } = useLanguage();
    const [lightbox, setLightbox] = useState(null); // { src, alt }

    const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), []);
    const closeLightbox = useCallback(() => setLightbox(null), []);

    return (
        <RichContentWrapper>
            <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px' }}>
                <span style={{ color: 'var(--accent-pink)' }}>const</span> <span style={{ color: 'var(--accent-yellow)' }}>projects</span> = <span style={{ color: 'var(--text-primary)' }}>[</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', paddingBottom: '20px' }}>
                {t.projects.items.map((project, i) => {
                    if (project.title.includes('Omit')) {
                        return <OmitMonitorCard key={i} {...project} t={t.projects} />;
                    }
                    return (
                        <ProjectCard
                            key={i}
                            {...project}
                            t={t.projects}
                            onImageClick={openLightbox}
                        />
                    );
                })}
            </div>

            <h2 style={{ marginTop: '10px' }}>
                <span style={{ color: 'var(--text-primary)' }}>];</span>
            </h2>

            {lightbox && (
                <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />
            )}
        </RichContentWrapper>
    );
};

export default Projects;

