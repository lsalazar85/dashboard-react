export interface ImageProps {
  width: string;
  height?: string;
  src: string;
  alt: string;
}

export interface ChildrenElement {
  children: JSX.Element | JSX.Element[];
}

export interface IUseExchangeRate {
  currentRate: number;
  loading: boolean;
  error: Error | null;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface ModalProps {
  title: string;
  show: boolean;
  onClose: () => void;
  content: JSX.Element | JSX.Element[];
}
