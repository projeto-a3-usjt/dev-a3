import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cadastros } from "../cadastros/Cadastros.entity";
import { QrCodes } from "../qrcodes/QrCodes.entity";

@Index("FK_mesas_cadastros", ["idGarcom"], {})
@Entity("mesas", { schema: "projtest" })
export class Mesas {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id_mesa", unsigned: true })
  idMesa: number;

  @ManyToOne(() => Cadastros, (cadastros) => cadastros.mesas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_garcom", referencedColumnName: "id_usuario" }])
  idGarcom: Cadastros;

  @OneToMany(() => QrCodes, (qrCodes) => qrCodes.idMesa)
  qrCodes: QrCodes[];
}
