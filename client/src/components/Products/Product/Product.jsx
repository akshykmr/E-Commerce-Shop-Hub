import "./Product.scss";
import THUMBNAI from '../../../assets/products/earbuds-prod-1.webp'

const Product = () => {
    return (
        <div className="product_card">
            <div className="thumbnail">
                <img src={THUMBNAI} alt="" />
            </div>
            <div className="product-details">
                <span className="name">Product Name</span>
                <span className="price">&#8377; 490</span>
            </div>
        </div>

    );
};

export default Product;
