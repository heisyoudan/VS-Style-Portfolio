import React from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { VscGithubAlt } from 'react-icons/vsc';
import { FaYoutube } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ title, tech, desc, imgSrc, link, github, industry, t }) => (
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
        <div style={{ height: '160px', overflow: 'hidden', backgroundColor: '#000', position: 'relative' }}>
            <img 
                src={imgSrc.startsWith('http') ? imgSrc : `${import.meta.env.BASE_URL}${imgSrc.startsWith('/') ? imgSrc.slice(1) : imgSrc}`} 
                alt={title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} 
            />
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
                {tech && tech.map(t => (
                    <span key={t} style={{
                        fontSize: '10px', padding: '2px 8px', borderRadius: '4px',
                        backgroundColor: 'var(--bg-color)', color: 'var(--accent-pink)',
                        border: '1px solid var(--border-color)'
                    }}>{t}</span>
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

const Projects = () => {
    const { t } = useLanguage();

    return (
        <RichContentWrapper>
            <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px' }}>
                <span style={{ color: 'var(--accent-pink)' }}>const</span> <span style={{ color: 'var(--accent-yellow)' }}>projects</span> = <span style={{ color: 'var(--text-primary)' }}>[</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', paddingBottom: '20px' }}>
                {t.projects.items.map((project, i) => (
                    <ProjectCard key={i} {...project} t={t.projects} />
                ))}
            </div>

            <h2 style={{ marginTop: '10px' }}>
                <span style={{ color: 'var(--text-primary)' }}>];</span>
            </h2>
        </RichContentWrapper>
    );
};

export default Projects;
