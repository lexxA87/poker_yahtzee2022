import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Menu from "./Menu";

describe("Menu", () => {
  test("Menu renders", () => {
    render(<Menu />, { wrapper: BrowserRouter });
    expect(screen.getByText(/hey/i)).toBeInTheDocument();
  });
});
