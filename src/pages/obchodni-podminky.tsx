import React from 'react';
import styles from './Homepage.module.scss';
import 'react-quill/dist/quill.snow.css';

const Podminky = () => {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <h3>Obchodní podmínky</h3>
                <section>
                    <h4>1. Úvod</h4>
                    <p>
                        Tyto obchodní podmínky platí pro použití mobilní
                        aplikace a webové služby "Vzkaz fialové vládě" (dále jen
                        "aplikace"). Používáním aplikace souhlasíte s těmito
                        podmínkami. Nejste oprávněni používat aplikaci, pokud s
                        těmito podmínkami nesouhlasíte.
                    </p>
                </section>

                <section>
                    <h4>2. Služby aplikace</h4>
                    <p>
                        Aplikace "Vzkaz fialové vládě" umožňuje uživatelům
                        posílat vzkazy vybraným příjemcům za poplatek. Cena za
                        poslání vzkazu je stanovena a je zobrazena uživatelům
                        před odesláním vzkazu.
                    </p>
                </section>

                <section>
                    <h4>3. Poplatky a platby</h4>
                    <p>
                        Poplatky za odeslání vzkazu jsou účtovány předem a jsou
                        nevratné. Platby jsou zpracovány prostřednictvím
                        bezpečného platebního brány třetí strany. Aplikace není
                        odpovědná za chyby při zpracování plateb třetími
                        stranami.
                    </p>
                </section>

                <section>
                    <h4>4. Ochrana osobních údajů</h4>
                    <p>
                        Aplikace zaručuje anonymitu odesílatele vzkazů. Osobní
                        údaje nejsou uchovávány.
                    </p>
                </section>

                <section>
                    <h4>5. Omezení odpovědnosti</h4>
                    <p>
                        Provozovatel aplikace není odpovědný za obsah vzkazů
                        posílaných uživateli. Uživatelé nesou plnou odpovědnost
                        za obsah svých vzkazů a zavazují se neodesílat vzkazy,
                        které by porušovaly zákon nebo práva třetích stran.
                        Provozovatel aplikace neručí za doručení vzkazu
                        příjemci.
                    </p>
                </section>

                <section>
                    <h4>6. Změny obchodních podmínek</h4>
                    <p>
                        Máme právo kdykoliv změnit tyto obchodní podmínky. Změny
                        vstupují v platnost okamžitě po jejich zveřejnění v
                        aplikaci nebo na přidruženém webu.
                    </p>
                </section>

                <section>
                    <h4>7. Závěrečná ustanovení</h4>
                    <p>
                        Pokud některé z ustanovení těchto obchodních podmínek je
                        nebo se stane neplatným, neovlivní to platnost ostatních
                        ustanovení. Místo neplatného ustanovení přijde
                        ustanovení nejbližší smyslu původního záměru.
                    </p>
                </section>
            </div>
            <footer className={styles.footer}>
                <div className={styles.left}>
                    Provozuje: Freetech Ltd.,New Horizon Building, Ground Floor,
                    31⁄2 Miles Philip S.W. Goldson Highway, Belize City, Belize
                </div>
                <div className={styles.right}>
                    <a href="/obchodni-podminky">Obchodní podmínky</a>
                </div>
            </footer>
        </div>
    );
};

export default Podminky;
