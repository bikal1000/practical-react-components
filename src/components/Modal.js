import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ModalSection() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
      >
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalSection;
