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
            <div className={style.list_tech}>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/vscode-icons_file-type-html.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                <img src='/assets/image/vs-code-items/vscode-icons_file-type-css.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                <img src='/assets/image/vs-code-items/vscode-icons_file-type-js-official.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/logos_react.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/Vector (1).png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/logos_bootstrap.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/vscode-icons_file-type-tailwind.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/logos_sass.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/logos_git-icon.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/cib_greensock.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/vscode-icons_file-type-vscode.png' alt='main_img' />
                </div>
                <div className={style.list_tech_item}>
                    <img src='/assets/image/vs-code-items/akar-icons_github-fill.png' alt='main_img' />
                </div>   
            </div>
        </main>
    );
};

export default TheMain;