import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useStateValue } from '../StateProvider/StateProvider';
const CheckoutProduct = ({id,title,dollar,price,rating,image,hideButton}) => {
  const[{basket},dispatch]=useStateValue();
    let Halfrating=(rating-Math.floor(rating))*10;
    let outline=0;
    Halfrating>0?(outline=5-Math.ceil(rating))
    :(outline=5-Math.floor(rating));
    const removefromBasket=()=>{
     dispatch({
       type:"Remove_from_basket",
       id:id,
     })
    };
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct_image' src={image} alt="img" />
      <div className='checkProduct_info'>
        <p className='checkoutProduct_title'>
            {title}
        </p>
        <p className='checkoutProduct_dollar_price'>
            <small>{dollar}</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
        {
            Array(Math.floor(rating))
            .fill()
            .map((_,index)=>(
                <StarIcon key={index}/>
            ))
          }
       
          {Halfrating>0?<StarHalfIcon/>:<></>}
          {outline>0?Array(outline).fill().map((_,index)=>
          <StarOutlineIcon key={index}/>)
        :""}
        </div>
        {!hideButton &&(
          <button onClick={removefromBasket}>Remove from cart</button>
        )}
        
        
      </div>
    </div>
  )
}

export default CheckoutProduct