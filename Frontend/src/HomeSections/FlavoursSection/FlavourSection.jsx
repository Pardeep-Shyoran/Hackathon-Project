// FlavorSection.jsx
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { SplitText } from "gsap/all";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
import styles from "./FlavourSection.module.css";
import FlavorTitle from "../../components/FlavorTitle/FlavorTitle"
import FlavorSlider from "../../components/FlavorSlider/FlavorSlidder"


const FlavorSection = () => {
    return (
        <section className={`flavor-section ${styles.flavorSection}`}>
            <div className={styles.container}>
                <div className={styles.leftPane}>
                    <FlavorTitle />
                </div>
                <div className={styles.rightPane}>
                    {/* <FlavorSlider /> */}
                </div>
            </div>
        </section>
    );
};

export default FlavorSection;

