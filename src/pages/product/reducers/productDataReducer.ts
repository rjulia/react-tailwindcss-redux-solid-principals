export const ACTION_TYPES = {
  FETCH_START_PRODUCT: 'FETCH_START_PRODUCT',
  FETCH_SUCCESS_PRODUCT: 'FETCH_SUCCESS_PRODUCT',
  FETCH_ERROR_PRODUCT: 'FETCH_ERROR_PRODUCT',
}

type ACTIONTYPES =
  | { type: string, payload?: any }

export const INITAL_STATE = {
  loading: false,
  data: {},
  error: false,
  errorMsg: '',
}

export const dataReducer = (state: typeof INITAL_STATE, action: ACTIONTYPES) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START_PRODUCT:
      return {
        ...state,
        loading: true,
        data: [],
      }
    case ACTION_TYPES.FETCH_SUCCESS_PRODUCT:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      }
    case ACTION_TYPES.FETCH_ERROR_PRODUCT:
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
