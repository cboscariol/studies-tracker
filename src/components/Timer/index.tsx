import Button from "../Button"
import Clock from "./Clock"
import style from './Timer.module.scss'


function Timer() {
  return (
    <div className={style.timer}>
        <p className={style.title}>Choose a card and star the timer</p>
        <div className={style.clockWrapper}>
            <Clock></Clock>
        </div>
        <Button text="Start"></Button>
    </div>
  )
}

export default Timer