import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Recipe } from "./recipe";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 32,
    nullable: false,
    unique: true
  })
  username!: string;

  @Column({
    type: "varchar",
    length: 32,
    nullable: false,
    unique: true
  })
  email!: string;

  @Column({
    type: "varchar",
    length: 128,
    nullable: false,
    select: false
  })
  password!: string;

  @OneToMany(() => Recipe, (recipe) => recipe.author, { onDelete: "CASCADE" })
  recipes: Recipe[];

  @ManyToMany(() => Recipe)
  @JoinTable({
    name: "favourites"
  })
  favourites: Recipe[]

  @Column({
    type: "bool",
    nullable: false,
    default: false
  })
  admin!: boolean;
}