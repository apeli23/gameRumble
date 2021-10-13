import React from 'react';
import Link from 'next/link';
import styles from '../styles/Cards.module.css';
import Image from 'next/image'

function CardItem(props) {
    return (
        <>
            <li className={styles.cards__item}>
                <Link href={props.path}>
                    <a className={styles.cards__item__link}>
                        <figure className={styles.cards__item__pic_wrap} data-category={props.label}>
                            <Image src={props.src} alt="Same" className={styles.cards__item__img}/>
                        </figure>
                        <div className={styles.cards__item__info}>
                            <h5 className={styles.cards__item__text}>{props.text}</h5>
                        </div>
                    </a>
                </Link>
            </li>
        </>
    )
}

export default CardItem
