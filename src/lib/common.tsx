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

const getInLocalStorage = () => {
  const defaultUser = { token: false, userId: false };
  try {
    let userStorage = localStorage.getItem("user");

    if (!userStorage) {
      console.error("Error parsing localStorage Data");
      return defaultUser;
    }
    JSON.parse(userStorage) as { token: string; userId: string };
    return defaultUser;
  } catch (error) {
    console.error("Error parsing localStorage Data", error);
    return defaultUser;
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
