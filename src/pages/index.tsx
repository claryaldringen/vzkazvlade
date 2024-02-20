import React, { useCallback, useState } from 'react';
import styles from './Homepage.module.scss';
import QRCode from 'react-qr-code';
import Select from 'react-select';
import { Card } from '../components/Card/Card';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const options: any[] = [
    {
        value: 'fiala',
        label: (
            <Card
                name="prof. PhDr. Petr Fiala, Ph.D., LL.M., dr. h. c."
                slug="fiala"
                func="Předseda vlády České republiky"
                party="ODS"
                price={10}
            />
        ),
    },
    {
        value: 'pekarova',
        label: (
            <Card
                name="Ing. Markéta Pekarová Adamová"
                slug="pekarova"
                func="Předsedkyně Poslanecké sněmovny PČR"
                party="TOP 09"
                price={10}
            />
        ),
    },
    {
        value: 'novotny',
        label: (
            <Card
                name="Pavel Novotný, DiS."
                slug="novotny"
                func="Starosta městské části Praha-Řeporyje"
                party="ODS"
                price={10}
            />
        ),
    },
    {
        value: 'cernochova',
        label: (
            <Card
                name="Mgr. Jana Černochová"
                slug="cernochova"
                func="Ministryně obrany ČR"
                party="ODS"
                price={10}
            />
        ),
    },
    {
        value: 'valek',
        label: (
            <Card
                name="prof. MUDr. Vlastimil Válek, CSc., MBA, EBIR"
                slug="valek"
                func="Ministr zdravotnictví ČR"
                party="TOP 09"
                price={10}
            />
        ),
    },
    {
        value: 'bartos',
        label: (
            <Card
                name="PhDr. Ivan Bartoš, Ph.D."
                slug="bartos"
                func="Ministr pro místní rozvoj ČR"
                party="Piráti"
                price={10}
            />
        ),
    },
    {
        value: 'lipavsky',
        label: (
            <Card
                name="Bc. Jan Lipavský"
                slug="lipavsky"
                func="Ministr zahraničních věcí"
                party="Piráti"
                price={10}
            />
        ),
    },
    {
        value: 'jurecka',
        label: (
            <Card
                name="Ing. Marian Jurečka"
                slug="jurecka"
                func="Ministr práce a sociálních věcí ČR"
                party="KDU-ČSL"
                price={10}
            />
        ),
    },
    {
        value: 'stanjura',
        label: (
            <Card
                name="Ing. Zbyněk Stanjura"
                slug="stanjura"
                func="Ministr financí ČR"
                party="ODS"
                price={10}
            />
        ),
    },
    {
        value: 'sikela',
        label: (
            <Card
                name="Ing. Jozef Síkela"
                slug="sikela"
                func="Ministr průmyslu a obchodu"
                party="STAN"
                price={10}
            />
        ),
    },
];

const HomePage = () => {
    const [value, setValue] = useState('');
    const [person, setPerson] = useState(null);

    const handleClick = useCallback(async () => {
        const res = await fetch('/api/send');
        if (res.status == 200) {
            setValue('');
            setPerson(null);
            alert(
                'Vzkaz byl odeslán a měl by být doručen během několika hodin.',
            );
        } else {
            alert(
                'Platba nebyla zatím připsána na náš učet. Chvíli počkejte a pak zkuste vzkaz odeslat znovu.',
            );
        }
    }, [value, setValue]);

    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <h1>Vzkaz fialové vládě!!!</h1>
                <p>
                    Vzhledem k tomu, že zde naše zadarmo drahá{' '}
                    <span className={styles.cenzura}>vláda zavadí cenzuru</span>
                    , která si nezadá s tou, jež mnozí z nás pamatují ještě z
                    dob bolševika (zdravíme soudruha Pávka), rozhodli jsme se
                    vytvořit tento nástroj, který nám, jež jsou nazýváni
                    chcimíry a dezoláty, umožní sdělit{' '}
                    <b>představitelům vlastizrádné vlády</b>, co si o nich
                    myslíme, aniž bychom se museli obávat represivních složek.
                </p>
                <p>
                    Vzkazy posíláme přes síť serverů umístěných na území Ruské
                    Federace, Maďarka a Čínské Lidové Republiky. Můžeme tak
                    zaručit <b>naprostou anonymitu odesílatele</b>!
                </p>
                <div>
                    <h4>1. krok: vyber politika</h4>
                    <Select
                        options={options}
                        placeholder="Vyber politika..."
                        onChange={option => setPerson(option)}
                        value={person}
                    />
                    <h4>2. krok: napiš vzkaz</h4>
                    <ReactQuill
                        className={styles.quill}
                        theme="snow"
                        value={value}
                        onChange={setValue}
                    />
                    <div className={styles.payment}>
                        <h4>3. krok: uhraď 10 Kč</h4>
                        Částka je určena k pokrytí nákladů důsledné anonymizace.
                    </div>
                    <div className={styles.qr}>
                        <QRCode
                            size={256}
                            value="SPD*1.0*ACC:CZ4620100000002302111610*AM:10.00*CC:CZK*MSG:VZKAZ VLADE*X-VS:20240219*PT:IP"
                        />
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button
                            onClick={handleClick}
                            disabled={!(person && value.length)}
                        >
                            <h2>4.krok: odešli vzkaz</h2>
                        </button>
                    </div>
                </div>
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

export default HomePage;
