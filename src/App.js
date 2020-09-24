import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Reacticon from './components/Reacticon';
import ToastNotification from './components/ToastNotification';
import ModalSection from './components/Modal';
import TooltipSection from './components/TooltipSection';
import CountUPSection from './components/CountUPSection';
import IdleTimer from './components/IdleTimer';
import ColorPickerSection from './components/ColorPickerSection';
import CreditCardSection from './components/CreditCardSection';
import DatePickerSection from './components/DatePickerSection';
import ReactSpinnerSection from './components/ReactSpinnerSection';
import ChartSection from './components/ChartSection';
import './index.css';

function App() {
  return (
    <div className="wrapper">
      <div>
        <h2>REACT ICONS</h2>
        <Reacticon />
      </div>
      <div>
        <h2>Toast Notification</h2>
        <ToastNotification />
      </div>
      <div>
        <h2>Modal</h2>
        <ModalSection />
      </div>
      <div>
        <h2>Tooltip</h2>
        <TooltipSection />
      </div>
      <div>
        <h2>CountUp</h2>
        <CountUPSection />
      </div>
      <div>
        <h2>Idle Timer</h2>
        <IdleTimer />
      </div>
      <div>
        <h2>Color Picker</h2>
        <ColorPickerSection />
      </div>
      <div>
        <h2>Credit Card</h2>
        <CreditCardSection />
      </div>
      <div>
        <h2>Date Picker</h2>
        <DatePickerSection />
      </div>
      <div>
        <h2>React Spinner</h2>
        <ReactSpinnerSection />
      </div>
      <div>
        <h2>chart</h2>
        <ChartSection />
      </div>
    </div>
  );
}

export default App;
