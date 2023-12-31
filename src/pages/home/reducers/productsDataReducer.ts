export const ACTION_TYPES = {
  FETCH_START_PRODUCTS: 'FETCH_START',
  FETCH_SUCCESS_PRODUCTS: 'FETCH_SUCCESS',
  FETCH_ERROR_PRODUCTS: 'FETCH_ERROR',
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
    case ACTION_TYPES.FETCH_START_PRODUCTS:
      return {
        ...state,
        loading: true,
        data: [],
      }
    case ACTION_TYPES.FETCH_SUCCESS_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      }
    case ACTION_TYPES.FETCH_ERROR_PRODUCTS:
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
