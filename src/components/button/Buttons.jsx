import { Button } from 'antd'
import './Buttons.css'

const Buttons = (props) => {
  return (
    <div>
      <Button style={props.style} className ={`buttoncontrols ${props.className}`} onClick={props.onClick}> {props.title} </Button> 
    </div>
  )
}

export default Buttons
