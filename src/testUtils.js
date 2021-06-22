import { render } from "@testing-library/react";
import React from "react";

const AllTheProviders = ({ children }) => {
  return <React.StrictMode>{children}</React.StrictMode>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };
