import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import styles from "./HeroSections.module.css";

const HeroSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const isTablet = useMediaQuery({
        query: "(max-width: 1024px)",
    });

    useGSAP(() => {
        document.fonts.ready.then(() => {

            const titleSplit = SplitText.create(`.${styles.heroTitle}`, {
                type: "chars",
            });


            const tl = gsap.timeline({
                delay: 1,
            });

            tl.to(`.${styles.heroContent}`, {
                opacity: 1,
                y: 0,
                ease: "power1.inOut",
            })
                .to(
                    `.${styles.heroTextScroll}`,
                    {
                        duration: 1,
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        ease: "circ.out",
                    },
                    "-=0.5"
                )
                .from(
                    titleSplit.chars,
                    {
                        yPercent: 150,
                        opacity: 0,
                        stagger: 0.02,
                        ease: "power2.out",
                    },
                    "-=0.5"
                );

            // const heroTl = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: `.${styles.heroContainer}`,
            //         start: "1% top",
            //         end: "bottom top",
            //         scrub: true,
            //     },
            // });
            // heroTl.to(`.${styles.heroContainer}`, {
            //     rotate: 7,
            //     scale: 0.9,
            //     yPercent: 30,
            //     ease: "power1.inOut",
            // });


        });
    });

    return (
        <section className="bg-main-bg">
            <div className={styles.heroContainer}>
                {/* {isTablet ? (
                    <>
                        {isMobile && (
                            <img
                                src="/images/hero-bg.png"
                                className="absolute bottom-40 size-full object-cover"
                                alt="Hero Background"
                            />
                        )}
                        <img
                            src="/images/hero-img.png"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
                            alt="Hero Image"
                        />
                    </>
                ) : (
                    <video
                        src="/videos/hero-bg.mp4"
                        autoPlay
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )} */}
                <div className={styles.heroContent}>
                    <div className="overflow-hidden">
                        <h1 className={styles.heroTitle}>Freaking Delicious</h1>
                    </div>
                    <div
                        style={{
                            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                        }}
                        className={styles.heroTextScroll}
                    >
                        <div className={styles.heroSubtitle}>
                            <h1>Coconut + Vitamins </h1>
                        </div>
                    </div>

                    <h2>
                        Live life to the fullest with FOKUS: Shatter boredom and embrace
                        your inner kid with every deliciously smooth chug.
                    </h2>

                    <div className={styles.heroButton}>
                        <p>Chug a FOKUS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;















// import styles from "./HeroSections.module.css";


// const HeroSections = () => {
//     return (
//         <section className={styles["bg-main-bg"]}>
//             <div className={styles["hero-container"]}>
//                 <div className={styles["hero-content"]}>

//                     <div className={styles["hero-heading"]}>
//                         <h1 className={styles["hero-title"]}>Freaking Delicious</h1>
//                     </div>

//                     <div
//                         style={{
//                             // clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
//                         }}
//                         className={styles["hero-text-scroll"]}
//                     >
//                         <div className={styles["hero-subtitle"]}>
//                             <h1>Protein + Caffine </h1>
//                         </div>
//                     </div>

//                     <h2>
//                         Live life to the fullest with SPYLT: Shatter boredom and embrace
//                         your inner kid with every deliciously smooth chug.
//                     </h2>

//                     <div className={styles["hero-button"]}>
//                         <p>Chug a SPYLT</p>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default HeroSections