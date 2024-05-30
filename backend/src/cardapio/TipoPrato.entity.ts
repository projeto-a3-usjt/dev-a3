import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cardapio } from "./Cardapio.entity";

@Entity("tipo_prato", { schema: "projtest" })
export class TipoPrato {
  @PrimaryGeneratedColumn({ type: "tinyint", name: "id_tipo", unsigned: true })
  idTipo: number;

  @Column("varchar", { name: "nome", length: 32 })
  nome: string;

  @OneToMany(() => Cardapio, (cardapio) => cardapio.idTipo)
  cardapios: Cardapio[];
}
