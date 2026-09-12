import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const createProduct = async (token, form) => {
  return axios.post(`${API}/api/product`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listProduct = async (count = 20) => {
  return axios.get(`${API}/api/products/${count}`);
};

export const readProduct = async (token, id) => {
  return axios.get(`${API}/api/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteProduct = async (token, id) => {
  return axios.delete(`${API}/api/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProduct = async (token, id, form) => {
  return axios.put(`${API}/api/product/${id}`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadFiles = async (token, form) => {
  return axios.post(
    `${API}/api/images`,
    {
      image: form,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const removeFiles = async (token, public_id) => {
  return axios.post(
    `${API}/api/removeimages`,
    {
      public_id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const searchFilters = async (arg) => {
  return axios.post(`${API}/api/search/filters`, arg);
};

export const listProductBy = async (sort, order, limit) => {
  return axios.post(`${API}/api/productby`, {
    sort,
    order,
    limit,
  });
};