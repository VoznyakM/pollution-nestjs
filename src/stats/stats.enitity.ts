import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Stats extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  cases: number;

  @Column()
  deaths: number;

  @Column()
  recovered: number;

  @Column('datetime')
  created_at: Date;

  @Column('datetime')
  updated_at: Date;

}