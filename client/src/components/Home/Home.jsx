import Banner from "./Banner/Banner";
import "./Home.scss";
import Category from "./Category/Category";
import Products from "../Products/Products";

const Home = () => {
    return <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
            <Category/>
            </div>
            <Products products_heading="Popular Products" />
        </div>
    </div>;
};
export default Home;

