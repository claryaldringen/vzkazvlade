import Image from 'next/image';
import { FC } from 'react';
import styles from './Card.module.scss';

type Props = {
    name: string;
    slug: string;
    func: string;
    party: string;
    price: number;
};

export const Card: FC<Props> = ({ name, slug, func, party, price }) => (
    <div className={styles.cardContainer}>
        <div className={styles.imageWrapper}>
            <Image
                src={`/images/${slug}.jpg`}
                width={64}
                height={64}
                alt={name}
            />
        </div>
        <div className={styles.textWrapper}>
            <div className={styles.name}>
                {name} ({party})
            </div>
            <div className={styles.func}>{func}</div>
            <div className={styles.price}>Cena vzkazu: {price} Kč</div>
        </div>
    </div>
);
