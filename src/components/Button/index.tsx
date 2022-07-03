import style from './Button.module.scss'

type ButtonProps = {
  text: string,
  onClick?: any,
  type?: "button" | "submit" | "reset" | undefined
}


 function Button(props: ButtonProps) {
   return (
     <button className={style.button} type={props.type}  onClick={props.onClick}>{props.text}</button>
   )
 }

export default Button



//function Button(props: any) {
//  return (
//   <button className={style.button}>{props.children}</button>
//  )
//}

//props using chindren /\