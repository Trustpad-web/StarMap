import { RACES } from '@/constants';
import { RaceType } from '@/types';

export const getRaceId = (raceName: RaceType) => RACES[raceName] || '';

export const getRaceImage = (race: RaceType, folder: 'tooltip' | 'star-panel') => {
  return `./gui/images/${folder}/race-${getRaceId(race)}.png`;
};
