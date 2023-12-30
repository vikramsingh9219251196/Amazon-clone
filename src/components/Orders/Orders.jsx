import React,{useEffect, useState} from 'react'
import "./Orders.css";
import greentick from "../../layouts/Header/header_img/checked.png";
import { db } from '../firebase'
import { useStateValue } from '../StateProvider/StateProvider'
import Order from './Order'
const Orders = () => {
  const [{user}]=useStateValue();
  const[orders,setOrders]=useState([]);
  useEffect(()=>{
    if(user){
      db
      .collection("users")
     .doc(user?.uid)
      .collection("orders")
      .orderBy("created","desc")
      .onSnapshot(snapshot=>{
        setOrders(snapshot.docs.map(doc=>({
          id:doc.uid,
          data:doc.data(),
        })))
      })
    }
    else{
      setOrders([]);
    }

  },[user]) 
  return (
    <div className="orders">
      <div className='orders_order'>
        {orders?.map(order=>(
          <Order order={order}/>
        ))}
        </div>
      <div>
        <h1 className="white_green">Order Summary</h1>
      </div>
      <div className="span">
        <img src={greentick} alt="tick" />
        <h1>Thank You</h1>
        <br></br>
        Order Successfully Placed
        <h5 className="span1">Estimated Delivery Date</h5>
        <h5 className="span2">Sat, Oct 09,2023</h5>
      </div>
    </div>
  );
};

export default Orders;
