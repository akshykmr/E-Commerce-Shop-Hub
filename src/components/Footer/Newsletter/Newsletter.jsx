import "./Newsletter.scss";

import {
    BsFacebook,
    BsInstagram, 
    BsTwitter,
    BsYoutube
} from 'react-icons/bs'



const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">News Letter</span>
                 <span className="big-text">Sign up for latest updates and offers</span>
                 <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                 </div>
                 <div className="text">Will be used in accordance with out Privacy Policy</div>
                 <div className="social-icons">
                    <div className="icon">
                    <BsFacebook size={14}/>
                    </div>
                    <div className="icon">
                        <BsInstagram  size={14}/>
                        </div>
                        <div className="icon">
                    <BsTwitter  size={14}/>
                    </div>
                    <div className="icon">
                    <BsYoutube  size={14}/>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Newsletter;
