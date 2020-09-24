import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

toast.configure();
function ToastNotification() {
  const notify = () => {
    toast.success('Wow so easy !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000,
    });
    toast.warn('Wow so easy !', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: false,
    });
    toast.error('Wow so easy !', {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast.info(<CustomToast />, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

export default ToastNotification;
