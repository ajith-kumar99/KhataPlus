import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useEffect } from 'react'

const BestSeller = () => {
    const { products, currency } = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);
    useEffect(() => {
        const bestproducts = products.filter((item)=>(item.bestseller))
        setBestSeller(bestproducts.slice(0, 5))
    }, [])
    return (
        <div className='my-10'>
            <Title text1={'Our'} text2={'Best Sellers'} />
            <p className='text-center text-gray-800 text-lg'>Discover what everyone’s talking about – our top-selling products.</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 p-10 md:p-20'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }


            </div>
        </div>
    )
}

export default BestSeller