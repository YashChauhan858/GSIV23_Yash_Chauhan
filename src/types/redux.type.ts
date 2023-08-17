import { IMovie } from "./movei.type";

export interface IInitialState {
  list: IMovie[];
  currMovie: IMovie | null;
}
