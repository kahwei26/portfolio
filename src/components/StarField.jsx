import React, { useMemo } from 'react'
import './StarField.css'

export default function StarField() {
    const stars = useMemo(() => {
        return Array.from({ length: 250 }).map((_, i) => ({
            id: i,
            size: Math.random() < 0.6 ? 1 : Math.random() < 0.9 ? 2 : 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: `${2 + Math.random() * 6}s`,
            delay: `${Math.random() * 10}s`,
            color: Math.random() > 0.92 ? 'var(--amber-400)' : 'white',
        }))
    }, [])

    return (
        <div className="star-field">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: star.left,
                        top: star.top,
                        backgroundColor: star.color,
                        boxShadow: `0 0 ${star.size * 2}px ${star.color === 'white' ? 'rgba(255,255,255,0.8)' : 'rgba(245,158,11,0.6)'}`,
                        animationDuration: star.duration,
                        animationDelay: star.delay,
                    }}
                />
            ))}
        </div>
    )
}
