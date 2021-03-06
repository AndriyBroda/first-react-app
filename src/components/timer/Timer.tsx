import React, { useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import css from './Timer.module.scss';
import { toMMSS } from './../../helpers/helpers';
interface TimerProps {
  time: number;
  step: number;
  autostart?: boolean;

  onTick?: () => void;
  onTimeEnd?: () => void;
  onTimeStart?: () => void;
  onTimePause?: () => void;
}

const Timer = ({ time, step, autostart, onTick, onTimeEnd, onTimeStart, onTimePause }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [isPaused, setIsPaused] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  // const timer = useRef<NodeJS.Timeout | null>(null);
  const timer: any = useRef(null); // I used "any" because I can't clearInterval if there is a NodeJS.Timeout
  const timeLeftRef = useRef(timeLeft);

  timeLeftRef.current = timeLeft;

  const tick = () => {
    onTick?.();
    setTimeLeft(prevTimeLeft => Math.max(0, prevTimeLeft - step / 1000));

    if (timeLeftRef.current <= 0) {
      stopTimer();
      onTimeEnd?.();
      setIsFinished(true);
    }
  };

  const stopTimer = () => {
    clearInterval(timer.current);
    setIsPaused(true);
  };

  const startTimer = () => {
    timer.current = setInterval(tick, step);
    onTimeStart?.();
    setIsPaused(false);
  };

  const restartTimer = () => {
    setTimeLeft(time);
    setIsFinished(false);
  };

  const toggleTimer = () => {
    if (isFinished) {
      return restartTimer();
    }

    if (!isPaused) {
      stopTimer();
      onTimePause?.();
    } else {
      startTimer();
    }
  };

  useEffect(() => {
    if (autostart) {
      startTimer();
    }
  }, []);

  return (
    <div className={cn(css.timer)}>
      <span className={cn(css.timer__text)}>Remaining time: {toMMSS(timeLeft)}</span>

      <progress className={cn(css.timer__progress)} value={timeLeft} max={time} />

      <button className={cn(css.timer__toggleBtn)} onClick={toggleTimer}>
        {isPaused ? (isFinished ? 'Restart' : 'Start') : 'Pause'}
      </button>
    </div>
  );
};

export default Timer;
