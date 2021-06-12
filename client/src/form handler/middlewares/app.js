import { apiRequest } from "../api";
import { REGISTER } from "../register";

const SERVER_URL = `http://localhost:3001`;

export const appMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case REGISTER: {
      next(
        apiRequest({
          url: `${SERVER_URL}/submit`,
          method: "POST",
          data: action.payload,
        })
      );
      break;
    }
    default:
      break;
  }
};
