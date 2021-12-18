import axios from 'axios'

const APIClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/afanimartin/real-world-vue',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return APIClient.get('/events')
  },
  getEvent(id) {
    return APIClient.get('/events/' + id)
  }
}
