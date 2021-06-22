import '../../config/base';
import { render, screen } from "../../testUtils";
import { AuthProvider } from "./Auth";

jest.mock("../../config/base.js", () => ({
  auth: () => ({
    onAuthStateChanged: () => jest.fn(() => {})
  })
}))

describe("Auth unit tests", () => {
  it("Should render Auth Component", () => {
    render(
      <AuthProvider>
        <div>Auth Provider</div>
      </AuthProvider>
    );
    expect(screen.getByText("Loading")).toBeTruthy();
  });
})