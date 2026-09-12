import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const payment = async (token) =>
  await axios.post(
    `${API}/api/user/create-payment-intent`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );