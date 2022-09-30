import { IExperiance } from "../modules/common";

export interface AppState {
  experiance: IExperiance[];
  markdownContent:string|null;
}