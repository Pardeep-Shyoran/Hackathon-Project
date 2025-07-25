// import styles from './ShopHeader.module.css';

// const text = "Explore full collection\u00A0\u00A0";
// const repeats = 3;

// const PageNotFound = () => (
//   <section className={styles["shop-header"]}>
//     {/* <div className={styles.marqueeImages}>
//       <img src="https://res.cloudinary.com/dcaggtr9h/image/upload/v1752757867/Frame_1_c0dmtt.png" alt="" />
//     </div> */}
//     <div className={styles.marqueeWrapper}>
//       <div className={styles.marqueeTrack}>
//         {[...Array(2)].map((_, i) => (
//           <div className={styles.marqueeContent} key={i}>
//             {Array.from({ length: repeats }, (_, j) => (
//               <span key={j}>{text}</span>
//             ))}
//           </div>
//         ))}
//       </div>

//     </div>
//       <div className={styles["shop-desc"]}>
//                 <p>Browse all our bold and delicious flavors, ready to fuel your next adventure. discover your favorite today!</p>
//       </div>
//   </section>
// );

// export default PageNotFound;








import React, { useRef } from "react";
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

