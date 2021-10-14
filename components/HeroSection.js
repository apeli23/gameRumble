import React from 'react'
import styles from '../styles/HeroSection.module.css'
import Btn from './button'


function HeroSection() {
    return (
        <div className={styles.hero_container}>
            <h1>ADVENTURE AWAITS</h1>
            <p>coming soon!</p>
            <div className={styles.hero_btns}>
                <Btn
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Btn>{' '}
                <Btn
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Btn>
            </div>
        </div>
    )
}

export default HeroSection
