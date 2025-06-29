import { ICategory } from "./models/category.interface";
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({
  name: 'category',
})
export class Category implements ICategory {
  @PrimaryGeneratedColumn('increment', {
    name:'id',
    type: 'int',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar'
  })
  name: string;
  
  @Column({
    name: 'created_at',
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}