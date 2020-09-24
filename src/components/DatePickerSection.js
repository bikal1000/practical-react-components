import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function DatePickerSection() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
      />
    </div>
  );
}

export default DatePickerSection;
