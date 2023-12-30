import React from 'react'
import "./Order.css"
import moment from 'moment/moment'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../Reducer/reducer'
import { useStateValue } from '../StateProvider/StateProvider'

const Order = ({order}) => {
  const [{ basket }] = useStateValue();
  return (
    <div className='order'>
      <h2>orders</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className='order_id'>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item=>(
        <CheckoutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
        // hideButton
        />
      ))}
       <CurrencyFormat
        renderText={value => (
          <>
            <h3 className='order_total'>
              Order Total ({basket.length} items): <strong>{value}</strong>
            </h3>
         
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix='$'
        thousandSeparator={true}
      />
    </div>
  )
}

export default Order
