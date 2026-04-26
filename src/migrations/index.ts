import * as migration_20260408_092611 from './20260408_092611';
import * as migration_20260426_094500 from './20260426_094500';

export const migrations = [
  {
    up: migration_20260408_092611.up,
    down: migration_20260408_092611.down,
    name: '20260408_092611'
  },
  {
    up: migration_20260426_094500.up,
    down: migration_20260426_094500.down,
    name: '20260426_094500'
  },
];
