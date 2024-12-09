const API_URL = "http://localhost:400";

export const API_ROUTES: Record<string, string> = {
  SIGN_UP: `${API_URL}/api/signup`,
  SIGN_IN: `${API_URL}/api/login`,
};

export const APP_ROUTES: Record<string, string> = {
  SIGN_UP: "signup/",
  SIGN_IN: "login/",
};
