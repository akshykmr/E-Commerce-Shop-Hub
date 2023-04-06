import {TbSearch} from 'react-icons/tb';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
//  import Search from "./Search/Search";
//  import Cart from "../Cart/Cart";
//  import {Context} from "../../utils/context";
import "./Header.scss";
import { useEffect, useState } from 'react';


const Header = () => {
    const [scrolled, setScrolled] = useState(false);

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
    
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}> {/* when scrolled state is false then class is set to main-header and when state changed to true then class becomes main-header sticky header and css apply according it  */}
            <div className="header-content">
                <ul className="left">   {/* we have use "ul>li* 3" shortcut to create 3 unorder list items */}
                
                    <li>Home</li>
                    <li>Categories</li>
                    <li>About</li>
                </ul> 
                <div className="center">SHOPHUB</div>
                <div className="right">
                    <TbSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon">
                        <AiOutlineShoppingCart/>
                        <span>5</span>
                        </span>
                </div>
            </div>
        </header>
    )
};

export default Header;
