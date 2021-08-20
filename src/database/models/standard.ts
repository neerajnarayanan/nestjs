



import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
// import { IDefineOptions }/ from 'sequelize-typescript/lib/interfaces/IDefineOptions';

const tableOptions = { timestamps: true };
@Table(tableOptions)
export class Standard extends Model<Standard> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID',
  })
  id: number;

  @Column
  standard_name: string;

  @Column
  subject_id: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

}









// 'use strict';

// export default (sequelize, DataTypes) => {
//   class standard extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   standard.init({
//     standard_name: DataTypes.STRING,
//     subject_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'standard',
//   });
//   return standard;
// };