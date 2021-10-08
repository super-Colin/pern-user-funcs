import axios from 'axios';
const url = window.location.port ? 
`http://${window.location.hostname}:${window.location.port}/` :
`http://${window.location.hostname}/`

export default axios.create({
  baseURL: url,
})