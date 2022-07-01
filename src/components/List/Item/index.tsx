import style from '../List.module.scss'


type ItemProps = {
    title: string,
    time: string,
  }

function Item(props: ItemProps) {
  return (
    <li className={style.item}>
    <h3>{props.title}</h3>
    <span>{props.time}</span>
  </li>
  )
}

export default Item