import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, 
  UpdateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Report extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
  
  @CreateDateColumn()
  @Column({ type: 'datetime', default: '0000-00-00' })
  created_at: Date;

  @UpdateDateColumn({ default: Date.now() })
  @Column({ type: 'datetime', default: '0000-00-00' })
  updated_at: Date;
}
