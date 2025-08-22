import { render, screen, fireEvent } from "@testing-library/react";
import RequestForm from "../components/RequestForm";

test("renders Request Form and submits data", () => {
  render(<RequestForm />);

  // Check title
  expect(screen.getByText(/Request Form/i)).toBeInTheDocument();

  // Fill out form
  fireEvent.change(screen.getByPlaceholderText(/Enter item name/i), {
    target: { value: "Laptop" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Enter amount/i), {
    target: { value: "1500" },
  });

  // Submit form
  fireEvent.click(screen.getByText(/Submit Request/i));

  // Optional: check if inputs are cleared
  expect(screen.getByPlaceholderText(/Enter item name/i)).toHaveValue("");
  expect(screen.getByPlaceholderText(/Enter amount/i)).toHaveValue(null);
});
