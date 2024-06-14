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