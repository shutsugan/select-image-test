import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import * as actions from "../actions";
import * as types from "../types";

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const images = ["image-1.jpg", "image-2.jpg"];
const loading = true;

describe("actions", () => {
  test("should set images", () => {
    const expectedAction = {
      type: types.FETCH_IMAGES,
      payload: { images },
    };

    expect(actions.getImages(images)).toEqual(expectedAction);
  });

  test("Should set error", () => {
    const expectedAction = {
      type: types.FETCH_FAILED,
    };

    expect(actions.setError()).toEqual(expectedAction);
  });

  test("Should toggle loader", () => {
    const expectedAction = {
      type: types.TOGGLE_LOADING,
      payload: { status: loading },
    };

    expect(actions.toggleLoading(loading)).toEqual(expectedAction);
  });

  it("Should load and get the image after fetching", () => {
    axiosMock.onGet("/images").reply(200, images);

    const expectedActions = [
      {
        type: types.TOGGLE_LOADING,
        payload: { status: true },
      },
      {
        type: types.FETCH_IMAGES,
        payload: { images },
      },
      {
        type: types.TOGGLE_LOADING,
        payload: { status: false },
      },
    ];

    const store = mockStore();

    return store.dispatch(actions.fetchImages("/images")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
