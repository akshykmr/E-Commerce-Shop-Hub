import "./Category.scss";
import { useNavigate } from 'react-router-dom';



const Category = ({categories}) => {

    const navigate = useNavigate(); // this line is called instance
    
    return (
        <div className="shop-by-category">
            <div className="category">
               {categories?.data?.map((item) => ( // this is called option chaining ? mark do not allow the code to execute ahead till the first element get the data from api
                    <div key={item.id} className="categories" onClick={() => navigate(`/category/${item.id}`)}>
                      <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                    </div>  
                ))} 
            </div>
        </div>
    )
};

export default Category;



