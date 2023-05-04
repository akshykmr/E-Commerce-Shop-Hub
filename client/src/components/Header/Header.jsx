import {TbSearch} from 'react-icons/tb';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
//  import Search from "./Search/Search";
//  import Cart from "../Cart/Cart";
//  import {Context} from "../../utils/context";
import "./Header.scss";
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Search from './Search/Search'
import { useNavigate } from "react-router-dom";





const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setshowCart] = useState(false);
    const [showSearch, setshowSearch] = useState(false);

const navigate = useNavigate();


    const  handleCart=  () => {
        setshowCart(true);
    }
    const  handleSearch=  () => {
        setshowSearch(true);
    }

    const handleScroll =()=> {
        const offset = window.scrollY;
        // console.log(offset);  this it checking that scroll working or not
        if(offset>80){
            setScrolled(true);  
        }
        else {
            setScrolled(false);
        }
    }
    useEffect (()=>{
        window.addEventListener("scroll", handleScroll);
    },[]);
    return  (
      <>
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}> {/* when scrolled state is false then class is set to main-header and when state changed to true then class becomes main-header sticky header and css apply according it  */}
            <div className="header-content">
                <ul className="left">   {/* we have use "ul>li* 3" shortcut to create 3 unorder list items */}
                
                    <li onClick={() => navigate(`/`)} >Home</li>
                    <li onClick={() => navigate(`/category`)} >Categories</li>
                    <li onClick={() => navigate(`/about`)} >About</li>
                </ul> 
                <div className="center" onClick={() => navigate(`/`)} >SHOPHUB</div>
                <div className="right">
                    <TbSearch onClick={handleSearch}/>
                    <AiOutlineHeart/>
                    <span className="cart-icon">
                        <AiOutlineShoppingCart onClick={handleCart}/>
                        <span>5</span>
                        </span>
                </div>
            </div>
        </header>
    {showCart && <Cart setshowCart={setshowCart} />}
    {showSearch && <Search setshowSearch={setshowSearch} />}

        </>
    );
};

export default Header;
