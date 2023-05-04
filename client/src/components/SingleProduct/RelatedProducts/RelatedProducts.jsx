
import Product from './../../Products/Products';
import { useFetch } from '../../../hooks/useFetch';

const  RelatedProducts = ({ categoryId, productId }) => {
    const { data } = useFetch(
        `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
    );

    console.log(data) 

    return (
        <div className="related-products">
        <Product products_heading = "Related Products"  products={data} />
        </div>
    );
};

export default RelatedProducts;

// youtube video 5:14:32

