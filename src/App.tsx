import React from 'react';

import './App.scss';
import Timer from './components/timer/Timer';

function App() {
  return (
    <Timer
      time={60}
      step={1000}
      autostart
      onTick={() => console.log('tick')}
      onTimeEnd={() => console.log('End of time!')}
      onTimeStart={() => console.log('Timer started!')}
      onTimePause={() => console.log('Timer is paused!')}
    />
  );
}

export default App;
