import { DashBoard } from '../components/UI/Icons/DashBoard';
import { Clients } from '../components/UI/Icons/Clients';
import { NewInvoice } from '../components/UI/Icons/NewInvoice';
import { Money } from '../components/UI/Icons/Money';
import { Settings } from '../components/UI/Icons/Settings';

export const ICONS_ORDER = [
  { id: 1, element: <DashBoard /> },
  { id: 2, element: <NewInvoice /> },
  { id: 3, element: <Money /> },
  { id: 4, element: <Money /> },
  { id: 5, element: <Clients /> },
  { id: 6, element: <Settings /> },
];

export const EMAIL_VALIDATION_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
