import React, { useEffect, useState } from "react";
import "./Payment.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer/reducer";
// import axios from "axios";
import { db } from "../firebase";
import instance from "../../Axios/Axios";
import { AlignVerticalCenter } from "@mui/icons-material";

function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate  the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await instance({
        method: "post",
        //  Stripe expects the subunit of whatever currency you are using
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The Secret is >>>", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
  
    if (!user|| !user.uid) {
      setError("User not authenticated. Please log in.");
      setProcessing(false);
      return;
    }
  
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    }).then(({ paymentIntent }) => {
      
      if (paymentIntent && user?.id) {
        db.collection("users")
          .doc(user.id)
          .collection("orders")
          .doc(paymentIntent.uid)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
      
        // Rest of your code inside this block
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders", { replace: true });
      } else {
        setError("Payment information not available.");
        setProcessing(false);
      }
      
      
    });
   
  };
  
  console.log(user);

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h4>Delivery Address</h4>
          </div>
          <div className="delivery_details">
            <h5>{user.email}</h5>
            <p style={{ fontWeight: "600" }}>
              Vikram singh 691/5, Dadiyapura, Shivaji Nagar, JHANSI,<br></br>
              UTTAR PRADESH, 284001, India, Phone number: 9219251196
              <br></br>
              <a href="">Edit address</a>| Add delivery instructions
            </p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h4>Review items and delivery</h4>
          </div>
          <div className="items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                dollar={item.dollar}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}{" "}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h4>Payment Method</h4>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_price">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total : {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded} >
                  <span >{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
