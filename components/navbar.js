import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {Button} from './button'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', showButton);

    }, []);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link href='/' >
                        <a className="navbar-logo">gameRUMBLE</a>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link href='/' >
                                <a onClick={closeMobileMenu} className='nav-links'>Home</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='/services'>
                                <a className='nav-links' onClick={closeMobileMenu}>Services</a>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link href='/products'>
                                <a className='nav-links' onClick={closeMobileMenu}>Products</a>
                            </Link>
                        </li>

                        <li>
                            <Link href='/sign-up'>
                                <a  onClick={closeMobileMenu} className='nav-links-mobile'>Sign Up</a>
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </>
    )
} export default Navbar
