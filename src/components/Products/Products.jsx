// import React from 'react'
// import './Products.css'
// import StarHalfIcon from '@mui/icons-material/StarHalf';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import StarIcon from '@mui/icons-material/Star';
// import { useStateValue } from '../StateProvider/StateProvider';
// // import { getBasketTotal } from '../Reducer/reducer';
// const Products = ({id,title,dollar,price,rating,image}) => {
//   const[{basket},dispatch]=useStateValue();
//     let Halfrating=(rating-Math.floor(rating))*10;
//     let outline=0;
//     Halfrating>0?(outline=5-Math.ceil(rating))
//     :(outline=5-Math.floor(rating));
    
//     const AddToCart=()=>{
//               dispatch({
//                   type:"ADD_TO_CART",
//                   item:{
//                       id:id,
//                       title:title,
//                       dollar:dollar,
//                       price:price,
//                       rating:rating,
//                       image:image,
//                   },
//               });
//           };
//   return (
//     <div className='Products'>
//       <img src={image} alt="img" />
//       <div className='Products_info'>
//         <p>{title}</p>
//         <div className='Products_group'>
//         <p className='price'>
//             <small>{dollar}</small>
//             <strong>{price}</strong>
//         </p>
      
//         </div>
//       </div>
//       <button onClick={AddToCart} >Add to Cart</button>
//     </div>
//   )
// }

// export default Products
