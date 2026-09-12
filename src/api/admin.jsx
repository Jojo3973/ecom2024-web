import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getOrdersAdmin = async (token) => {
  return axios.get(`${API}/api/admin/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeOrderStatus = async (
  token,
  orderId,
  orderStatus
) => {
  return axios.put(
    `${API}/api/admin/order-status`,
    {
      orderId,
      orderStatus,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getListAllUsers = async (token) => {
  return axios.get(`${API}/api/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeUserStatus = async (token, value) => {
  return axios.post(`${API}/api/change-status`, value, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const changeUserRole = async (token, value) => {
  return axios.post(`${API}/api/change-role`, value, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};