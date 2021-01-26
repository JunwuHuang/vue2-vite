import fetch from './fetch'
import { GET_USER_INFO } from '/@/constants/api'

export const getUserInfo = userId => {
  return fetch({
    url: `${GET_USER_INFO}/${userId}`
  })
}
