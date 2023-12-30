import React from 'react'
import './Checkout.css'
import ads from '../Home/assets/ads.webp'
import Subtotal from '../Subtotal/Subtotal'
import {useStateValue} from '../StateProvider/StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
const Checkout = () => {
    const [{ basket ,user},dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ads'
                    src={ads}
                    alt="ads"/> {
                basket ?. length == 0 ? (
                    <div>
                        <h3>Hello,{user?.email}</h3>
                        <h2 className='checkout_title'>
                            Your Shopping Cart is empty
                        </h2>
                        <p>You have no items in your cart. To buy one or
                        "Add to cart" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout_title'>
                            Your Shopping Cart
                        </h2>
                        {
                        basket.map((item,i)=>(
                            <CheckoutProduct 
                            key={i}
                            id={item.id}
                            title={item.title}
                            dollar={item.dollar}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}/>
                        ))
                    } </div>
                )
            } </div>
            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
