
import { Action } from '@ngrx/store';
import { IExperiance } from '../modules/common';
import { DatastoreActionType } from './datastore.action.type';

//ACTION set experiance to store
export class setExperiance implements Action{
  readonly type =  DatastoreActionType.GET_EXPERIANCE;
  constructor(public experiance:  IExperiance[] ) {
  }
}

//ACTION init call to fetch data from server
export class initData implements Action{
  readonly type = DatastoreActionType.INIT_DATA;
}

//ACTION set Markdown from api
export class setMarkdown implements Action{
  readonly type = DatastoreActionType.SET_MARKDOWN;
  constructor(public markdownContent:string){}
}

//ACTION call for Markdown from state
export class getMarkdown implements Action{
  readonly type = DatastoreActionType.GET_MARKDOWN;
  constructor(){}
}


export type DatastoreActions = initData | setExperiance | setMarkdown | getMarkdown;