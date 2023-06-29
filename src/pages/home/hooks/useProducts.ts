// import axios from "axios";
import { useEffect, useReducer } from 'react'
import makeRequest from '../../../helpers/make-request.ts'
import { ACTION_TYPES, dataReducer, INITAL_STATE } from '../reducers/productsDataReducer.ts'

export const useProducts = () => {
  const [state, dispatch] = useReducer(dataReducer, INITAL_STATE)

  const fetchProducts = async () => {
    dispatch({ type: ACTION_TYPES.FETCH_START })
    makeRequest({
      endPoint: '/products',
      method: 'GET',
    }).then((response) => {
      dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: response })
    }).catch((error) => {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR, payload: error })
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {
    products: state.data,
    loading: state.loading,
  }
}
