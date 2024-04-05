const QrService = require('./qr.service.js');
const qrCodeDTO = require('./qr.dto.js');
const qrService = new QrService();

class QrController {
    criaQr(req, res) {
        try {
            res.json(qrService.create(req.body['nome'], req.params['id']));
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }

    limpaMesa(req, res) {
        try {
            qrService.clearTable(req.params['id']);
            res.send(`Mesa ${req.params['id']} limpa`);
        } catch (e) {
            res.status(404).send(e.message);
        }
    }
}

module.exports = QrController;