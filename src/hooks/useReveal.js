import { useEffect, useRef } from 'react'

/**
 * Hook to handle scroll reveal animations using IntersectionObserver.
 * It observes all elements with the '.reveal' class within the referenced container.
 * @param {number} threshold - Intersection threshold (0 to 1).
 * @returns {import('react').RefObject} The ref to attach to the animated container.
 */
export function useReveal(threshold = 0.1) {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold }
        )

        const container = ref.current
        if (container) {
            const elements = container.querySelectorAll('.reveal')
            elements.forEach((el) => observer.observe(el))
        }

        return () => observer.disconnect()
    }, [threshold])

    return ref
}
