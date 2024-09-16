import React from 'react';
import style from "./TheMain.module.css"

const TheMain = () => {
    return (
        <main>
            <div className={style.main_block}>
                <div className={style.main_block_text}>
                Hi 👋,<br/>
                My name is<br/>
                <span className={style.pavan_mg}> Pavan MG </span><br/>
                I build things for web
                </div>
                <div className={style.main_block_img}>
                    <img src='/assets/image/main-user.png' alt='main_img'></img>
                </div>
            </div>
            <div className={style.tech_stack_text_main}>
                <div className={style.tech_stack_text}>My Tech Stack</div>
                <div className={style.techologies_text}>
                    Technologies I’ve been working with recently
                </div>
            
            </div>
            
        </main>
    );
};

export default TheMain;