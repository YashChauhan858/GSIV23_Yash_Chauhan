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

const addMovieToSelectedState = (
  state: IInitialState,
  actions: PayloadAction<IMovie>
) => {
  const movie = actions.payload;
  state.currMovie = movie;
};

const search = (state: IInitialState, actions: PayloadAction<string>) => {
  const searchState = actions.payload;
  state.searchState = searchState;
};

// Exporting all actions
const reducerActions = { initializeList, addMovieToSelectedState, search };

export default reducerActions;
