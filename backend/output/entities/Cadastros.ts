import { Column, Entity, OneToMany } from "typeorm";
import { MesaEntity } from "../../src/mesa/mesa.entity";

@Entity("cadastros", { schema: "projtest" })
export class Cadastros {
  @Column("char", {
    primary: true,
    name: "id_usuario",
    comment: "UUID",
    length: 36,
  })

  idUsuario: string;

  @Column("varchar", { name: "username", length: 32 })
  username: string;

  @Column("char", { name: "senha", comment: "SHA-256", length: 64 })
  senha: string;

  @Column("varchar", { name: "nome", length: 64 })
  nome: string;

  @Column("bit", { name: "tipo_conta", default: () => "'0'" })
  tipoConta: boolean;

  @OneToMany(() => MesaEntity, (mesas) => mesas.idGarcom2)
  mesas: MesaEntity[];
  
}
