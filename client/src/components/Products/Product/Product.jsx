import "./Product.scss";
import { useNavigate } from "react-router-dom";
// import THUMBNAI from '../../../assets/products/earbuds-prod-1.webp'

const Product = ({id, data}) => {

    const navigate = useNavigate();
    return (
        <div className="product_card" onClick={()=>navigate("/product/" + id)}>
            <div className="thumbnail">
                <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + data.img.data.attributes.url} alt="" />
            </div>
            <div className="product-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>

    );
};

export default Product;
