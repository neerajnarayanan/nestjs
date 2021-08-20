import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';
// import { IDefineOptions }/ from 'sequelize-typescript/lib/interfaces/IDefineOptions';

const tableOptions = { timestamps: true };
@Table(tableOptions)
export class Subject extends Model<Subject> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID',
  })
  id: number;

  @Column
  subject_name: string;

  @Column
  level_name: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
}

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// export default (sequelize, DataTypes) => {
//   class subjects extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   subjects.init({
//     subject_name: DataTypes.STRING,
//     level_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'subjects',
//   });
//   return subjects;
// };
