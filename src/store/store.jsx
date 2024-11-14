import { createStore } from "redux";
const INITIAL_STATE = {
  adminAccess: {
    emailId: "",
    pass: "",
  },
};
const reducer = (store = INITIAL_STATE, action) => {
  if (action.type === "adminAccess") {
    return { ...store, adminAccess: action.payload };
  } else {
    return store;
  }
};
const store = createStore(reducer);
export default store;
