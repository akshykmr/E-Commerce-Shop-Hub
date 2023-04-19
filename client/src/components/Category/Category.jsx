import React from 'react'
import './Category.scss'
import Product from './../Products/Products'

const Category = () => {
  return (
      <div className="category-main-content">
        <div className="layout">
            <div className="category-title">Category Name</div>
            <Product secHeadHidden = {true} />
        </div>
      </div>
  );
}

export default Category
