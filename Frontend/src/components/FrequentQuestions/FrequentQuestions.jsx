// import React, { useState } from "react";
// import styles from "./FrequentQuestions.module.css";

// const orderFaqs = [
//     "Where do you deliver?",
//     "Can I order SPYLT in Canada?",
//     "Does SPYLT need to ship cold?",
//     "I need SPYLT and I'm not in the US",
//     "My SPYLT arrived damaged, now what?",
//     "Can I buy SPYLT in person?"
// ];

// const productFaqs = [
//     "Is SPYLT vegan?",
//     "What ingredients are in SPYLT?",
//     "Does SPYLT contain allergens?",
//     "How much caffeine is in SPYLT?",
//     "Is SPYLT gluten-free?",
//     "Does SPYLT need to be refrigerated?"
// ];

// export default function FAQSection() {
//     const [activeTab, setActiveTab] = useState("orders");
//     const faqs = activeTab === "orders" ? orderFaqs : productFaqs;

//     return (
//         <section className={styles.faqSection}>
//             <header className={styles.titleBlock}>
//                 <span className={styles.title}>FREQUENTLY ASKED</span>
//                 <span className={styles.questions}>QUESTIONS</span>
//             </header>
//             <nav className={styles.tabs} aria-label="FAQ Topics">
//                 <button
//                     className={`${styles.tab} ${activeTab === "orders" ? styles.activeTab : styles.inactiveTab}`}
//                     onClick={() => setActiveTab("orders")}
//                     aria-pressed={activeTab === "orders"}
//                 >
//                     ORDERS
//                 </button>
//                 <button
//                     className={`${styles.tab} ${activeTab === "product" ? styles.activeTab : styles.inactiveTab}`}
//                     onClick={() => setActiveTab("product")}
//                     aria-pressed={activeTab === "product"}
//                 >
//                     PRODUCT QUESTIONS
//                 </button>
//             </nav>
//             <div className={styles.itemsGrid}>
//                 {faqs.map((question, idx) => (
//                     <div className={styles.faqItem} key={idx}>{question}</div>
//                 ))}
//             </div>
//         </section>
//     );
// }



// import React, { useState } from "react";
// import styles from "./FrequentQuestions.module.css";

// // Answers added as examples – edit as needed!
// const orderFaqs = [
//     {
//         question: "Where do you deliver?",
//         answer: "We deliver across all fifty US states. For other regions, please contact us!"
//     },
//     {
//         question: "Can I order SPYLT in Canada?",
//         answer: "Currently, SPYLT is available within the US only. International shipping coming soon!"
//     },
//     {
//         question: "Does SPYLT need to ship cold?",
//         answer: "SPYLT does not require refrigeration during shipment, but it's best chilled."
//     },
//     {
//         question: "I need SPYLT and I'm not in the US",
//         answer: "We're working on expanding globally! Sign up for updates to know when."
//     },
//     {
//         question: "My SPYLT arrived damaged, now what?",
//         answer: "Contact our support with your order number and photos for a quick resolution."
//     },
//     {
//         question: "Can I buy SPYLT in person?",
//         answer: "Select retailers stock SPYLT. Use our store locator online!"
//     }
// ];

// const productFaqs = [
//     {
//         question: "Is SPYLT vegan?",
//         answer: "Yes! SPYLT contains no animal products."
//     },
//     {
//         question: "What ingredients are in SPYLT?",
//         answer: "SPYLT contains water, oat, cocoa, vitamins, and natural flavors. No artificial additives."
//     },
//     {
//         question: "Does SPYLT contain allergens?",
//         answer: "SPYLT is gluten- and nut-free, but made in facilities that also process nuts."
//     },
//     {
//         question: "How much caffeine is in SPYLT?",
//         answer: "Each serving contains 60mg of naturally-derived caffeine."
//     },
//     {
//         question: "Is SPYLT gluten-free?",
//         answer: "Yes! We use certified gluten-free ingredients."
//     },
//     {
//         question: "Does SPYLT need to be refrigerated?",
//         answer: "It's shelf-stable, but best enjoyed chilled. Refrigerate after opening."
//     }
// ];

// export default function FAQSection() {
//     const [activeTab, setActiveTab] = useState("orders");
//     const [openIdx, setOpenIdx] = useState(null);
//     const faqs = activeTab === "orders" ? orderFaqs : productFaqs;

//     function toggle(idx) {
//         setOpenIdx(prev => (prev === idx ? null : idx));
//     }

//     return (
//         <section className={styles.faqSection} role="region" aria-labelledby="faq-main-title">
//             <header className={styles.titleBlock}>
//                 <h2 id="faq-main-title" className={styles.title}>
//                     FREQUENTLY ASKED
//                 </h2>
//                 <div className={styles.questions}>QUESTIONS</div>
//             </header>
//             <nav className={styles.tabs} aria-label="FAQ Topics">
//                 <button
//                     className={`${styles.tab} ${activeTab === "orders" ? styles.activeTab : styles.inactiveTab}`}
//                     onClick={() => { setActiveTab("orders"); setOpenIdx(null); }}
//                     aria-pressed={activeTab === "orders"}
//                 >
//                     ORDERS
//                 </button>
//                 <button
//                     className={`${styles.tab} ${activeTab === "product" ? styles.activeTab : styles.inactiveTab}`}
//                     onClick={() => { setActiveTab("product"); setOpenIdx(null); }}
//                     aria-pressed={activeTab === "product"}
//                 >
//                     PRODUCT QUESTIONS
//                 </button>
//             </nav>
//             <div className={styles.itemsGrid}>
//                 {faqs.map((item, idx) => (
//                     <div className={styles.faqItem} key={idx}>
//                         <button
//                             className={styles.faqButton}
//                             aria-expanded={openIdx === idx}
//                             aria-controls={`faq-panel-${idx}`}
//                             onClick={() => toggle(idx)}
//                         >
//                             <span>{item.question}</span>
//                             <span className={styles.arrow} aria-hidden>
//                                 {openIdx === idx ? "▲" : "▼"}
//                             </span>
//                         </button>
//                         <div
//                             className={styles.faqPanel}
//                             id={`faq-panel-${idx}`}
//                             hidden={openIdx !== idx}
//                             tabIndex={-1}
//                             aria-live="polite"
//                         >
//                             {item.answer}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }





import React, { useState } from "react";
import styles from "./FrequentQuestions.module.css";

const orderFaqs = [
    { question: "Where do you deliver?", answer: "We deliver across all fifty US states. For other regions, please contact us!" },
    { question: "Can I order FOKUS in Canada?", answer: "Currently, FOKUS is available within the INDIA only. International shipping coming soon!" },
    { question: "Does FOKUS need to ship cold?", answer: "FOKUS does not require refrigeration during shipment, but it's best chilled." },
    { question: "I need FOKUS and I'm not in the US", answer: "We're working on expanding globally! Sign up for updates to know when." },
    { question: "My FOKUS arrived damaged, now what?", answer: "Contact our support with your order number and photos for a quick resolution." },
    { question: "Can I buy FOKUS in person?", answer: "Select retailers stock FOKUS. Use our store locator online!" }
];

const productFaqs = [
    { question: "Is FOKUS vegan?", answer: "Yes! FOKUS contains no animal products." },
    { question: "What ingredients are in FOKUS?", answer: "FOKUS contains water, oat, cocoa, vitamins, and natural flavors. No artificial additives." },
    { question: "Does FOKUS contain allergens?", answer: "FOKUS is gluten- and nut-free, but made in facilities that also process nuts." },
    { question: "How much caffeine is in FOKUS?", answer: "Each serving contains 60mg of naturally-derived caffeine." },
    { question: "Is FOKUS gluten-free?", answer: "Yes! We use certified gluten-free ingredients." },
    { question: "Does FOKUS need to be refrigerated?", answer: "It's shelf-stable, but best enjoyed chilled. Refrigerate after opening." }
];

export default function FAQSection() {
    const [activeTab, setActiveTab] = useState("orders");
    const faqs = activeTab === "orders" ? orderFaqs : productFaqs;

    return (
        <section className={styles.faqSection} role="region" aria-labelledby="faq-main-title">
            <header className={styles.titleBlock}>
                <h2 id="faq-main-title" className={styles.title}>FREQUENTLY ASKED</h2>
                <div className={styles.questions}>QUESTIONS</div>
            </header>
            <nav className={styles.tabs} aria-label="FAQ Topics">
                <button className={`${styles.tab} ${activeTab === "orders" ? styles.activeTab : styles.inactiveTab}`} onClick={() => setActiveTab("orders")} aria-pressed={activeTab === "orders"}>
                    ORDERS
                </button>
                <button className={`${styles.tab} ${activeTab === "product" ? styles.activeTab : styles.inactiveTab}`} onClick={() => setActiveTab("product")} aria-pressed={activeTab === "product"}>
                    PRODUCT QUESTIONS
                </button>
            </nav>

            <div className={styles.itemsGrid}>
                {faqs.map((item, idx) => (
                    <div className={styles.faqItem} key={idx} tabIndex={0}>
                        <div className={styles.faqQuestion}>{item.question}</div>
                        <div className={styles.faqAnswer}>{item.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
