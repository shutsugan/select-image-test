import React from "react";
import { render } from "@testing-library/react";
import Loader from "./index.js";

test("generate Loader component snapshot", () => {
  const { container } = render(<Loader loader />);

  expect(container).toMatchSnapshot();
});
