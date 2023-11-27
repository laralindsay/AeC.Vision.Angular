import { DateTime } from 'luxon';

export const getDateTime = (value: any): DateTime | null => {
  return [
    DateTime.fromJSDate(value),
    DateTime.fromSQL(value),
    DateTime.fromISO(value),
  ].find(x => x.isValid) ?? null;
}
