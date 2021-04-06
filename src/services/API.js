import axios from 'axios'

const baseUrl='http://localhost:3030/'

export const getAllNews= async ()=>{
  return await axios.get(`${baseUrl}listaVesti`)
}
export const getAllComments= async ()=>{
  return await axios.get(`${baseUrl}listaKomentara`) 
}
export const postNews= async (data)=>{
  return await axios.post(`${baseUrl}dodajVest`, data) 
}
export const postComments= async (data)=>{
  return await axios.post(`${baseUrl}dodajKomentar`, data)
}
export const deleteNews= async (data)=>{
  return await axios.post(`${baseUrl}obrisiVest`, data)
}
export const deleteComment= async (data)=>{
  return await axios.post(`${baseUrl}obrisiKomentar`, data)
}