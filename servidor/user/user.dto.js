class UserDTO {
    constructor({username, senha, tipo}) {
        this.username = username;
        this.senha = senha;
        this.tipo = tipo; // garçom ou admin, 0 ou 1
    }
}

module.exports = UserDTO;