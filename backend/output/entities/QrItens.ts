import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cardapio } from "./Cardapio";
import { QrCodesEntity } from "../../src/QrCode/qrCode.entity";

@Index("FK_qr_itens_cardápio", ["idPrato"], {})
@Index("FK_qr_itens_qr_codes", ["idQr"], {})
@Entity("qr_itens", { schema: "projtest" })
export class QrItens {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("smallint", { name: "id_prato", unsigned: true })
  idPrato: number;

  @Column("int", { name: "id_qr", unsigned: true })
  idQr: number;

  @ManyToOne(() => Cardapio, (cardapio) => cardapio.qrItens, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_prato", referencedColumnName: "idPrato" }])
  idPrato2: Cardapio;

  @ManyToOne(() => QrCodesEntity, (qrCodes) => qrCodes.qrItens, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_qr", referencedColumnName: "idQr" }])
  idQr2: QrCodesEntity;
}
