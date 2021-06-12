export const REDIRECT = "REDIRECT";

// action creators
export const redirect = (link, data) => {
  console.log("=== REDIRECT ACTION DISPATCHED ===");
  if (!data) {
    data = { data: "Something went wrong" };
  }
  return { type: REDIRECT, payload: link, data: data.data };
};
