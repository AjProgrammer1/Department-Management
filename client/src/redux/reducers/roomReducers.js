import * as types from "../constants/roomConstans";

const initialState = {
  roomsData: null,
  errorMessage: null,
  successMessage: null,
  availableRooms: null,
};

const roomReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REQUEST_ERROR:
      return {
        ...state,
        errorMessage: payload ? payload.message : null,
      };

    case types.ADD_ROOMS: {
      return {
        ...state,
        roomsData: payload ? payload : null,
      };
    }

    case types.SET_AVAILABLE_ROOM: {
      return {
        ...state,
        availableRooms: payload ? payload : null,
      };
    }

    case types.SUCCESS_MESSAGE: {
      return {
        ...state,
        successMessage: payload ? payload.message : null,
      };
    }

    case types.RESET_MESSAGE: {
      return {
        ...state,
        successMessage: null,
        errorMessage: null,
      };
    }

    default:
      return state;
  }
};

export default roomReducer;
