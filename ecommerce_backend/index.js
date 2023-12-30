const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51NqSFpSFYMvNlGolbdyaVWItMqbvf3zgXxBOFYIT4sndj1lg7b5w5Ivpvn9oRu9NnjvPKUrh8PaPaHuXQwUYjCK200U1x7db5p"
);
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment has been received !!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);
