import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { MesaEntity } from "../mesa/mesa.entity";
  import { QrItens } from "../../output/entities/QrItens";
  
  @Index("FK_qr_codes_mesas", ["idMesa"], {})
  @Entity("qr_codes", { schema: "projtest" })
  export class QrCodesEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id_qr", unsigned: true })
    idQr: number;
  
    @Column("varchar", { name: "hash", length: 6 })
    hash: string;
  
    @Column("varchar", { name: "nome", length: 32 })
    nome: string;
  
    @Column("tinyint", { name: "id_mesa", unsigned: true })
    idMesa: number;
  
    @ManyToOne(() => MesaEntity, (mesas) => mesas.qrCodes, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "id_mesa", referencedColumnName: "idMesa" }])
    idMesa2: MesaEntity;
  
    @OneToMany(() => QrItens, (qrItens) => qrItens.idQr2)
    qrItens: QrItens[];
  }
  