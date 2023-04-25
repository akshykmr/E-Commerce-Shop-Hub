import "./Products.scss";
import Product from './Product/Product'

const Products = ({products, secHeadHidden, products_heading}) => {

    return (
        <div className="product-container">
           {!secHeadHidden && <div className="section-heading">{products_heading}</div>}
           {/* <div className="section-heading" style={{ display: secHeadHidden ? 'none' : 'block' }}>Section Heading</div> */}
            <div className="products">
                {products?.data?.map((item) => (
                     <Product
                      key={item.id}
                      id={item.id}
                      data={item.attributes} />
                ))}
               
            </div>
        </div>
    );
}

export default Products;
