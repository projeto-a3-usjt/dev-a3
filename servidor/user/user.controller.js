const UserService = require("./user.service.js");
const UserDTO = require("./user.dto.js");

const uService = new UserService();

class UserController {
    cadastraUsuário(req, res) {
        try {
            res.json(uService.create(req.body))
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }

    listaUsuários(req, res) {
        // restringir acesso para administradores
        res.json(uService.getAll())
    }

    verificaUsuário(req, res) {
        try {
            uService.verify(new UserDTO(req.body))
            res.status(200).json({ message: "Usuário verificado" })
        } catch (e) {
            res.status(401).json({ error: e.message })
        }
    }
}

module.exports = UserController