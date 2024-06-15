import axios from "axios"

const url = "http://localhost:3001"

export async function login(username, senha) {
	try {
		let credenciais = { username: username, senha: senha }
	  let r = await fetch(`${url}/cadastros/login`, {
      method: "POST",
      body: JSON.stringify(credenciais),
      headers: { 'Content-Type': 'application/json' }
    })
    return r
  } catch (e) {
    // somente ocorrerá quando o servidor não responder
    return e
  }
}

export async function getQrs() {
  try {
    const r = await axios.get(`${url}/qrcodes`)
    return r
  } catch (e) {
    return e
  }
}

export async function getMesas() {
  try {
    const r = await axios.get(`${url}/mesas`)
    return r
  } catch (e) {
    return e
  }
}

export async function newQr(mesa, nome) {
  try {
    const r = await axios.post(`${url}/qrcodes/${mesa}`, {
      "nome": nome
    })
    return r.data
  } catch (e) {
    return e
  }
}

export async function delByMesa(mesa) {
  try {
    const r = await axios.delete(`${url}/qrcodes/mesa/${mesa}`)
    return r
  } catch (e) {
    return e
  }
}