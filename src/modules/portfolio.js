import { db } from "../api/firebase";

export const FETCH_PORTFOLIO = "FETCH_PORTFOLIO";
export const ADD_PORTFOLIO = "ADD_PORTFOLIO";
export const UPDATE_PORTFOLIO = "UPDATE_PORTFOLIO";
export const DELETE_PORTFOLIO = "DELETE_PORTFOLIO";

const initState = {
  items: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIO:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export const fetchPorfolio = () => async dispatch => {
  try {
    const response = await db.collection("portfolio").get();
    const data = [];
    response.forEach(item => data.push(item.data()));
    dispatch({ type: FETCH_PORTFOLIO, payload: data });
    return { status: true };
  } catch (e) {
    return { status: false, message: e };
  }
};
