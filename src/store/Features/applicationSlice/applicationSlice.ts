import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import reducerActions from "./action";

const applicationSlice = createSlice({
  // Used for referencing the slice
  // The name field and the key of reducer object are used to generate actionType string
  // like planogram/<name of the function we define inside reducer object>
  name: "planogram",
  initialState,
  reducers: reducerActions,
});

/**
 * createSlice function's object (applicationSlice) contains different fields in it :-
 * - Reducer function that knows the logic to update state for the the cases we defined
 * - Action creators for each of the different functions defined in the reducer field
 */
// Exporting actions
// export const {} = applicationSlice.actions;

// Exporting reducer
export default applicationSlice.reducer;
