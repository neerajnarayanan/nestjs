import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, TEST, PRODUCTION } from '../database/database.constant';
import { DatabaseConfig } from '../database/database.config';
import  {Levels} from '../../database/models/levels';
import  {Standard} from '../../database/models/standard';
import  {Subject} from '../../database/models/subjects';


export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case DEVELOPMENT:
                    config = DatabaseConfig.development;
                    break;
                case TEST:
                    config = DatabaseConfig.test;
                    break;
                case PRODUCTION:
                    config = DatabaseConfig.production;
                    break;
    
                default:
                    break;
            }
    
            const sequelize = new Sequelize(config);
            sequelize.addModels([Levels,Standard,Subject]);
            return sequelize;
        },
    },
];

