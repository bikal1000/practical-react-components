import React, { useState, useRef } from 'react';
import IdleTimer from 'react-idle-timer';
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

function IdleTimerSection() {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const idelTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);
  const onIdle = () => {
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };
  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
  };
  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedin(false);
    clearTimeout(sessionTimeoutRef.current);
  };
  return (
    <div>
      {isLoggedin ? <h2>Hello Bikal</h2> : <h2>Hello Guest</h2>}
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <h2>You've been idle for a while</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me sign in</button>
        </div>
      </Modal>
      <IdleTimer ref={idelTimerRef} timeout={10000} onIdle={onIdle}></IdleTimer>
    </div>
  );
}

export default IdleTimerSection;
