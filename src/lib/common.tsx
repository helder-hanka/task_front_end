import axios from "axios";
const API_URL = "http://localhost:4000/api/task";

interface LoginReq {
  email: string;
  password: string;
}

interface LoginRes {
  token: string;
  userId: string;
}

const saveUserToLocalStorage = (token: string, userId: string): void => {
  if (!token || !userId) {
    console.error("Invalid token provided for localStorage");
    return;
  }

  try {
    const userData = { token, userId };
    localStorage.setItem("user", JSON.stringify(userData));
  } catch (error) {
    console.error("Failed to save user data to localStorage:", error);
  }
};

export const getInLocalStorage = () => {
  const defaultUser = { token: false, userId: false };
  const userStorage = localStorage.getItem("user");
  try {
    if (!userStorage) {
      console.error("Error parsing localStorage Data");
      return defaultUser;
    }
    const parseData = JSON.parse(userStorage) as {
      token: string;
      userId: string;
    };
    return parseData;
  } catch (error) {
    console.error("Error parsing localStorage Data", error);
    return defaultUser;
  }
};

export const removeUserToken = () => {
  try {
    localStorage.removeItem("user");
    return true;
  } catch (error) {
    console.error("Error removing user token", error);
    return false;
  }
};
export const API = {
  login: async (credentials: LoginReq): Promise<any> => {
    try {
      const res = await axios.post<LoginRes>(
        `${API_URL}/admin/login`,
        credentials
      );

      if (res?.data.token) {
        saveUserToLocalStorage(res.data?.token, res.data?.userId);
      }
      return res;
    } catch (error: any) {
      console.error("API Login: ", error);
      return error;
    }
  },
};
