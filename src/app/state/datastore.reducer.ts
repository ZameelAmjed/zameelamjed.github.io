import { DatastoreActions } from './datastore.action';
import { DatastoreActionType } from './datastore.action.type';

export const initialState: [] = [];

export function datastoreReducer(
  state = initialState,
  action: DatastoreActions
) {
  switch (action.type) {
    case DatastoreActionType.GET_EXPERIANCE:
      return {
        ...state,
        experiance: action.experiance,
      };
      case DatastoreActionType.SET_MARKDOWN:
        return {
          ...state,
          markdownContent: action.markdownContent,
        };
    default:
      return { ...state };
  }
}
