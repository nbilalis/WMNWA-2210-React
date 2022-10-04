import ReactDOM from 'react-dom';

import styled from 'styled-components';

const Backdrop = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
`;

const Window = styled.div`
  display: flex;
  background-color: #242830;
  padding: 1em;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

interface ModalProps {
  message: string;
  buttonText?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

function Modal({ message, buttonText, isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Backdrop>
      <Window>
        <div className="message">{message}</div>
        <button onClick={onClose}>{buttonText || 'Close'}</button>
      </Window>
    </Backdrop>,
    document.body
  );
}

export default Modal;
