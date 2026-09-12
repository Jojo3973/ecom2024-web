import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { payment } from "../../api/stripe";
import useEcomStore from "../../store/ecom-store";
import CheckoutForm from "../../components/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  const token = useEcomStore((state) => state.token);

  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;

    let ignore = false;

    const createPaymentIntent = async () => {
      try {
        const res = await payment(token);

        console.log("PaymentIntent:", res.data);

        if (!ignore) {
          setClientSecret(res.data.clientSecret);
          setError("");
        }
      } catch (err) {
        console.log("Payment Error:", err);

        if (!ignore) {
          setError(
            err.response?.data?.message ||
              err.message ||
              "ไม่สามารถโหลดระบบชำระเงินได้"
          );
        }
      }
    };

    createPaymentIntent();

    return () => {
      ignore = true;
    };
  }, [token]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
    loader: "auto",
  };

  if (error) {
    return (
      <div className="p-5 text-red-500">
        {error}
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="p-5">
        กำลังโหลดระบบชำระเงิน...
      </div>
    );
  }

  return (
    <div>
      <Elements
        key={clientSecret}
        stripe={stripePromise}
        options={options}
      >
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;