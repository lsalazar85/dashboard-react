import { ChangeEventHandler } from 'react';

export interface ImageProps {
  width?: string;
  height?: string;
  src: string;
  alt: string;
  svgColor?: string;
}

export interface ChildrenElement {
  children: JSX.Element | JSX.Element[];
}

export interface IUseExchangeRate {
  currentRate: number;
  loading: boolean;
  error: Error | null;
}

export interface ITitle {
  text: string;
  fontSize: string;
  fontWeight: string;
  color?: string;
}
export interface IButton {
  fn?: () => void;
  text: string;
  disabled?: boolean;
  secondary?: boolean;
}

export interface ICard {
  children: JSX.Element | JSX.Element[];
  border?: string;
}

export interface ModalProps {
  title: string;
  show: boolean;
  onClose: () => void;
  content: JSX.Element | JSX.Element[];
}

export interface ISideMobileBar {
  pageWrapId: string;
  outerContainerId: string;
}

export interface IChart {
  color?: string;
}

export interface ISearch {
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

interface ITableHeaders {
  id: number;
  type: string;
}

export interface ITableItems {
  client: string;
  paymentStatus: string;
  cargoStatus: string;
  date: string;
  amount: number;
  typeOfPayment: string;
  installmentsPayed: string;
  paymentDueDate: string;
}

export interface ITable {
  headers: ITableHeaders[];
  tableItems: ITableItems[];
}
