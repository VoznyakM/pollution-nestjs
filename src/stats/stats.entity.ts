import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, 
  UpdateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Stats extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  date: Date;

  @Column()
  cases: number;

  @Column()
  deaths: number;

  @Column()
  recovered: number;

  @Column({'default': 0})
  is_projection: boolean;
  /*
  @CreateDateColumn()
  @Column({ type: 'datetime', default: '0000-00-00' })
  created_at: Date;

  @UpdateDateColumn()
  @Column({ type: 'datetime', default: '0000-00-00' })
  updated_at: Date;
  */
}
