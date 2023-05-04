import {createContext, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext =({children})=>{

    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const location = useLocation();

    useEffect(()=>{},[cartItems])

    const handleAddToCart = (product, quantity) =>{};
    const handleRemoveFromCart = (product) =>{};
    const handleProductQuantity = (type, quantity) =>{};

    return(
        <Context.Provider value={{
            categories,
            setCategories,
            products,
            setProducts,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartTotal,
            setCartTotal,
            handleAddToCart,
            handleRemoveFromCart,
            handleProductQuantity,
        }}>{children}
        </Context.Provider>
    )
};

export default AppContext;




// video 5 : 22