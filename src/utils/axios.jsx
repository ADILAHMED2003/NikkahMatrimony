import axios from "axios";


export async function handlePost(url, data, config) {
  const response = await axios.post(url, data, config);
  return response.data;
}

export async function handlePatch(url, data) {
  const response = await axios.patch(url, data);
  return response.data;
}

export async function handleDelete(url, data) {
  const response = await axios.delete(url, data);
  return response.data;
}
export async function handleGet(url) {
  const response = await axios.get(url);
  return response.data;
}

