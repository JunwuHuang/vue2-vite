import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://test.dev'
})

export default instance
