const qrCode = require('./qr.entity.js');
const qrCodeDTO = require('./qr.dto.js');

let qrs = [
    new qrCode(1, qrCode.generatehash(), "Alice", 1),
    new qrCode(2, qrCode.generatehash(), "Bernardo", 1),
    new qrCode(3, qrCode.generatehash(), "Carlos", 2),
]

class QrService {

    create(nome, mesa) {
        let newHash = qrCode.generatehash();
        let qr
        do {
            qr = new qrCode(
                qrs.length + 1,
                newHash,
                nome,
                mesa);
        } while (qrs.find(qr => qr.hash == newHash))
        qrs.push(qr)
        return new qrCodeDTO(qr.hash);
    }

    clearTable(tableNum) {
        let qrLen = qrs.length;
        qrs = qrs.filter(qr => qr.mesa !== tableNum);
        if (qrLen == qrs.length) {
            throw new Error("Nenhum QR code encontrado para a mesa informada");
        }
    }
}

module.exports = QrService;