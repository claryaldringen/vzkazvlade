import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.scss';

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return (
        <div className={styles.consentContainer}>
            <p className={styles.consentText}>
                Tato stránka používá minimální počet povinných cookies k
                vylepšení uživatelské zkušenosti. Provozovatel apliakce nemůže
                podle těchto cookies nijak identifikovat uživatele.
            </p>
            <button onClick={handleAccept}>Souhlasím</button>
        </div>
    );
};

export default CookieConsent;
