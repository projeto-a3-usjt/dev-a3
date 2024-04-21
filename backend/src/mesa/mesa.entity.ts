import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cadastros } from "../../output/entities/Cadastros";
import { QrCodesEntity } from "../../src/QrCode/qrCode.entity";


@Index("FK_mesas_cadastros", ["idGarcom"], {})
@Entity("mesas", { schema: "projtest" })
export class MesaEntity {

  @PrimaryGeneratedColumn({ type: "tinyint", name: "id_mesa", unsigned: true })
  idMesa: number;

  @Column("char", { name: "id_garçom", nullable: true, length: 36 })
  idGarcom: string | null;

  @ManyToOne(() => Cadastros, (cadastros) => cadastros.mesas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })

  @JoinColumn([{ name: "id_garçom", referencedColumnName: "idUsuario" }])
  idGarcom2: Cadastros;

  @OneToMany(() => QrCodesEntity, (qrCodes) => qrCodes.idMesa2)
  qrCodes: QrCodesEntity[];
}
