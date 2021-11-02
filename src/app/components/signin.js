import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom';
import "../style/signin.css";

class Signin extends Component {
    ClickToSignIn (){
        document.getElementById("decriptions").style.display = "none";
        document.getElementById("decriptions02").style.display = "none";
        document.getElementById("container").style.display = "block";
    }
    ClickToSignUp () {
    }
    render() {
        return (    
            <header>
                 <nav className ="navbar">
                     <span className="fristitem">
                    <span id ="itemNavbarLanguage"> Ngôn Ngữ </span>
                    <div id ="dropdownLanguage"> 
                        <p> English</p>
                        <p> Vietnamses</p>
                    </div>
                    </span>
                    <span className ="itemNavbar"> <Link className="linktoSignup" to="/signup"> Đăng Ký </Link></span>
                    <span  onClick={this.ClickToSignIn} className ="itemNavbar"> Đăng Nhập </span>
                </nav>
                <p id="decriptions"> CHƯƠNG TRÌNH TRUYỀN HÌNH, PHIM KHÔNG GIỚI HẠN VÀ NHIỀU NỘI DUNG KHÁC</p>
                <p id="decriptions02"> Xem mọi nơi mọi lúc</p>

                <div id = "container">
                    <form method= "post" className ="fromlogin">
                        <p> ĐĂNG NHẬP</p>
                        <div>
                            <input type="text" className ="inputLogin" name= "username" placeholder ="Email Đăng Nhập"/>
                        </div>
                        <br/>
                        <div>
                            <input type="password" className ="inputLogin" name= "password" placeholder ="Mật Khẩu"/>
                        </div>
                        <br/> 
                        <div>
                            <button type = "button" className ="btnLogin" > Đăng Nhập</button>
                        </div>
                        <br/>
                        <div className ="checkboxAndForgotPass">
                            <div>
                                <input type="checkbox" name="rememberPassword" value="false"/>
                                <label for="rememberPassword"> Ghi nhớ đăng nhập </label>
                            </div>
                            <a href ="/"> Quên mật khẩu?</a>
                        </div>
                    </form>
                    <div className ="signup"> 
                        <p> Bạn chưa có tài khoản?</p>
                        <Link to="/signup"> Đăng kí ngay </Link>
                    </div>
                </div>
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

export default Signin;