import reducer from "../reducers";
import * as types from "../types";
import { initialState } from "../reducers";

const images = ["image-1.jpg", "image-2.jpg"];

describe("Reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_IMAGES", () => {
    expect(
      reducer(initialState, {
        type: types.FETCH_IMAGES,
        payload: { images },
      })
    ).toEqual({
      images,
      previousSelectedImage: null,
      selectedImage: null,
      loading: false,
      error: null,
    });
  });

  it("should handle CLEAR_REPOS", () => {
    expect(
      reducer(initialState, {
        type: types.CLEAR_REPOS,
        payload: {},
      })
    ).toEqual(initialState);
  });

  it("should handle TOGGLE_LOADING", () => {
    expect(
      reducer(initialState, {
        type: types.TOGGLE_LOADING,
        payload: { status: true },
      })
    ).toEqual({ ...initialState, loading: true });
  });

  it("should handle FETCH_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.FETCH_FAILED,
        payload: {},
      })
    ).toEqual({ ...initialState, error: true });
  });
});
