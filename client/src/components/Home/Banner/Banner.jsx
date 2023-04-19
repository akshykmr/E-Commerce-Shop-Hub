import "./Banner.scss";
import IMG from '../../../assets/banner-img.png'
const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In quos, aperiam quas eaque tempora dolorem vel?
                </p>

                <div className="cta">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={IMG} alt ="" />
        </div>
    </div>
    );
};

export default Banner;
