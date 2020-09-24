import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
function CountUPSection() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false,
  });
  return (
    <div className="counter">
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button> <br />
        <button onClick={pauseResume}>pause/resule</button> <br />
        <button onClick={reset}>reset</button> <br />
        <button onClick={() => update(2000)}>update</button> <br />
      </div>
      <h2>
        {' '}
        <CountUp end={100} />
      </h2>
      <br />
      <h2>
        <CountUp start={500} end={1000} duration={5} />
      </h2>
      <br />
      <h2>
        <CountUp start={500} end={1000} duration={5} prefix="$" decimals={2} />
      </h2>
      <h2>
        <CountUp
          start={500}
          end={1000}
          duration={5}
          suffix="USD"
          decimals={2}
        />
      </h2>
    </div>
  );
}

export default CountUPSection;
