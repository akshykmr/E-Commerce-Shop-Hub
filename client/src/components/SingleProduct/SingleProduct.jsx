import "./SingleProduct.scss";
// import Thumbnail from './../../assets/products/earbuds-prod-4.webp';
import {AiOutlineShoppingCart, AiFillTwitterCircle,AiOutlineInstagram } from 'react-icons/ai';
import {BsFacebook}  from 'react-icons/bs';
import {ImPinterest2}  from 'react-icons/im';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";

const SingleProduct = () => {

    const [quantity, setquantity] = useState(1);
    const addQuantity = () =>{
        setquantity((prestate) => prestate +1 )
    };

    const removeQuantity = () =>{
        setquantity((prestate) => {
            if (prestate ===1) return 1
            return prestate -1
        } )
    };

    const {id}= useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    if(!data) return; 
    const product = data.data[0].attributes;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                  <div className="left">
                    <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + product.img.data.attributes.url} alt="" />
                  </div>
                    <div className="right">
                      
                        <span className="product-title">{product.title}</span>
                        <span className="product-price">&#8377; {product.price}</span>
                        <span className="product-description">{product.description}</span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={()=>removeQuantity()}>-</span>
                                <span>{quantity}</span>
                                <span onClick={()=>addQuantity()} >+</span>
                            </div>
                            <button className="add-to-cart-button"> <AiOutlineShoppingCart size = {20}/> 
                                ADD TO CART</button>
                        </div>
                        <span className="devider"></span>
                        <div className="info-item">
                            <span className="text-bold">
                                Category :
                                <span>{product.categories.data[0].attributes.title}</span>
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
                <RelatedProducts productId={id}  categoryId={product.categories.data[0].id}/>
            </div>
        </div>
    );
};

export default SingleProduct;
