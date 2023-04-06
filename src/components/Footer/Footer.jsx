import "./Footer.scss";
import Payment from '../../assets/payments.png'
import {TbBrandTelegram} from 'react-icons/tb'
import {BiMobile} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {

    return(
    <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione possimus id doloremque culpa, quod aliquid saepe
                    placeat cupiditate perspiciatis quo similique vitae.
                    Consequuntur exercitationem officiis quas adipisci ipsam magnam amet.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <TbBrandTelegram />
                    <div className="text">502 Warrior Dr, St Francis, SD 57572, United States</div>
                    </div>
                    <div className="c-item">
                    <BiMobile />
                    <div className="text">7053946660</div>
                    </div>
                    <div className="c-item">
                   < AiOutlineMail/>
                   <div className="text">akshykmr70@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Catergories</div>
                <span className="text">Headphone</span>
                <span className="text"></span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluethoot Speaker</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theaters</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    SHOPHUB 2023 CREATED BY AKSHAY KUMAR A FULLSTACK DEVELOPER
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>
    );
    };

export default Footer;
