import React from 'react';
import RichContentWrapper from '../components/Common/RichContentWrapper';
import { useLanguage } from '../context/LanguageContext';

const TimelineItem = ({ date, company, role, desc }) => (
    <div className="timeline-item">
        {/* Line */}
        <div className="timeline-line"></div>

        <div className="timeline-date">
            <div>{date}</div>
        </div>

        <div className="timeline-content">
            {/* Dot inside content area relative to it, but we need to position it absolutely relative to the flex container or adjust.
                Actually, in my CSS plan:
                .timeline-content has padding-left: 30px (desktop) / 40px (mobile)
                .timeline-dot needs to be positioned. 
                In desktop: line is at left: 149px. content starts after.
                In mobile: line is at left: 20px.
                
                Let's move 'dot' to be a direct child of 'timeline-item' or inside 'timeline-content' but positioned properly.
                Let's keep it simple: The CSS I wrote expects .timeline-dot to be inside .timeline-content because I used left: -6px (relative to content start?) 
                Wait, previous code had dot inside right-side div.
                Let's stick to that structure.
            */}

            {/* Dot */}
            <div className="timeline-dot"></div>

            <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: 'var(--text-primary)' }}>{company}</h3>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6', fontFamily: 'var(--font-mono)' }}>
                // {desc}
            </div>
        </div>
    </div>
);

const Timeline = () => {
    const { t } = useLanguage();

    return (
        <RichContentWrapper>
            <h2 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '30px' }}>
                <span style={{ color: 'var(--accent-pink)' }}>#</span> {t.timeline.title}
            </h2>
            <div style={{ paddingTop: '20px' }}>
                {t.timeline.items && t.timeline.items.map((e, i) => (
                    <TimelineItem key={i} {...e} />
                ))}
            </div>
            {/* Spacer for bottom */}
            <div style={{ height: '50px' }}></div>
        </RichContentWrapper>
    );
};

export default Timeline;
