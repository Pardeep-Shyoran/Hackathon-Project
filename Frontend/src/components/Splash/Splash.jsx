import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Splash.module.css';

gsap.registerPlugin(useGSAP);

export default function Splash({ children }) {
    const splashRef = useRef(null);
    const brandRef = useRef(null);
    const loadingRef = useRef(null);

    const [loading, setLoading] = useState(0);
    const [showSplash, setShowSplash] = useState(true);

    // Animate loading percent
    useGSAP(() => {
        let percent = 0;
        const update = () => {
            if (loadingRef.current) loadingRef.current.textContent = `loading... ${percent}%`;
            setLoading(percent);
            if (percent < 100) {
                percent += Math.floor(Math.random() * 7) + 1;
                if (percent > 100) percent = 100;
                setTimeout(update, 30 + Math.random() * 50);
            } else {
                gsap.to(brandRef.current, {
                    opacity: 0,
                    duration: 0.4,
                    delay: 0.2,
                    ease: 'power2.in'
                });
                gsap.to(splashRef.current, {
                    opacity: 0,
                    duration: 0.6,
                    delay: 0.3,
                    onComplete: () => setShowSplash(false)
                });
            }
        };
        update();
    }, []);

    if (!showSplash) return <>{children}</>;

    return (
        <div className={styles.splash} ref={splashRef}>
            <div className={styles.brand} ref={brandRef}>
                NeoLeaf
            </div>
            <div className={styles.loading} ref={loadingRef}>
                loading... 0%
            </div>
        </div>
    );
}
