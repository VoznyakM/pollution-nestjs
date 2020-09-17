import { Entity, BaseEntity, PrimaryColumn, Column, CreateDateColumn, 
  UpdateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Setting extends BaseEntity {

  @PrimaryColumn()
  name: string;

  @Column({ type: 'text', default: ''})
  value: string;

  @CreateDateColumn()
  @Column({ type: 'datetime', default: '0000-00-00' })
  created_at: Date;

  @UpdateDateColumn({ default: Date.now() })
  @Column({ type: 'datetime', default: '0000-00-00' })
  updated_at: Date;

}