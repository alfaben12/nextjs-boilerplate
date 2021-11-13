export enum actionTypes {
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(payload: any) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    payload,
  };
}