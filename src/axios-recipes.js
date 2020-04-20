import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ricipici-76727.firebaseio.com/'
})

export default instance