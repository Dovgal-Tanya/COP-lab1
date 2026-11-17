import React, { useState } from 'react';

export const MovieStepper: React.FC = () => {
    const [count, setCount] = useState<number>(3);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
    const handleReset = () => setCount(3);

    return (
        <div style={containerStyle}>
            <h4 style={{ margin: '0 0 10px 0', color: '#a78bfa', fontSize: '14px', fontWeight: 500 }}>Кількість фільмів</h4>
            <div style={{ fontSize: '28px', fontWeight: '700', margin: '10px 0', color: '#f472b6' }}>
                {count}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={handleDecrement} style={btnStyle}>-</button>
                <button onClick={handleReset} style={{ ...btnStyle, background: 'rgba(147, 51, 234, 0.2)', color: '#d8b4fe' }}>Скинути</button>
                <button onClick={handleIncrement} style={btnStyle}>+</button>
            </div>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    background: 'rgba(30, 20, 56, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(147, 51, 234, 0.2)',
    borderRadius: '16px',
    padding: '20px',
    flex: '1',
    minWidth: '220px'
};

const btnStyle: React.CSSProperties = {
    padding: '6px 14px',
    background: 'linear-gradient(135deg, #9333ea 0%, #db2777 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px'
};