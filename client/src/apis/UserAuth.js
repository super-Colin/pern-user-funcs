import axios from 'axios';

let url;

if( process.env.NODE_ENV === 'production' ){
  url = `https://${window.location.hostname}/api/v1/`;
}else{
  url = `http://${window.location.hostname}:${process.env.PORT}/api/v1/`;
}

export default axios.create({
  baseURL: url,
})