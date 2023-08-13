import React from "react";
import "./footer.css"


function Footer (){
    return (
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-contact">
                        <h3>Контакты</h3>
                        <p>Телефон: +7 (123) 456-78-90</p>
                        <p>Email: contact@example.com</p>
                    </div>
                    <div class="footer-social">
                        <h3>Мы в соцсетях</h3>
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;