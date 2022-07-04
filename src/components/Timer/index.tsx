import { useState, useEffect } from "react";
import { timeToSeconds } from "../../shared/utils/date";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface TimerProps {
  selected: ITask | undefined;
}

function Timer({ selected }: TimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  const countdown = (counter: number = 0) => {
    setTimeout(() => {
      if(counter > 0) {
        setTime(counter -1);
        return countdown(counter -1)
      }
    }, 1000)
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and star the timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time}></Clock>
      </div>
      <Button text="Start" onClick={() => countdown(time)}></Button>
    </div>
  );
}

export default Timer;
