import axios from 'axios'
import { AUTH_VALUESTORY_API_BASEURL } from '../config'

/**@file axios.js holds the base URL for the various api calls */
const instance = axios.create({
  baseURL: AUTH_VALUESTORY_API_BASEURL,
})

export default instance
