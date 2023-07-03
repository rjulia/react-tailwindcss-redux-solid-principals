/* eslint-disable react-hooks/exhaustive-deps */
// import axios from "axios";
import { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import makeRequest from '../../../helpers/makeRequest.ts'
import { ACTION_TYPES, dataReducer, INITAL_STATE } from '../reducers/productDataReducer.ts'

export const useProduct = () => {
  const params = useParams()

  const [state, dispatch] = useReducer(dataReducer, INITAL_STATE)

  const fetchProductByID = async () => {
    dispatch({ type: ACTION_TYPES.FETCH_START_PRODUCT })
    makeRequest({
      endPoint: `/products/${params.id}`,
      method: 'GET',
    }).then((response) => {
      console.log('🚀 ~ file: useProduct.ts:18 ~ fetchProducts ~ response:', response)
      dispatch({ type: ACTION_TYPES.FETCH_SUCCESS_PRODUCT, payload: response })
    }).catch((error) => {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR_PRODUCT, payload: error })
    })
  }

  useEffect(() => {
    fetchProductByID()
  }, [params.id])

  return {
    product: state.data,
    loading: state.loading,
  }
}
