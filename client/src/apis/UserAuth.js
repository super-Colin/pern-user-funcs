import axios from 'axios';
const url = window.location.port ? 
`${window.location.protocol}//${window.location.hostname}:${window.location.port}/` :
`${window.location.protocol}//${window.location.hostname}/`

export default axios.create({
  baseURL: url,
})