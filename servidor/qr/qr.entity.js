class qrCode {
    constructor(id, hash, nome, mesa) {
        this.id = id;
        this.hash = hash;
        this.nome = nome;
        this.mesa = mesa;
    }

    static generatehash() {
        return Math.random().toString(16).substring(2, 8);
    }
}

module.exports = qrCode;