import React, { useState } from 'react';

export const ViewToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    return (
        <div style={{
            ...containerStyle,
            background: isDarkMode ? 'rgba(30, 20, 56, 0.7)' : 'rgba(45, 30, 80, 0.9)',
        }}>
            <h4 style={{ margin: '0 0 6px 0', color: '#a78bfa', fontSize: '14px', fontWeight: 500 }}>Режим секції</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', margin: '0 0 12px 0' }}>
                Тема: <strong style={{ color: '#f472b6' }}>{isDarkMode ? 'Неон-фіолет' : 'Пастель'}</strong>
            </p>
            <button
                onClick={() => setIsDarkMode((prev) => !prev)}
                style={{
                    padding: '6px 14px',
                    background: 'transparent',
                    color: '#f472b6',
                    border: '1px solid #db2777',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '13px'
                }}
            >
                Змінити стиль
            </button>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(147, 51, 234, 0.2)',
    borderRadius: '16px',
    padding: '20px',
    flex: '1',
    minWidth: '220px',
    transition: 'all 0.3s ease'
};