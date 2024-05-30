import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cardapio } from "../cardapio/Cardapio.entity";
import { QrCodes } from "./QrCodes.entity";

@Index("FK_qr_itens_cardápio", ["idPrato"], {})
@Index("FK_qr_itens_qr_codes", ["idQr"], {})
@Entity("qr_itens", { schema: "projtest" })
export class QrItens {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @ManyToOne(() => Cardapio, (cardapio) => cardapio.qrItens, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_prato", referencedColumnName: "idPrato" }])
  idPrato: Cardapio;

  @ManyToOne(() => QrCodes, (qrCodes) => qrCodes.qrItens, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_qr", referencedColumnName: "idQr" }])
  idQr: QrCodes;
}
