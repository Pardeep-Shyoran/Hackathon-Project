import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./ShopHeader.module.css";

const marqueeText = "Explore full collection \u00A0\u00A0";

const InfiniteMarquee = () => {
    const containerRef = useRef();
    const trackRef = useRef();

    useGSAP(() => {
        const track = trackRef.current;
        const trackWidth = track.scrollWidth / 2;

        gsap.to(track, {
            x: -trackWidth,
            duration: 150,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: (x) => {
                    // GSAP units are px by default here so parseFloat is safe
                    return `${parseFloat(x) % -trackWidth}px`;
                },
            },
        });
    }, []);

    return (
        <section className={styles["shop-header"]}>

        <div ref={containerRef} className={styles.container}>
            <div ref={trackRef} className={styles.track}>
                <span className={styles.text}>{marqueeText.repeat(10)}</span>
                <span className={styles.text}>{marqueeText.repeat(10)}</span>
            </div>
        </div>
            <div className={styles["shop-desc"]}>
                    <p>Browse all our bold and delicious flavors, ready to fuel your next adventure. discover your favorite today!</p>
           </div>
        </section>
    );
};

export default InfiniteMarquee;

