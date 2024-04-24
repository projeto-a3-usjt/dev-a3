import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OpcoesPratoIndex } from "./OpcoesPratoIndex.entity";

@Index("FK_opções_prato_opções_opções_prato_index", ["idOpcaoIndex"], {})
@Entity("opcoes_prato_opcoes", { schema: "projtest" })
export class OpcoesPratoOpcoes {
  @PrimaryGeneratedColumn({
    type: "smallint",
    name: "id_opcao",
    unsigned: true,
  })
  idOpcao: number;

  @Column("varchar", { name: "opcao", length: 64 })
  opcao: string;

  @ManyToOne(
    () => OpcoesPratoIndex,
    (opcoesPratoIndex) => opcoesPratoIndex.opcoesPratoOpcoes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_opcao_index", referencedColumnName: "idOpcaoIndex" },
  ])
  idOpcaoIndex: OpcoesPratoIndex;
}
