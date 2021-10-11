import { useRef, useEffect, Component } from 'react';

function Template() {
    const pagecontainerRef = useRef(null);
    const pagesRef = useRef(null);
    const toggleBtnRef = useRef(null);
    const ulRef = useRef(null);
    const overlayRef = useRef(null);
    const linksRef = useRef(null);


    useEffect(() => {

        const container = pagecontainerRef.current;
        const toggleBtn = toggleBtnRef.current;
        const ul = ulRef.current;
        const links = [...document.querySelectorAll('.link')];

        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('active');
            container.classList.toggle('active');
            ul.classList.toggle('show');
        })
        
        const changePage = (i) => {
            let currentPageIndex = 0;
            const overlay = overlayRef.current;
            const pages = [...document.querySelectorAll('.page')];
    
            overlay.style.animation = `slide 1s linear 1`;
            
            setTimeout(() => {
                pages[currentPageIndex].classList.remove('active');
                pages[i].classList.add('active');
                currentPageIndex = i;
            }, 500);
            setTimeout(() => {
                overlay.style.animation = null;
            }, 1000);
        }

        links.forEach((item, i) => {
            item.addEventListener('click', () => {
                changePage(i);
            })
        })

    });
 

     
    
    return (
        <div>
            <nav className="navbar">
                <p className="brand">logo</p>
                <div ref={toggleBtnRef} className="toggle-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            <ul ref={ulRef} className="nav-list">
                <li className="link">home</li>
                <li className="link">project</li>
                <li className="link">about</li>
            </ul>
            <header ref={pagecontainerRef} className="page-container">
                <span ref={overlayRef} className="overlay"></span>
                <section className="page home active">
                    <p className="title">home</p>
                </section>
                <section className="page project">
                    <p className="title">project</p>
                </section>
                <section className="page about">
                    <p className="title">about</p>
                </section>
            </header>
        </div>
    )
} export default Template;