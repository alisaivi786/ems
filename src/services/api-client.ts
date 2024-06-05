import axios from "axios";

export default  axios.create({
    baseURL: "https://api.rawg.io/api",
  params: {
    key: "d21bbf2e7a95469098fa7b529c4e9998",
  },

});