export enum API_ACTION {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  SEARCH = "SEARCH",
}

export enum COUNTER_ACTION {
  DECREASE = "decrease",
  INCREASE = "increase",
  RESET = "reset",
}

export enum SAGA_ACTION {
  CREATE = "WATCH_CREATE",
  UPDATE = "WATCH_UPDATE",
  DELETE = "WATCH_DELETE",
  SEARCH = "WATCH_SEARCH",
}
