import { Levels } from '../database/models/levels';
// import { USER_REPOSITORY } from '../../core/constants';

export const LevelProviders = [{
    provide: 'LEVEL_REPOSITORY',
    useValue: Levels,
}];