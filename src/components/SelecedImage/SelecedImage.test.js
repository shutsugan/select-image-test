import React from "react";
import { render } from "@testing-library/react";
import SelectedImage from ".";

test("generate SelectedImage component snapshot", () => {
  const { container } = render(<SelectedImage image={""} />);

  expect(container).toMatchSnapshot();
});
