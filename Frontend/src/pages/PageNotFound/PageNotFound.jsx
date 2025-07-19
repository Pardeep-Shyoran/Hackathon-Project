import styles from './PageNotFound.module.css';

const text = "404 Page Not Found\u00A0\u00A0";
const repeats = 3;

const PageNotFound = () => (
  <>
    <div className={styles.marqueeImages}>
      <img src="https://res.cloudinary.com/dcaggtr9h/image/upload/v1752757867/Frame_1_c0dmtt.png" alt="" />
    </div>
    <div className={styles.marqueeWrapper}>
      <div className={styles.marqueeTrack}>
        {[...Array(2)].map((_, i) => (
          <div className={styles.marqueeContent} key={i}>
            {Array.from({ length: repeats }, (_, j) => (
              <span key={j}>{text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </>
);

export default PageNotFound;