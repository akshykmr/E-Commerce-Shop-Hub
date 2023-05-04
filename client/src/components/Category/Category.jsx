import React from 'react'
import './Category.scss'
import Product from './../Products/Products'
import {useParams} from 'react-router-dom'  // useParams is used to access the id of a data that is to be fetch by api 
import {useFetch} from '../../hooks/useFetch'

const Category = () => {

  const { id } = useParams();
    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );

  return (
      <div className="category-main-content">
        <div className="layout">
            <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
            <Product secHeadHidden = {true} products={data} />
        </div>
      </div>
  );
}

export default Category
