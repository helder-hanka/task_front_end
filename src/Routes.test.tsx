import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

test("renders learn react link", () => {
  render(<RouterProvider router={router} />);
  const linkElement = screen.getByText(/hello word/i); // Notez la correspondance exacte avec le texte rendu.
  expect(linkElement).toBeInTheDocument();
});
