import React from 'react';
import style from "./TheFooter.module.css"

const TheFooter = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer_wrapper}>
                <div className={style.footer_first_row}>
                    <div className={style.footer_logo_wrapper}>
                        <div className={style.footer_logo_wrapper_first}>
                            <img src="/assets/image/footer-logo/Vector.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-1.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-2.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-3.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-4.png"  alt="main-vector"></img>
                        </div>
                        <div className={style.footer_logo_wrapper_second}>
                            <img src="/assets/image/footer-logo/Vector-5.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-6.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-7.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-8.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-8.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-9.png"  alt="main-vector"></img>
                            <img src="/assets/image/footer-logo/Vector-10.png"  alt="main-vector"></img>
                            <img className={style.g} src="/assets/image/footer-logo/Vector-11.png"  alt="main-vector"></img>
                        </div>
                    </div>
                    <nav className={style.footer_nav_wrapper}>
                        <div className={style.footer_nav_wrapper_first}>
                            <a className={style.footer_link} href='tel:+91 12345 09876'>+91 12345 09876</a>
                        </div>
                        <div className={style.footer_nav_wrapper_second}>
                            <a className={style.footer_link} href='malito:info@designmodo.com'>info@designmodo.com</a>
                        </div>
                        <div className={style.footer_mini_logo_container}>
                            <img src='/assets/image/footer-mini-logo/Vector (1).png' alt=''/>
                            <img src='/assets/image/footer-mini-logo/ant-design_twitter-circle-filled.png' alt=''/>
                            <img src='/assets/image/footer-mini-logo/entypo-social_linkedin-with-circle.png' alt=''/>
                        </div>
                    </nav>
                </div>
                </div>
                <div className={style.footer_line}>
                </div>
                <div className={style.footer_second_row}>
                    <nav className={style.navigation_bar}>
                        <a>Home</a>
                        <a>About</a>
                        <a>Technologies</a>
                        <a>Projects</a>
                        <a>Contact</a>  
                    </nav>
                    <div className={style.footer_last_text_container}>
                        <span>Designed and built by</span>
                        <span className={style.footer_last_text_first_span}>
                            &nbsp;
                            Pavan MG
                            &nbsp;
                        </span> with&nbsp;
                        <span className={style.footer_last_text_second_span}>
                            Love
                        </span>
                            &nbsp;
                            &
                            &nbsp;
                        <span className={style.footer_last_text_second_span}>
                            Coffee
                        </span>
                    </div>  
                </div>
        </footer>
    );
};

export default TheFooter;