import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  Container,
  Positioned,
  Content,
  Header,
  CloseIcon,
  Scrollable,
  Background,
} from './styles';

interface ModalProps {
    visible: boolean;
    title?: string;
    width?: string;
    onClose: () => void;
    customStyle?: any;
    children: JSX.Element | JSX.Element[];
    hideCloseIcon?: boolean;
}

const Modal = ({
  visible, title, onClose, customStyle, children, hideCloseIcon, width,
}: ModalProps) => {
  useEffect(() => {
    const [body] = document.getElementsByTagName('body');

    if (visible) {
      body.style.overflowY = 'hidden';
    }

    return () => {
      body.style.overflowY = 'auto';
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <Container style={customStyle || {}}>
          <Positioned>
            <Background
              onClick={() => onClose()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />
            <Content
              key="content"
              width={width}
              animate={{ y: 0 }}
              initial={{ y: '75%' }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween' }}
            >
              <Header title={title}>
                {title}
                {!hideCloseIcon && <CloseIcon onClick={() => onClose()}>X</CloseIcon>}
              </Header>
              <Scrollable>{children}</Scrollable>
            </Content>
          </Positioned>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default Modal;
