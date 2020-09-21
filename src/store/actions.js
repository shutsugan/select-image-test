import axios from "axios";
import {
  FETCH_IMAGES,
  FETCH_FAILED,
  SELECT_IMAGE,
  TOGGLE_LOADING,
} from "./types";

export const getImages = (images) => ({
  type: FETCH_IMAGES,
  payload: { images },
});

export const selectImage = (image) => ({
  type: SELECT_IMAGE,
  payload: { image },
});

export const toggleLoading = (status) => ({
  type: TOGGLE_LOADING,
  payload: { status },
});

export const setError = () => ({
  type: FETCH_FAILED,
});

export const fetchImages = (url) => async (dispatch) => {
  try {
    dispatch(toggleLoading(true));
    const { data } = await axios.get(url);

    dispatch(getImages(data || []));
    dispatch(toggleLoading(false));
  } catch (err) {
    dispatch(setError());
  }
};
