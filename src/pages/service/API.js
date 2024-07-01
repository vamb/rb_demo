import { axiosRequests } from "../utils/axiosRequests"

const defaultOpts = { urlPrefix: '/api' }

export function getCall(params) {
  return axiosRequests('/getUrl', { ...defaultOpts, ...{ params }, method: 'get' })
}

export function postCall(data) {
  return axiosRequests('/postUrl', { ...defaultOpts, ...{ data }, method: 'post' })
}