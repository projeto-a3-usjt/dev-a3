class User {
    constructor(id, username, senha, nome, tipo) {
        this.id = id;
        this.username = username;
        this.senha = senha;
        this.nome = nome;
        this.tipo = tipo; // garçom ou admin, 0 ou 1
    }
}

module.exports = User;