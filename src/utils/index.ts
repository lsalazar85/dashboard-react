import { format } from 'date-fns-tz';

export const getCurrentDate = () => format(new Date(), 'MMM dd, yyyy');
