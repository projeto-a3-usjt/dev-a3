const url = "http://localhost:3001/cadastros/login"

export async function login(username, senha) {
		try {
				let credenciais = { username: username, senha: senha }
				let r = await fetch(url, {
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
