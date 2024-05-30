import { Column, Entity, OneToMany } from "typeorm";
import { Mesas } from "../mesas/Mesas.entity";

@Entity("cadastros", { schema: "projtest" })
export class Cadastros {
  @Column("char", {
    primary: true,
    name: "id_usuario",
    comment: "UUID",
    length: 36,
  })
  id_usuario: string;

  @Column("varchar", { name: "username", length: 32, unique: true })
  username: string;

  @Column("char", { name: "senha", comment: "SHA-256", length: 64 })
  senha: string;

  @Column("varchar", { name: "nome", length: 64 })
  nome: string;

  @Column("bit", { name: "tipo_conta", default: () => "0" })
  tipoConta: boolean;

  @OneToMany(() => Mesas, (mesas) => mesas.garcom)
  mesas: Mesas[];
}
