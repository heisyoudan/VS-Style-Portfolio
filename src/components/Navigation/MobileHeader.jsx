import React from 'react';
import { VscMenu } from 'react-icons/vsc';

const MobileHeader = ({ activeFileName, onOpenMenu }) => {
    return (
        <div style={{
            height: '50px',
            backgroundColor: 'var(--sidebar-bg)',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 15px',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <VscMenu
                    size={24}
                    onClick={onOpenMenu}
                    style={{ cursor: 'pointer', color: 'var(--text-muted)' }}
                />
                <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                    {activeFileName}
                </span>
            </div>

            <div style={{ fontSize: '12px', color: 'var(--accent-pink)' }}>
                Portfolio
            </div>
        </div>
    );
};

export default MobileHeader;
