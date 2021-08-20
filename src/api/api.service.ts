import { Injectable, Inject } from '@nestjs/common';
const db = require('../../models');
const { QueryTypes } = require('sequelize');

@Injectable()
export class ApiService {
  constructor(@Inject('LEVEL_REPOSITORY') private readonly levelRepository) {}

  async findAll(): Promise<any> {
    return await db.sequelize.query(
      `select
      level_name,
      json_agg(json_build_object('subject_name',SUB.subject_name, 'standards',
      standards)) as subjects from public."Subjects" SUB left join 
        (
        select
          json_agg(json_build_object('standard_name',standard_name,'nceaCode', id)) as standards,
       
            id
         
        from 
          public."Standards"
        group by
          standard_name,id
        ) x on x.id= SUB.id group by level_name;`,
      { type: QueryTypes.SELECT },
    );
  }
  // GROUP BY LVL.level_name,SUB.subject_name,STDS.subject_id,STDS.standard_name
}
