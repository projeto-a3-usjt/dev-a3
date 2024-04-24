import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OpcoesPratoOpcoes } from "./OpcoesPratoOpcoes.entity";
import { PratoOpcoes } from "./PratoOpcoes.entity";

@Entity("opcoes_prato_index", { schema: "projtest" })
export class OpcoesPratoIndex {
  @PrimaryGeneratedColumn({
    type: "smallint",
    name: "id_opcao_index",
    unsigned: true,
  })
  idOpcaoIndex: number;

  @Column("varchar", { name: "titulo", length: 64 })
  titulo: string;

  @Column("varchar", { name: "comentario", nullable: true, length: 64 })
  comentario: string | null;

  @OneToMany(
    () => OpcoesPratoOpcoes,
    (opcoesPratoOpcoes) => opcoesPratoOpcoes.idOpcaoIndex
  )
  opcoesPratoOpcoes: OpcoesPratoOpcoes[];

  @OneToMany(() => PratoOpcoes, (pratoOpcoes) => pratoOpcoes.idOpcaoIndex)
  pratoOpcoes: PratoOpcoes[];
}
