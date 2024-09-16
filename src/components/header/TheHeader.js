import React from 'react';
import style from './TheHeader.module.css'

const TheHeader = () => {
    return (
        <header className={style.header}>
          <div className={style.logo_wrapper}>
            <div className={style.logo_first_row}>
                <img src="/assets/image/logo-main/Vector.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-1.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-2.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-3.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-4.png"  alt="main-vector"></img>
            </div>
            <div className={style.logo_second_row}>
                <img src="/assets/image/logo-main/Vector-5.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-6.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-7.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-8.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-8.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-9.png"  alt="main-vector"></img>
                <img src="/assets/image/logo-main/Vector-10.png"  alt="main-vector"></img>
                <img className={style.g} src="/assets/image/logo-main/Vector-11.png"  alt="main-vector"></img>
            </div>
          </div>
          <nav className={style.navigation_bar}>
                <a>Home</a>
                <a>About</a>
                <a>Tech Stack</a>
                <a>Projects</a>
                <a>Contact</a>
          </nav>
          <div className={style.logo_header}>
                <img className={style.logo_header_img} 
                src='/assets/image/logo-header/Vector.png'alt=''
                >
                
                </img>
                <img className={style.logo_header_img} 
                src='/assets/image/logo-header/Vector (1).svg'alt=''
                >
                
                </img>
                <img className={style.logo_header_img} 
                src='/assets/image/logo-header/Vector (2).svg'alt=''
                >
                
                </img>
          </div>
      </header>
    );
};

export default TheHeader;