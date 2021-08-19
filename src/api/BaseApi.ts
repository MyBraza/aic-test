import axios from 'axios'
import { BASE_API_URL } from '@config'

export const getAxiosInstance = (
  browserBaseURL = BASE_API_URL,
) => {
  return axios.create({
    baseURL: browserBaseURL,
  })
};
