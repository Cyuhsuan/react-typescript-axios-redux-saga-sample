export enum API_ACTION {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  SEARCH = "SEARCH",
}

export enum SAGA_ACTION {
  CREATE = "WATCH_CREATE",
  UPDATE = "WATCH_UPDATE",
  DELETE = "WATCH_DELETE",
  SEARCH = "WATCH_SEARCH",
}

export interface IAction {
  type: string;
  payload: any;
}
