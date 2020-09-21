import {
  FETCH_IMAGES,
  FETCH_FAILED,
  SELECT_IMAGE,
  TOGGLE_LOADING,
} from "./types";

export const initialState = {
  images: [],
  selectedImage: null,
  previousSelectedImage: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES: {
      const { images } = action.payload;

      return {
        ...state,
        images,
      };
    }
    case SELECT_IMAGE: {
      const { image } = action.payload;

      return {
        ...state,
        selectedImage: image,
        previousSelectedImage: state.selectedImage,
      };
    }
    case TOGGLE_LOADING: {
      const { status } = action.payload;

      return {
        ...state,
        loading: status,
      };
    }
    case FETCH_FAILED: {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
