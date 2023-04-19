import "./Cart.scss";
import {MdClose} from 'react-icons/md';
// import {BsCartXFill} from 'react-icons/bs';
import CartItem from './CartItem/CartItem'



const Cart = ({setshowCart}) => {
    return(
        <div className="cart-panel">
           <div className="blank-layer"/>
           <div className="cart-content-right">
                <div className="cart-header">
                  <span className="cart-heading">Shopping Cart</span>
                  <span className="close-btn" onClick={()=> setshowCart(false
                    )}>
                    <MdClose/>
                    <span className=" close-text">Close</span>
                   </span>
                </div>
             { /* <div className="empty-cart">
                <BsCartXFill/>
                <span>No Products in the cart</span>
                <button className="return-cta">Return to shop</button>
             </div> */}
              <>
                <CartItem/>
                <div className="cart-footer">
                  <div className="subtotals">
                    <span className="subtotal-text">Subtotal</span>
                    <span className="subtotal-text price">&#8377;460</span>
                  </div>
                  <div className="checkout-btn">
                    <button className="checkout-cta">Checkout</button>
                  </div>
                </div>
              </>
           </div>
        </div>
    );
};

export default Cart;

