import { ActionFunction, redirect } from "react-router-dom";
import { API } from "../../lib/common";

const jsonResponse = (data: any, status: number = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const intent = formData.get("intent");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!intent || typeof intent !== "string") {
      return jsonResponse({ message: "Invalid intent" }, 400);
    }

    if (intent === "login") {
      if (
        !email ||
        !password ||
        typeof email !== "string" ||
        typeof password !== "string"
      ) {
        return jsonResponse({ message: "Invalid email or password" }, 400);
      }
      const res = await API.login({ email, password });
      if (res.status === 200) {
        return redirect("/");
      }
      return res;
    }

    return jsonResponse({ message: `Unsupported intent: ${intent}` }, 400);
  } catch (error: any) {
    return jsonResponse(
      { message: "An error occurred", error: error.message },
      500
    );
  }
};

export default action;
