import React, { Children } from 'react';

const RichContentWrapper = ({ children }) => {
    return (
        <div className="content-wrapper">
            {children}
            <style>{`
                .content-wrapper {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 40px 50px 40px; /* Default Desktop Padding */
                    animation: fadeIn 0.5s ease-in-out;
                }
                
                @media (max-width: 768px) {
                    .content-wrapper {
                        padding: 0 15px 50px 15px; /* Reduced Mobile Padding */
                        width: 100%;
                        overflow-x: hidden;
                    }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
             `}</style>
        </div>
    );
};

export default RichContentWrapper;
