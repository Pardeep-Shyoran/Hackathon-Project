import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./OpeningAnimation.module.css";

gsap.registerPlugin(useGSAP);

const OpeningAnimation = ({ onComplete }) => {
    const container = useRef();
    const [progress, setProgress] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
                // Notify parent that animation is complete
                if (onComplete) onComplete();
            },
        });

        tl.fromTo(
            `.${styles.bigText}`,
            { display: 0, scale: 0.9, y: 30 },
            { opacity: 0.8, scale: 1, y: 0, duration: 1.2 }
        );

        // Animate loading % from 0 to 100 over 1.5s
        tl.to(
            {},
            {
                duration: 1.5,
                onUpdate: function () {
                    const val = Math.round(this.progress() * 100);
                    setProgress(val);
                },
            },
            "-=0.5" // Start this 0.5s before the first animation ends for smoothness
        );

        // Fade out the entire container after loading completes
        tl.to(container.current, { opacity: 0, duration: 0.6 }, "+=0.3");
    }, { scope: container });

    return (
        <div ref={container} className={styles.background}>
            <div className={styles.bigText}>NeoLeaf</div>
            <div className={styles.loadingBox}>loading... {progress}%</div>
        </div>
    );
};

export default OpeningAnimation;
