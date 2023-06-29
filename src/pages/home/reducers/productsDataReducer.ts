export const ACTION_TYPES = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
}

type ACTIONTYPES =
  | { type: string, payload?: any }

export const INITAL_STATE = {
  loading: false,
  data: [],
  error: false,
  errorMsg: '',
}

export const dataReducer = (state: typeof INITAL_STATE, action: ACTIONTYPES) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
        data: [],
      }
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      }
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      }
    default:
      return state
  }
}
