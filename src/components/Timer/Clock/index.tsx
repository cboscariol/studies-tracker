import style from './Clock.module.scss'

function Clock() {
  return (
    <>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockGap}>:</span>
        <span className={style.clockNumber}>0</span>
        <span className={style.clockNumber}>0</span>
    </>
  )
}

export default Clock