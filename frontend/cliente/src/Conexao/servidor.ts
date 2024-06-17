import axios from "axios"

const url = "http://localhost:3001"

export async function findHash(hash) {
  try {
    const r = await axios.get(`${url}/qrcodes/${hash}`)
    return r
  } catch (e) {
    return null
  }
}