import styles from './TastyTalkCard.module.css';

const clients = [
    {
        name: 'Ashish Chanchlani',
        title: 'YouTuber, Actor & Writer',
        image: 'https://fokus.shop/cdn/shop/files/ashishchanchlani.jpg?v=1738667110&width=1200', // Replace with path to your image
        feedback: '“Fokus—naam hi nahi, ek vibe hai! The branding, the taste, the whole energy of it is so addictive that it’s effortlessly becoming my daily companion.”',
        rating: 5,
    },
    {
        name: 'Tanmay "Scout"',
        title: 'YouTuber, Esports Athlete',
        image: 'https://fokus.shop/cdn/shop/files/Scout.jpg?v=1738666810&width=2000',
        feedback: '“Being among the first to try Fokus, I knew from the first sip—this wasn’t just a drink; it was an experience! Now, I proudly say I’m its biggest fan.”',
        rating: 5,
    },
    {
        name: 'Purav Jha',
        title: 'YouTuber, Actor & Writer',
        image: 'https://fokus.shop/cdn/shop/files/purav_jha.jpg?v=1738666979&width=2000',
        feedback: '“Is 400ml ki bottle mein itni cheezein hai! Gym se lekar shoot tak, har jagah Fokus mera saath dega to keep me going all day long.”',
        rating: 5,
    },
    {
        name: 'Aditya Rikhari',
        title: 'YouTuber, Singer & SongWriter',
        image: 'https://fokus.shop/cdn/shop/files/adityarikhari.jpg?v=1738667057&width=2000',
        feedback: '“Just like my songs, log Fokus ke fan hone wale hain! I absolutely love the strawberry watermelon flavour—it’s the perfect blend of taste!”',
        rating: 4,
    },
];

const Card = ({ client }) => (
    <div className={styles.testimonialContainer}>
        <div className={styles.leftPane}>
            <img
                src={client.image}
                alt={client.name}
                className={styles.profilePhoto}
            />
            <div className={styles.clientInfo}>
                <div className={styles.clientName}>{client.name}</div>
                <div className={styles.clientTitle}>{client.title}</div>
            </div>
        </div>
        <div className={styles.rightPane}>
            <div className={styles.feedbackHeader}>
                <span className={styles.feedbackSub}>Our Clients</span>
                <span className={styles.feedbackTitle}>FEEDBACK</span>
            </div>
            <div className={styles.feedbackText}>{client.feedback}</div>
            <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, idx) => (
                    <span
                        key={idx}
                        className={
                            idx < client.rating
                                ? styles.star
                                : `${styles.star} ${styles.inactive}`
                        }
                        aria-label={idx < client.rating ? "Rated" : "Not rated"}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    </div>
);


const ClientFeedbackCards = () => (
    <div className={styles.container}>
        {clients.map((client, idx) => (
            <Card client={client} key={idx} />
        ))}
    </div>
);

export default ClientFeedbackCards;
