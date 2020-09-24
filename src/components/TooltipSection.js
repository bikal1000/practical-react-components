import React, { forwardRef } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const ColoredTooltip = () => {
  return (
    <span
      style={{
        color: 'yellow',
      }}
    >
      Colored tippy
    </span>
  );
};

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});

function TooltipSection() {
  return (
    <>
      <div
        style={{
          paddingBottom: '20px',
        }}
      >
        <Tippy
          placement="bottom"
          arrow="false"
          delay={1000}
          content={<span>Tooltip</span>}
        >
          <button>Hover</button>
        </Tippy>
      </div>
      <div
        style={{
          paddingBottom: '20px',
        }}
      >
        <Tippy content={<ColoredTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div
        style={{
          paddingBottom: '20px',
        }}
      >
        <Tippy content={<ColoredTooltip />}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </>
  );
}

export default TooltipSection;
