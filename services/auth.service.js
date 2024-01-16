const { default: axios } = require("axios");

const BACKEND_HOST = "http://10.0.2.2:3000";
async function login(email, password) {
  const endpoint = "/auth/signIn";
  const url = BACKEND_HOST + endpoint;
  const { data } = await axios.post(url, { email, password });
  console.log(data.metadata);
  console.log(data.metadata.name);
  console.log(data.metadata.createdAt);
  return {
    id: data.metadata.userId,
    token: data.metadata.token,
    name: data.metadata.name,
    email: data.metadata.email,
    createdAt: data.metadata.createdAt
  };
}

async function register(name, email, password) {
  const endpoint = "/auth/signUp";
  const url = BACKEND_HOST + endpoint;
  const { data } = await axios.post(url, { name, email, password });
  return {
    id: data.metadata.id,
    token: data.metadata.token,
    name: data.metadata.name,
    email: data.metadata.email,
    createdAt: data.metadata.createdAt
  };
}

function logout() { }

export { login, register };
