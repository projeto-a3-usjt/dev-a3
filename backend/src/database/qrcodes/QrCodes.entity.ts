import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mesas } from "../mesas/Mesas.entity";
import { QrItens } from "./QrItens.entity";

@Index("FK_qr_codes_mesas", ["idMesa"], {})
@Entity("qr_codes", { schema: "projtest" })
export class QrCodes {
  @PrimaryGeneratedColumn({ type: "int", name: "id_qr", unsigned: true })
  idQr: number;

  @Column("varchar", { name: "hash", length: 6 })
  hash: string;

  @Column("varchar", { name: "nome", length: 32 })
  nome: string;

  @Column("tinyint", { name: "id_mesa", unsigned: true })
  idMesa: number;

  @ManyToOne(() => Mesas, (mesas) => mesas.qrCodes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_mesa", referencedColumnName: "idMesa" }])
  idMesa2: Mesas;

  @OneToMany(() => QrItens, (qrItens) => qrItens.idQr2)
  qrItens: QrItens[];
}
