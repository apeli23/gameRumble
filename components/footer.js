import React from 'react'
import styles from "../styles/Footer.module.css"
import Link from 'next/link';
function Footer() {
    return (
        <div className={styles.footer_container}>
            <section className={styles.footer_subscription_section}>
                <p className={styles.footer_subscription_heading}>Join out gaming community!</p>
                <p className={styles.footer_subscription_text}>You can subscribe at any time</p>
                <div className={styles.input_areas}>
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className={styles.footer_input} />
                        {/* <Button buttonStyle="btn--outline">Subscribe</Button */}
                    </form>
                </div>
            </section>
            <div className={styles.footer_links}>
                <div className={styles.footer_link_wrapper}>
                    <div className={styles.footer_link_items}>
                        <h2>About Us</h2>
                        <Link href='/sign-up'><a>How it works</a></Link>
                        <Link href='/'><a>Careers</a></Link>
                        <Link href='/'><a>Investors</a></Link>
                        <Link href='/'><a>Terms of Service</a></Link>
                    </div>
                    <div className={styles.footer_link_items}>
                        <h2>Contact Us</h2>
                        <Link href='/sign-up'><a>Contact</a></Link>
                        <Link href='/'><a>Support</a></Link>
                        <Link href='/'><a>Destinations</a></Link>
                        <Link href='/'><a>Sponsorships</a></Link>
                    </div>
                </div>
                <div className={styles.footer_link_wrapper}>
                    <div className={styles.footer_link_items}>
                        <h2>Videos</h2>
                        <Link href='/sign-up'><a>Submit Video</a></Link>
                        <Link href='/'><a>Ambassadors</a></Link>
                        <Link href='/'><a>Agency</a></Link>
                        <Link href='/'><a>Influencer</a></Link>
                    </div>
                    <div className={styles.footer_link_items}>
                        <h2>Social Media</h2>
                        <Link href='/sign-up'><a>Instagram</a></Link>
                        <Link href='/'><a>Facebook</a></Link>
                        <Link href='/'><a>Youtube</a></Link>
                        <Link href='/'><a>Twitter</a></Link>
                    </div>
                </div>
            </div>
            <section className={styles.social_media}>
                <div className={styles.social_media_wrap}>
                    <div className={styles.footer_logo}>
                        <Link href='/'>
                            <a>gameRUMBLE</a>
                        </Link>
                    </div>
                    <small className={styles.website_rights}>gameRUMBLE @ 2021</small>
                    <div className={styles.social_icons}>
                        <Link href='/'>
                            <a 
                            className={styles.social_icon_link_facebook}
                            target='_blank'
                            aria-label='Facebook'
                            ><i className='fab fa-facebook-f' /></a>
                        </Link>
                        <Link href='/'>
                            <a 
                            className={styles.social_icon_link_instagram}
                            target='_blank'
                            aria-label='Instagram'
                            ><i className='fab fa-instagram' /></a>
                        </Link>
                        <Link href='/'>
                            <a 
                            className={styles.social_icon_link_twitter}
                            target='_blank'
                            aria-label='Twitter'
                            ><i className='fab fa-twitter' /></a>
                        </Link>
                        <Link href='/'>
                            <a 
                            className={styles.social_icon_link_linkedin}
                            target='_blank'
                            aria-label='Linkedin'
                            ><i className='fab fa-linkedin' /></a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
