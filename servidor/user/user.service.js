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

    create(userData) {
        console.log(userData)
        const user = new User(
            uuidv4(), ...Object.values(userData))
        users.push(user)
        return new UserDTO(user)
    }
}

module.exports = UserService;