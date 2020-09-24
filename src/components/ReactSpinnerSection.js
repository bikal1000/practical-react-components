import React from 'react';
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function ReactSpinnerSection() {
  return (
    <div>
      <BounceLoader css={override} size={85} loading />
      <br />
      <BarLoader loading />
      <br />
      <BeatLoader loading />
    </div>
  );
}

export default ReactSpinnerSection;
