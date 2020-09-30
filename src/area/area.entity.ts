import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, 
  UpdateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Area extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: ''})
  title: string;

  @Column({default: ''})
  region: string;

  @Column("float")
  lat: number;

  @Column("float")
  lng: number;

  @Column()
  radius: number;

  @Column({default: 'ff0000'})
  color: string;

  @Column({default: '0'})
  probability: number;
  /*
  @CreateDateColumn()
  @Column({ type: 'datetime', default: '0000-00-00' })
  created_at: Date;

  @UpdateDateColumn({ default: Date.now() })
  @Column({ type: 'datetime', default: '0000-00-00' })
  updated_at: Date;
  */
}
