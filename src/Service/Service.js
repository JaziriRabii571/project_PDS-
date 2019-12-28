import axios from 'axios';
const URL = 'http://localhost:3000/';


export const create_tontine = params => {
    return axios.post(`${URL}create`, params)
}

export const create_participant = params => {
    return axios.post(`${URL}addParticipant`, params)
}

export const create_user = params => {
    return axios.post(`${URL}createuser`, params)
}

export const add_token = params => {
    return axios.post(`${URL}addNewToken`, params)
}