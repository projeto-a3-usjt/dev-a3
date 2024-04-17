import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TipoPrato } from "./TipoPrato";
import { PratoOpcoes } from "./PratoOpcoes";
import { QrItens } from "./QrItens";

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
  preO: string | null;

  @Column("tinyint", { name: "id_tipo", unsigned: true })
  idTipo: number;

  @ManyToOne(() => TipoPrato, (tipoPrato) => tipoPrato.cardapios, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_tipo", referencedColumnName: "idTipo" }])
  idTipo2: TipoPrato;

  @OneToMany(() => PratoOpcoes, (pratoOpcoes) => pratoOpcoes.idPrato2)
  pratoOpcoes: PratoOpcoes[];

  @OneToMany(() => QrItens, (qrItens) => qrItens.idPrato2)
  qrItens: QrItens[];
}
