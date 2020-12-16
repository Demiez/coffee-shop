import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;

  constructor(type: string, name: string, payload: Record<string, any>) {
    this.type = type;
    this.name = name;
    this.payload = payload;
  }
}
