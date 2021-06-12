import axios from "axios";
import { API_REQUEST, apiError, apiSuccess } from "../api";
import { redirect } from "../ui";

export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === API_REQUEST) {
      const { url, method, data } = action.meta;
      axios({
        method,
        url,
        data,
      })
        .then(({ data, stat }) => {
          dispatch(apiSuccess({ response: data }));
          if (data.data.stat === "User already exists!") {
            dispatch(redirect("/exists", data));
          } else if (data.data.stat === "New user added") {
            dispatch(redirect("/thank-you", data));
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(apiError({ error: error.response }));
          dispatch(redirect("/error", undefined));
        });
    }
  };
