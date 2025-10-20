import { render, screen } from "@testing-library/react";
import App from "../App";
// src/setupTests.js
import '@testing-library/jest-dom';


test("renders name input", () => {
  render(<App />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
});
