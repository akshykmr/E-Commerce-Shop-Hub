import "./SingleProduct.scss";
import Thumbnail from './../../assets/products/earbuds-prod-4.webp';
import {AiOutlineShoppingCart, AiFillTwitterCircle,AiOutlineInstagram } from 'react-icons/ai';
import {BsFacebook}  from 'react-icons/bs';
import {ImPinterest2}  from 'react-icons/im';
import RelatedProducts from './RelatedProducts/RelatedProducts'


const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                  <div className="left">
                    <img src={Thumbnail} alt="" />
                  </div>
                    <div className="right">
                      
                        <span className="product-title">Product-Title</span>
                        <span className="product-price">&#8377; 490</span>
                        <span className="product-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In odit assumenda quia sunt eaque. Molestias cupiditate debitis sint exercitationem sapiente.</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button"> <AiOutlineShoppingCart size = {20}/> 
                                ADD TO CART</button>
                        </div>
                        <span className="devider"></span>
                        <div className="info-item">
                            <span className="text-bold">
                                Category :
                                <span>Headphones</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span    className="social-icons">
                                    <BsFacebook size ={16} />
                                    <AiFillTwitterCircle size ={16} />
                                    <AiOutlineInstagram size ={16} />
                                    <ImPinterest2 size ={16} />
                                </span>
                            </span>
                        </div> 
                     
                   </div>
                </div>
                <RelatedProducts/>
            </div>
        </div>
    );
};

export default SingleProduct;
