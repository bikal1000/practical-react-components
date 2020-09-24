import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function ColorPickerSection() {
  const [color, setColor] = useState('#000');
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? 'Close Color Picker' : 'Pick a color'}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <br />
      <br />
      <h2 style={{ color: color }}>You picked {color}</h2>
    </div>
  );
}

export default ColorPickerSection;
