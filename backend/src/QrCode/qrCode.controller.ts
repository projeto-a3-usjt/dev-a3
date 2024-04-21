import { Controller, Post, Param  } from '@nestjs/common';
import { QrCodeService } from './qrCode.service';
import { QrCodeDTO } from './qrCode.dto';


@Controller()
export class QrCodeController {
  constructor(private readonly QrCodeService: QrCodeService) {}

  @Post('mesa/:id/qr')
  async createQrCode(@Param('id') idQr: string) {

    const qrCodeDTO: QrCodeDTO = {
      id: idQr
    };
    this.QrCodeService.createQrCode(qrCodeDTO)
  }
}
