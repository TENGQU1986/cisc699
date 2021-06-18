import { render, fireEvent, act } from "@testing-library/react";

import App from "./App";
import Loading from "./Loading";
import Login from "./Login";
import Parent from "./Parent";

describe("should render App", () => {
  let user;
  let loading;
  it("should render login page when no user", () => {
    user = null;

    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
    
  });

  it("should render Loading page when no user and loading is true", () => {
    user = 'some user';
    loading = true;

    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot()
  });

  it('should render Parent component when there is user', () => {
      user = 'some user';
      loading = false;
      const { container } = render(<Parent />);
      expect(container).toMatchSnapshot()
  })
});
