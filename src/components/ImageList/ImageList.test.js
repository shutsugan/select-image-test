import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../../store";

import ImageList from "./";

test("generate ImageList component snapshot", () => {
  const { container } = render(
    <Provider store={store}>
      <ImageList image={[]} />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
