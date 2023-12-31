import React, { useEffect } from 'react'
import style from './Categories.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../Redux/CategoriesReducer';
import { Puff } from 'react-loader-spinner';
import { Helmet } from "react-helmet";
import logo from "../../Assets/Images/favicon.ico";

export default function Categories() {

  let dispatch = useDispatch();
  let { categories, Error, loading } = useSelector((state) => state.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [])
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Categories</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="icon" href={logo} />
    </Helmet>

    {loading ? <div className='vh-100 w-100 d-flex py-5 justify-content-center align-items-center'>

      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />

    </div> : <div className='row gy-3 my-2'>

      {categories.map((category) => <div className='col-md-3 cursor-pointer p-2 '>
        <img height={300} className='w-100' src={category.image} alt="" />
        <h3 className='h5 mt-2'>{category.name}</h3>
      </div>)}

    </div>}


  </>
}
