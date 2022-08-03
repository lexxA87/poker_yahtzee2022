import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

describe("App renders", () => {
  test("full app rendering/navigating", () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/hey/i)).toBeInTheDocument();
  });
});
