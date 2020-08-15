import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'
import {Animated} from "react-animated-css";
import Input from '../Form/Form'

class Modal extends Component {

//   shouldComponentUpdate (nextProps, nextState) {
//     return  nextProps.show !== this.props.show
//   }

render () {
    return (
      <Aux>
      <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      <Animated animationIn="rotateInDownRight" animationOut="rotateOutUpRight" animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
        <div className='Modal'>
          <form>
            <Input inputtype='input' type="text" name="time" placeholder="How long"/>
            <Input inputtype='input' type="text" name="difficulty" placeholder="How difficult"/>
          </form>
        </div>
      </Animated>
      </Aux>
    )
    }
}

export default Modal