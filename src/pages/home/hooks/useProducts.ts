// import axios from "axios";
import { useEffect, useReducer } from 'react'
import makeRequest from '../../../helpers/makeRequest.ts'
import { ACTION_TYPES, dataReducer, INITAL_STATE } from '../reducers/productsDataReducer.ts'

export const useProducts = () => {
  const [state, dispatch] = useReducer(dataReducer, INITAL_STATE)

  const fetchProducts = async () => {
    dispatch({ type: ACTION_TYPES.FETCH_START_PRODUCTS })
    makeRequest({
      endPoint: '/products',
      method: 'GET',
    }).then((response) => {
      dispatch({ type: ACTION_TYPES.FETCH_SUCCESS_PRODUCTS, payload: response })
    }).catch((error) => {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR_PRODUCTS, payload: error })
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
