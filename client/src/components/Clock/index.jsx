import React, { useState, useEffect } from 'react';

function Clock() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        let frameId;

        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            const dateString = now.toLocaleDateString('ru-RU', {
                weekday: 'short',
                day: 'numeric',
                month: 'long'
            });
            setCurrentTime(`${timeString} ${dateString}`);
            frameId = requestAnimationFrame(updateTime);
        };

        frameId = requestAnimationFrame(updateTime);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <p>{currentTime}</p>
    );
}

export default Clock;