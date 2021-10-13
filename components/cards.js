import React from 'react';
import CardItem from './carditem'
import styles from '../styles/Cards.module.css'
import FORTNITE from '../public/fortnite.jpg'
import FIFA from '../public/fifa.jpg'
import WARZONE from '../public/warzone.jpg'
import PUBG from '../public/pubg.jpg'
import APEX from '../public/apex.jpg'
import MINECRAFT from '../public/minecraft.jpg'

function Cards() {
    return (
        <div className={styles.cards}>
            <h1>Check out these epic Tournaments!</h1>
            <div className={styles.cards__container}>
                <div className={styles.cards__wrapper}>
                    <ul className= {styles.cards__items}>
                        <CardItem
                            src={FORTNITE}
                            text="FORTNITE"
                            label="Action"
                            path="/services"
                        />
                        <CardItem
                            src={FIFA}
                            text="FIFA"
                            label="Action"
                            path="/services"
                        />
                        <CardItem
                            src={WARZONE}
                            text="WARZONE"
                            label="Action"
                            path="/services"
                        />
                    </ul>
                    <ul className= {styles.cards__items}>
                        <CardItem
                            src={PUBG}
                            text="PUBG"
                            label="Action"
                            path="/services"
                        />
                        <CardItem
                            src={APEX}
                            text="APEX LEGENDS"
                            label="Action"
                            path="/services"
                        />
                         <CardItem
                            src={MINECRAFT}
                            text="MINE CRAFT"
                            label="Action"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
