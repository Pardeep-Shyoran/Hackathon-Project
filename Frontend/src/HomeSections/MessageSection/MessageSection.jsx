import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import styles from "./MessageSection.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MessageSection = () => {
  useGSAP(() => {
    // Wait for all fonts to be loaded before applying SplitText
    document.fonts.ready.then(() => {
      const firstMsgSplit = SplitText.create(`.${styles.firstMessage}`, {
        type: "words",
      });
      const secMsgSplit = SplitText.create(`.${styles.secondMessage}`, {
        type: "words",
      });
      const paragraphSplit = SplitText.create(`.${styles.messageContent} p`, {
        type: "words, lines",
        linesClass: styles.paragraphLine,
      });

      gsap.to(firstMsgSplit.words, {
        color: "#faeade",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
          trigger: `.${styles.messageContent}`,
          start: "top center",
          end: "30% center",
          scrub: true,
        },
      });

      gsap.to(secMsgSplit.words, {
        color: "#faeade",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
          trigger: `.${styles.secondMessage}`,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      const revealTl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: `.${styles.msgTextScroll}`,
          start: "top 200%",
          scrub: true,
        },
      });
      revealTl.to(`.${styles.msgTextScroll}`, {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.inOut",
      });

      const paragraphTl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.messageContent} p`,
          start: "top center",
        },
      });
      paragraphTl.from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });
    });
  });


  return (
    <section className={styles.messageContent}>
      <div className={styles.container}>
        <div className={styles.innerWrapper}>
          <div className={styles.msgWrapper}>
            <h1 className={styles.firstMessage}>Stir up your fearless past and</h1>

            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              className={styles.msgTextScroll}
            >
              <div className={styles.fuelUpWrapper}>
                <h2 className={styles.fuelUpHeading}>Fuel Up</h2>
              </div>
            </div>

            <h1 className={styles.secondMessage}>
              your future with every gulp of Coconut Water
            </h1>
          </div>

          <div className={styles.paragraphWrapper}>
            <div className={styles.paragraphContainer}>
              <p className={styles.paragraph}>
                Rev up your rebel spirit and feed the adventure of life with FOKUS,
                where you’re one chug away from epic nostalgia and fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
