import { format } from 'date-fns-tz';

export const setFormatDate = (formatHour : string, date: string) => format(new Date(date), formatHour);

export const getCurrentDate = (formatHour : string) => format(new Date(), formatHour);
