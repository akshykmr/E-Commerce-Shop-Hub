import Banner from "./Banner/Banner";
import "./Home.scss";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect } from "react";
import {fetchDataFromApi} from '../../utils/api';


const Home = () => {

    useEffect(()  => {
        getCategories()
    }, []);

    
    const getCategories = () => {
        fetchDataFromApi("/api/categories").then(res =>  console.log(res));
    };


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

