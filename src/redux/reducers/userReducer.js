import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../constants/actionTypes";

const initialState = {
  loading: false,
  listOfUser: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, listOfUser: action.payload, error: "" };
    case FETCH_USERS_FAILURE:
      return { loading: false, listOfUser: [], error: action.payload };
    default:
      return state;
  }
};
export default userReducer;
