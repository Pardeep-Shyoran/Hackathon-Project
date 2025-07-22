import React from 'react';
import styles from './AboutCard.module.css';

const cards = [
    { number: '01', text: 'RECAPTURE\nYOUR YOUTH' },
    { number: '02', text: 'BREAK SOME RULES' },
    { number: '03', text: 'REDISCOVER WHAT\nYOU’RE CAPABLE OF' }
];

const EthosCards = () => (
    <div className={styles.wrapper}>
        <div className={styles.brandEthos}>
            <h1>BRAND ETHOS</h1>
            <div className={styles.blockquote}>
                <span className={styles.quoteMarkLeft} aria-hidden>“</span>
                <span className={styles.bold}>We’re more than just a brand</span>—we’re a vibrant community driven by passion, purpose, and a shared vision for a better lifestyle.<br />
                Brought to you by your favorite content creators, Abhishek Malhan and Nischay Malhan, along with digital age entrepreneurs, Mayank Mishra and Ankit Madaan, Aman Madaan we fokus on creating drinks that not only refresh but also empower.
                <br /><br />
                <span className={styles.bold}>Our mission is simple:</span>to deliver clean, functional hydration that fits seamlessly into your daily routine.<br />
                Whether you’re chasing fitness goals, building your dream, or just living life on your own terms, we’re here to fuel every step of your journey.<br />
                #GetFokus
                <span className={styles.quoteMarkRight} aria-hidden>”</span>
            </div>
        </div>
        <div className={styles.cards}>
            {cards.map((card, idx) => (
                <div className={styles.card} key={idx}>
                    <span className={styles.cardNumber}>{card.number}</span>
                    <div className={styles.cardText}>
                        {card.text.split('\n').map((line, i) => (
                            <div key={i}>{line}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default EthosCards;
