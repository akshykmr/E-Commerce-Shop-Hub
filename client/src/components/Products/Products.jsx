import "./Products.scss";
import Product from './Product/Product'

const Products = ({secHeadHidden, products_heading}) => {

    return (
        <div className="product-container">
           {!secHeadHidden && <div className="section-heading">{products_heading}</div>}
           {/* <div className="section-heading" style={{ display: secHeadHidden ? 'none' : 'block' }}>Section Heading</div> */}
            <div className="products">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    );
}

export default Products;
