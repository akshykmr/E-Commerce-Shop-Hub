import "./CartItem.scss";
import {MdClose} from 'react-icons/md';

import Thumbnail from '../../../assets/products/speaker-prod-2.webp'
const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="product-img">
                 <img src={Thumbnail} alt="" />
                </div>
                <div className="product-details">
                
                    <span className="product-name">Product Name</span>
                    < MdClose className="close-btn"/>
                
                    
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    
                    <div className="quantity-items">
                        <span>1</span>
                        <span>X</span>
                        <span className="highlight">&#8377;460</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
