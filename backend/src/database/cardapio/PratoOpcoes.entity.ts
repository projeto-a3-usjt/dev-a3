import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cardapio } from "./Cardapio.entity";
import { OpcoesPratoIndex } from "./OpcoesPratoIndex.entity";

@Index("FK_prato_opções_cardápio", ["idPrato"], {})
@Index("FK_prato_opções_opções_prato_index", ["idOpcaoIndex"], {})
@Entity("prato_opcoes", { schema: "projtest" })
export class PratoOpcoes {
  @PrimaryGeneratedColumn({ type: "smallint", name: "id", unsigned: true })
  id: number;

  @ManyToOne(() => Cardapio, (cardapio) => cardapio.pratoOpcoes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "id_prato", referencedColumnName: "idPrato" }])
  idPrato: Cardapio;

  @ManyToOne(
    () => OpcoesPratoIndex,
    (opcoesPratoIndex) => opcoesPratoIndex.pratoOpcoes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "id_opcao_index", referencedColumnName: "idOpcaoIndex" },
  ])
  idOpcaoIndex: OpcoesPratoIndex;
}
