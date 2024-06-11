import axios from "./axios.js";

export const getAccountsRequest = () => axios.get('/accounts');

export const getAccountRequest = async (id) => axios.get(`/accounts/${id}`);

export const createAccountRequest = (account) => axios.post('/accounts', account);

export const updateAccountRequest = (id, account) =>
    axios.put(`/accounts/${id}`, account);

export const deleteAccountRequest = (id)=> axios.delete(`/accounts/${id}`)
