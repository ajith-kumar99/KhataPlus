import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useEffect } from 'react'


const LatestProducts = () => {
    const {products,currency} = useContext(ShopContext);
    const [latestCollection,setLatestCollection] = useState([]);
    useEffect(() => {
      setLatestCollection(products.slice(0,10))
    }, [])

    console.log(latestCollection,currency)
    
    
   
    
  return (
    <div className='my-10'>
      <Title text1={'New'} text2={'Arrivals'}/>
      <p className='text-center text-gray-800 text-lg'>Explore Our Latest Collections – Fresh Styles Just Dropped</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-10 md:p-20'>
        {
          latestCollection.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))
        }


      </div>
    </div>
  )
}

export default LatestProducts
