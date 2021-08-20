



import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
// import { IDefineOptions }/ from 'sequelize-typescript/lib/interfaces/IDefineOptions';

const tableOptions = { timestamps: true };
@Table(tableOptions)
export class Levels extends Model<Levels> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
   
  })
  id: number;

  @Column
  level_name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

}
