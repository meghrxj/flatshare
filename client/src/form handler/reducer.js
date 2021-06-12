import { REDIRECT } from "./ui";
const reducer = (state = {}, action) => {
  switch (action.type) {
    case REDIRECT:
      return { redirectTo: action.payload, data: action.data };
    default:
      return state;
  }
};

export default reducer;
