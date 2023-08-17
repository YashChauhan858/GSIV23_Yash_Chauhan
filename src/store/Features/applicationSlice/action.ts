/** This file holds all the reducer functions for changing campaign state in redux */

import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "../../../types/redux.type";
import { IMovie } from "../../../types/movei.type";

const initializeList = (
  state: IInitialState,
  actions: PayloadAction<IMovie[]>
) => {
  const listToAppend = actions.payload;
  state.list = [...state.list, ...listToAppend];
};

// Exporting all actions
const reducerActions = { initializeList };

export default reducerActions;
