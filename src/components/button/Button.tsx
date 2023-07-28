
const Button = ({...props}) => {
 
  return (
    <button {...props} className={props.className}>{props.children}</button>
  )
}

export default Button