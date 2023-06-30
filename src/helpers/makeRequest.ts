import axios from 'axios'
import { AbortController } from 'node-abort-controller'

type MakeRequestProps = {
  headers?: any,
  method: string,
  endPoint: string,
  params?: any,
  data?: any
}
function makeRequest({
  headers, method, endPoint, params, data,
}: MakeRequestProps) {
  const controller = new AbortController()
  const basicHeaders = {
    'Content-Type': 'application/json',
  }
  const urlBase = process.env.REACT_APP_URL_API
  const url = `${urlBase}${endPoint}?${params}`
  return axios({
    method,
    url,
    data,
    params,
    headers: headers || basicHeaders,
    signal: controller.signal,
  })
    // responding with the data as "data"
    .then((response) => ({
      status: response.status,
      data: response.data,
    }))
    .catch((error) => error.response.data)
}

export default makeRequest
