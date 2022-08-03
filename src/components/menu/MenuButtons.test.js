import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import MenuButtons from "./MenuButtons";

describe("Menu", () => {
  test("Menu renders", () => {
    render(<MenuButtons />, { wrapper: BrowserRouter });
    expect(screen.getByText(/play/i)).toBeInTheDocument();
  });
});
