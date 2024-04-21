import { Injectable } from '@nestjs/common';
import { QrCodeDTO } from './qrCode.dto';


@Injectable()
export class QrCodeService {

    createQrCode(qrCodeDTO: QrCodeDTO) {
    console.log(qrCodeDTO);
  }
}
