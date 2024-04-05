const { v4: uuidv4 } = require("uuid");
const User = require("./user.entity.js");
const UserDTO = require("./user.dto.js");

const users = [
    new User(uuidv4(), "root", "root", "Admin", 1),
    new User(uuidv4(), "garcom", "garcom", "Garçom", 0)
];

class UserService {
    getAll() {
        return users.map((user) => new UserDTO(user))
    }

    // verificar adicionalmente se o tipo da 
    // conta na requisição é correta, talvez?
    verify(userDTO) {
        let user = users.find((user) => user.username === userDTO.username)
        if (user) {
            if (user.senha === userDTO.senha) {
                return true
            } else {
                throw new Error("Senha incorreta")
            }
        } else {
            throw new Error("Usuário não encontrado")
        }
    }

    /* assumindo que não tenha problema em 
       esperar que a requisição seja 100%
       correta todo tempo por enquanto */
    // parametros = ['username', 'senha', 'nome', 'tipo']
    create(userData) {
        // for (let param of this.parametros) {
        //     if (!userData[param]) {
        //         throw new Error("Requisição inválida")
        //     }
        // }
        // if (userData.tipo !== 0 && userData.tipo !== 1) {
        //     throw new Error("Requisição inválida")
        // }
        if (users.find((user) => user.username === userData.username)) {
            throw new Error("Usuário já existe")
        }

        const user = new User(
            uuidv4(), ...Object.values(userData))
        users.push(user)
        return new UserDTO(user)
    }
}

module.exports = UserService;