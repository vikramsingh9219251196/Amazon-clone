import { useEffect } from "react";
import Header from "./layouts/Header/Header";
import { auth } from "./components/firebase";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer1 from "./components/footersignin/Footer1";
import Footer2 from "./components/Footer2/Footer2";
import Footer3 from "./components/Footer3/Footer3";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";
import { useStateValue } from "./components/StateProvider/StateProvider";
import Payment from "./components/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./components/Orders/Orders";
import Order from "./components/Orders/Order";

const promise = loadStripe(
  "pk_test_51NqSFpSFYMvNlGolwbo7pZruNHeyLiXW6CgNeFjJUM5nw8YBWkl6BlYNxi1KBHHdmgcWI578E5rn0R7zmOINW2Cj00qdItp4rb"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is", authUser);
      if (authUser) {
        dispatch({ type: "set_User", user: authUser });
      } else {
        dispatch({ type: "set_User", user: null });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/orders"
                            element={
                                [
                                    <Header/>,
                                    <Orders/>
                                    
                                ]
                            }/>
            <Route
              path="/"
              element={[
                <Header />,
                <Home />,
                <Footer1 />,
                <Footer2 />,
                <Footer3 />,
              ]}
            />
            <Route path="/Login" element={[<Login />]} />
            <Route
              path="/payment"
              element={[
                <Header />,
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              ]}
            />
            <Route path="/checkout" element={[<Header />, <Checkout />]} />
            <Route
              path="/return"
              element={[<Header />, <Footer1 />, <Footer2 />, <Footer3 />]}
            />
            {/* <Route
              path="/order"
              element={[<Order/>]}
            /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
