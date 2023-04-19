import "./Search.scss";
import {MdClose} from 'react-icons/md';
import Thumbnail from './../../../assets/products/headphone-prod-3.webp'

const Search = ({setshowSearch}) => {
    return(
        <div className="search-container">
            <div className="search-items">
                <input type="text" autoFocus placeholder="Search for products" />
                    <MdClose className="close-btn" onClick={()=> setshowSearch(false
                    )}/>
            </div>        
            <div className="serch-content">
                <div className="serch-content-items">
                    <div className="search-result">
                        <div className="product-img">
                            <img src={Thumbnail} alt="" />
                        </div>
                        <div className="product-details">
                            <span className="product-name">Product Name</span>
                            <span className="product-Decription">Product Description</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
