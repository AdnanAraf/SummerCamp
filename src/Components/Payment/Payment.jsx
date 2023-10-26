import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../hooks/useCart";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51NJpP7EhIE2U5k3MyXs1geM6YS6UcYfBEXy2aMne8rZy2Q1vJ26nHEXVNb8TWSJAnufwctGuflUtFZpovmlxyPv100qodpzB5o"
  );
  const [cart] = useCart();
  const result = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <h1 className="font-titleFont mt-[20px] ml-[40px] font-semibold">
        Please Payment
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={result} cart={cart}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
