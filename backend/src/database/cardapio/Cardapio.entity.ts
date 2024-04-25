import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TipoPrato } from "./TipoPrato.entity";
import { PratoOpcoes } from "./PratoOpcoes.entity";
import { QrItens } from "../qrcodes/QrItens.entity";

@Index("FK_cardápio_tipo_prato", ["idTipo"], {})
@Entity("cardapio", { schema: "projtest" })
export class Cardapio {
  @PrimaryGeneratedColumn({
    type: "smallint",
    name: "id_prato",
    unsigned: true,
  })
  idPrato: number;

  @Column("varchar", { name: "nome_prato", length: 64 })
  nomePrato: string;

  @Column("varchar", { name: "descricao", nullable: true, length: 256 })
  descricao: string | null;

  @Column("decimal", {
    name: "preço",
    nullable: true,
    unsigned: true,
    precision: 5,
    scale: 2,
  })
  preco: string | null;

  @ManyToOne(() => TipoPrato, (tipoPrato) => tipoPrato.cardapios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_tipo", referencedColumnName: "idTipo" }])
  idTipo: TipoPrato;

  @OneToMany(() => PratoOpcoes, (pratoOpcoes) => pratoOpcoes.idPrato)
  pratoOpcoes: PratoOpcoes[];

  @OneToMany(() => QrItens, (qrItens) => qrItens.idPrato)
  qrItens: QrItens[];
}
