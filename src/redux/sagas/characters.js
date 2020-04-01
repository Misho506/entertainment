import axios from "axios"

const BASE_URL = "https://www.breakingbadapi.com/api/";


export const getCharacters = () => (
  axios.get(`${BASE_URL}characters?limit=6`)
  .then(function (response) {
    // handle success
    return response;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return error;
  }))
