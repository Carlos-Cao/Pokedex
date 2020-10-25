import axios from "axios";

const Api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    baseURL: "https://pokeapi.co/api/v2/pokemon/rayquaza"
})

export default Api;