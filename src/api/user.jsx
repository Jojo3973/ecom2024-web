import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const createUserCart = async (token, cart) => {
  return axios.post(`${API}/api/user/cart`, cart, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listUserCart = async (token) => {
  return axios.get(`${API}/api/user/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const saveAddress = async (token, address) => {
  return axios.post(
    `${API}/api/user/address`,
    { address },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const saveOrder = async (token, payload) => {
  return axios.post(`${API}/api/user/order`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getOrders = async (token) => {
  return axios.get(`${API}/api/user/order`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};