// project imports
import config from "./../config";

// action - state management
import * as actionTypes from "./actions";

export const initialState = {
  borderRadius:
    localStorage.getItem("borderRadius") === null
      ? config.borderRadius
      : parseInt(localStorage.getItem("borderRadius")),
  mode:
    localStorage.getItem("theme") === null
      ? config.mode
      : localStorage.getItem("theme"),
  bg:
    localStorage.getItem("background") === null
      ? config.bgColor
      : localStorage.getItem("background"),
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius,
      };
    case actionTypes.SET_THEME:
      return {
        ...state,
        mode: action.mode,
      };
    case actionTypes.SET_BG:
      return {
        ...state,
        bg: action.bg,
      };
    default:
      return state;
  }
};

export default customizationReducer;
