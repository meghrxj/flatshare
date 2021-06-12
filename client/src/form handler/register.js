export const REGISTER = "REGISTER";

export const register = (user) => {
  console.log("=== REGISTER ACTION DISPATCHED ===");
  return {
    type: REGISTER,
    payload: user,
  };
};
