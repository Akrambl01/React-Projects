import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./featues/accounts/accountSlice";
import customerReducer from "./featues/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
