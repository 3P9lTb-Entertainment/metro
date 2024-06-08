import {useEffect, useState} from "react";

function Time() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
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
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p>{currentTime}</p>
    );
}

export default Time;
