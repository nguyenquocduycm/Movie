import React from 'react';
import { render } from 'react-dom';
import './index.css';

class App extends React.Component {

    render() {
        return (            
            <header>
                 <nav className ="navbar">
                     <span className="fristitem">
                    <span id ="itemNavbarLanguage"> Language</span>
                    <div id ="dropdownLanguage"> 
                        <p> English</p>
                        <p> Vietnamses</p>
                    </div>
                    </span>
                    <span className ="itemNavbar"> Sign up</span>
                    <span className ="itemNavbar"> Sign in</span>
                </nav>
                <p className="decriptions"> CHƯƠNG TRÌNH TRUYỀN HÌNH, PHIM KHÔNG GIỚI HẠN VÀ NHIỀU NỘI DUNG KHÁC</p>
                <p className="decriptions02"> Xem mọi nơi mọi lúc</p>
                
                <div id="backgroundloader">
                    <div class="listImage">
                        <div class="item"><img src="https://menback.com/wp-content/uploads/2021/05/kim-so-hyun-dien-vien-750x500.jpg"/></div>
                        <div class="item"><img src="https://static.fptplay.net/static/img/share/video/28_07_2020/hoa-cua-quy-vietsub-fpt-play-banner-128-07-2020_14g22-25.jpg"/></div>
                        <div class="item"><img src="https://i.ytimg.com/vi/lck5bwhz7gA/maxresdefault.jpg"/></div>
                        <div class="item"><img src="https://media.vov.vn/sites/default/files/styles/front_large/public/images/Untitled_LBUN.jpg"/></div>
                    </div>
                </div>
            </header>
        );
    }
}

render(<App />, window.document.getElementById('app'));