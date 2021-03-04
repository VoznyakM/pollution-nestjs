import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, 
  UpdateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Report extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: ''})
  id_str: string;

  @Column({default: ''})
  source: string;

  @Column({default: ''})
  author: string;

  @Column({default: ''})
  avatar: string;

  @Column({default: ''})
  description: string;

  @Column({default: ''})
  address: string;

  @Column("float")
  lat: number;

  @Column("float")
  lng: number;

  @Column()
  status_id: number;

  @Column({ type: 'datetime', default: '0000-00-00' })
  orig_date: Date;
  
  @CreateDateColumn()
  @Column({ type: 'datetime', default: '0000-00-00' })
  created_at: Date;

  @UpdateDateColumn({ default: Date.now() })
  @Column({ type: 'datetime', default: '0000-00-00' })
  updated_at: Date;
}
