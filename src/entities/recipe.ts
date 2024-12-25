import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";
import { JSONValue } from "../types/json.type";

@Entity("recipes")
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.recipes, { nullable: true })
  author?: User;

  @Column({
    type: "varchar",
    length: 128,
  })
  name!: string;

  @Column({
    type: "varchar",
    length: 512,
    nullable: true
  })
  img: string;

  @Column({
    type: "varchar",
    length: 2048,
  })
  description: string;

  @Column({
    nullable: false,
  })
  time: number;

  @Column({
    type: "varchar",
    length: 2048,
    nullable: false,
  })
  manual: string;

  @Column({
    type: "jsonb",
    nullable: true
  })
  ingredients: JSONValue;
}