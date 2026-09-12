import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const currentUser = async (token) =>
  await axios.post(
    `${API}/api/current-user`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const currentAdmin = async (token) => {
  return await axios.post(
    `${API}/api/current-admin`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};